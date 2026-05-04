# Vanilla JS / DOM Refresher — Live-Coding Cheat Sheet

**Purpose:** ~30–60 min skim before any live-coding round. Specifically calibrated for QM HM live tech 2026-05-04, but reusable.

**Why this exists:** Per `user_vanilla_js_rust` — core JS is strong but raw DOM patterns get rusty under live-coding pressure. Per `user_recharge_remix_stack` — 2 years on Remix means framework reflexes overshadow vanilla DOM/React. The 8 patterns below are the ones most likely to come up and most worth refreshing.

---

## 1. querySelectorAll iteration

```js
// ✓ for...of works
for (const el of document.querySelectorAll('.row')) {
  el.classList.add('selected')
}

// ✓ forEach works on NodeList in modern browsers
document.querySelectorAll('.row').forEach(el => el.classList.add('selected'))

// ✗ for...in DOES NOT work (returns indices + inherited props)

// Convert to array when you need .map / .filter / .reduce:
const rows = [...document.querySelectorAll('.row')]
// or:
const rows = Array.from(document.querySelectorAll('.row'))
```

**Gotchas:**
- `querySelectorAll` returns a **static** NodeList (snapshot at call time). Doesn't auto-update.
- `getElementsByClassName` returns a **live** HTMLCollection. Different beast.
- If you need methods like `.filter` or `.find`, spread/Array.from first.

**MDN:** [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)

---

## 2. classList API

```js
el.classList.add('x')
el.classList.remove('x')
el.classList.toggle('x')           // toggles on/off
el.classList.toggle('x', cond)     // forces based on cond (true=add, false=remove)
el.classList.contains('x')         // returns boolean
el.classList.replace('old', 'new')

// Add/remove multiple:
el.classList.add('x', 'y', 'z')
el.classList.remove('x', 'y')
```

**Don't:** `el.className += ' x'` — error-prone (duplicates, whitespace bugs).

**MDN:** [Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

---

## 3. sessionStorage / localStorage

```js
// Write — always JSON.stringify (storage is string-only):
sessionStorage.setItem('user', JSON.stringify({ name: 'Kait', id: 42 }))

// Read — null-safe with ?? defaultValue:
const stored = sessionStorage.getItem('user')
const user = stored ? JSON.parse(stored) : null
// or with try/catch for resilience:
let user = null
try {
  user = JSON.parse(sessionStorage.getItem('user') ?? 'null')
} catch (e) {
  user = null  // corrupted data
}

sessionStorage.removeItem('user')
sessionStorage.clear()  // wipes everything for this origin
```

**Gotchas:**
- `sessionStorage` = **tab lifetime** (closes with tab)
- `localStorage` = **persistent** until cleared
- Both throw on quota exceeded — wrap writes in try/catch if data could be large
- Both store **strings only** — always JSON serialize

**MDN:** [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)

---

## 4. addEventListener cleanup

```js
// ✗ DOESN'T WORK — different function reference:
el.addEventListener('click', () => doThing())
el.removeEventListener('click', () => doThing())  // doesn't match

// ✓ Named function reference:
function handleClick() { doThing() }
el.addEventListener('click', handleClick)
el.removeEventListener('click', handleClick)

// ✓ MODERN: AbortController + signal — cleanest cleanup pattern
const controller = new AbortController()
el.addEventListener('click', handleClick, { signal: controller.signal })
window.addEventListener('keydown', handleKey, { signal: controller.signal })
fetch('/api', { signal: controller.signal })
// later: removes ALL listeners + cancels fetch:
controller.abort()
```

**Gotchas:**
- AbortController works on `fetch`, `addEventListener`, and many other browser APIs — one cleanup mechanism for all of them
- `{ once: true }` option auto-removes after first call: `el.addEventListener('click', handler, { once: true })`
- `{ passive: true }` for scroll/touch handlers — performance optimization

**MDN:** [EventTarget.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) · [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)

---

## 5. Event delegation

```js
// Listen on parent, delegate to children:
container.addEventListener('click', (event) => {
  const button = event.target.closest('.delete-btn')
  if (!button) return  // click wasn't on a delete button
  const row = button.closest('.row')
  deleteRow(row.dataset.id)
})
```

**Key distinction:**
- `event.target` = the element that was actually clicked (deepest element)
- `event.currentTarget` = the element with the listener attached (parent in delegation)
- Use `.closest('.selector')` to find the relevant ancestor

**Gotchas:**
- Delegation is the standard pattern for dynamic lists (rows added/removed) — saves attaching N listeners
- Inside an arrow function callback, `this` doesn't bind to the element; use `event.currentTarget` instead

---

## 6. Modern fetch / async

```js
async function loadUser(id, signal) {
  try {
    const response = await fetch(`/api/users/${id}`, { signal })
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }
    return await response.json()
  } catch (err) {
    if (err.name === 'AbortError') {
      // expected cancellation, don't error-toast
      return null
    }
    console.error('Failed to load user:', err)
    throw err
  }
}

// With AbortController for cancellation:
const controller = new AbortController()
const userPromise = loadUser(42, controller.signal)
// later:
controller.abort()  // cancels in-flight fetch
```

**Gotchas:**
- `await fetch()` resolves on HTTP response (even 404, 500). Always check `response.ok` before `.json()`.
- `await response.json()` itself can throw on bad JSON — wrap in try/catch
- AbortError is expected when a user navigates away mid-fetch; don't surface it as a real error

**MDN:** [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

---

## 7. DOM creation

```js
// Modern, common pattern:
const div = document.createElement('div')
div.className = 'row'
div.textContent = 'Hello'              // text-only, XSS-safe
div.appendChild(child)
container.append(div, anotherDiv, 'plain text string')  // accepts multiple, mixes nodes + strings

// Replace all children at once (modern):
container.replaceChildren(...newChildren)

// Insert HTML (only if input is XSS-safe):
container.insertAdjacentHTML('beforeend', '<div class="row">Safe HTML</div>')

// Read attributes / data:
const id = el.dataset.userId          // <div data-user-id="42"> → "42"
const role = el.getAttribute('role')
```

**Gotchas:**
- `textContent` ≠ `innerText` — `textContent` is faster and gets all text including hidden. Use `textContent` unless you specifically need rendered text.
- `innerHTML = string` is **XSS-vulnerable** — only use with trusted input or use `textContent` instead.
- `el.dataset.fooBar` corresponds to `data-foo-bar` HTML attribute (camelCase ↔ kebab-case)

---

## 8. Form handling

```js
form.addEventListener('submit', (event) => {
  event.preventDefault()              // CRITICAL — prevents default form POST + page reload
  const data = new FormData(event.target)

  // Get individual fields:
  const email = data.get('email')
  const tags = data.getAll('tags[]')  // for multi-value fields

  // Iterate all entries:
  for (const [key, value] of data.entries()) {
    console.log(key, value)
  }

  // Convert to plain object (loses multi-value fields):
  const obj = Object.fromEntries(data)

  // Submit via fetch:
  await fetch('/api/submit', {
    method: 'POST',
    body: data  // FormData works directly as body
  })
})
```

**Gotchas:**
- `event.preventDefault()` MUST be called first — otherwise the browser navigates and unmounts your handler before the rest runs
- Form input `name` attributes are what FormData reads — `id` is for labels/CSS, `name` is for FormData/server
- File inputs need `enctype="multipart/form-data"` on the form to submit properly via FormData

**MDN:** [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)

---

## Live-coding posture (per QM HM Live Tech prep)

When the prompt comes:

1. **Talk while coding.** "I'm going to use querySelectorAll to grab the rows, then iterate with for...of and toggle a class…" Narration is half the eval.
2. **Ask clarifying questions.** "Should this handle empty inputs?" "Are we just toggling state or also persisting it?" "Do we need to handle the resize case?" Senior-IC moves.
3. **Trace through with one example.** "Let me walk this with one row to make sure the logic works." Catches bugs before they ship.
4. **Don't apologize for thinking.** Pauses are normal. Filling silence with "um, I think maybe…" is the softener-tic the self-debrief flagged.
5. **If you don't know a vanilla pattern off the top of your head, name what you'd reach for if you had MDN open.** "I'd want to use AbortController here for cleanup — let me think through the syntax." Senior engineers know the patterns and reference for syntax; that's not a weakness.

---

## Vanilla React patterns (lighter — soft area per memory)

If the prompt is React-flavored (instead of vanilla DOM), the patterns most likely to come up:

```js
// useEffect for data fetching (the pattern Remix replaces with loaders):
useEffect(() => {
  const controller = new AbortController()
  fetch('/api/data', { signal: controller.signal })
    .then(r => r.json())
    .then(setData)
    .catch(err => {
      if (err.name !== 'AbortError') setError(err)
    })
  return () => controller.abort()  // cleanup on unmount
}, [/* deps */])

// useState with computed initial value (lazy init):
const [items, setItems] = useState(() => loadFromStorage())

// useReducer for complex state:
const [state, dispatch] = useReducer(reducer, initialState)

// Functional updates when state depends on previous:
setCount(c => c + 1)  // safe in concurrent rendering

// Custom hook pattern:
function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])
  return debounced
}
```

**Honest framing if asked about these in screen:** "Recharge ran on Remix for the latter half of my tenure, so my recent React work is heavier on loaders/actions than on classic useEffect-for-fetching. I'd ramp on the vanilla patterns quickly — they're the same primitives, just without the framework conventions wrapping them."

---

## Time budget for Monday morning

- Browse 5 min: skim NodeList + classList + addEventListener pages
- Browse 10 min: AbortController + Web Storage API
- Browse 10 min: Fetch API + FormData
- Code 10 min: write a tiny snippet using each pattern (just to feel the syntax flow)
- Total: ~35 min, leaves buffer for coffee + final prep-doc review before the call
