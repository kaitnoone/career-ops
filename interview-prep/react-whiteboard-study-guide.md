# React Whiteboard Study Guide

Reference + practice templates for live-coding interviews. Optimized for senior FE/SE interviews where you'll be asked to build a component in ~45 min while narrating your thinking.

Companion to `story-bank.md` (behavioral) — this is the technical side.

---

## The meta: how to actually pass these

What interviewers watch for, in order of weight:

1. **Clarifying questions.** Senior candidates don't start coding until they've scoped the ask. Missing this is the #1 signal of a junior-leveled candidate.
2. **Narration.** Talking through tradeoffs, decisions, and what you're deferring. Silence reads as uncertainty.
3. **Structure, not syntax.** Reasonable component boundaries + clean data flow beat clever one-liners. Syntax mistakes get some grace at senior level; messy structure doesn't.
4. **Iterative MVP.** Build the happy path first, then add edge cases (loading, error, empty, accessibility). Don't try to make the first version perfect.
5. **"What would you test?"** Even if you don't write tests, naming what you'd test signals seniority.
6. **A11y instinct.** Keyboard nav, ARIA, focus management — senior-level candidates don't forget these.

### Time-boxing a 45-min interview

| Minutes | What |
|---|---|
| 0–5 | Clarifying questions + sketch the data shape + name the component API |
| 5–10 | Static scaffolding — JSX structure, no state yet |
| 10–25 | Core behavior (state, handlers, the happy path) |
| 25–35 | Edge cases (loading, error, empty, a11y) |
| 35–40 | "If I had more time, here's what I'd add" — polish/perf/testing walkthrough |
| 40–45 | Questions for interviewer |

The last 5 min is the seniority signal: "here's what I didn't get to and why it matters" is better than jamming in half-done features.

### Clarifying questions to always ask

- **Inputs / data shape.** "What does the data look like? Where does it come from?"
- **Scale.** "How many items? Is the list ~10 or ~10,000?" (decides virtualization)
- **Interactions.** "What happens on click/hover/keyboard?" (don't assume)
- **Edge cases.** "What if the list is empty? What if the API fails?"
- **Styling scope.** "Should I write real CSS, or is describing the layout enough?"
- **Environment.** "Can I assume modern React (hooks, TS)? Any libraries I can use?"

---

## Core React — fluent, not memorized

### useState

```tsx
const [count, setCount] = useState(0);
const [count, setCount] = useState<number>(0);              // explicit type if inferrable is ambiguous
setCount((prev) => prev + 1);                                // functional update when new state depends on old
```

**When to use functional update:** any time you update based on previous state, especially in handlers that can be called multiple times in a single render cycle (e.g., debounced, async).

### useEffect

```tsx
useEffect(() => {
  // setup
  return () => {
    // cleanup — runs before next effect AND on unmount
  };
}, [deps]);
```

**Talking points that signal seniority:**

- **Empty deps `[]`** = run once on mount. Fine for subscriptions, one-time fetches.
- **No deps array** = run on every render. Almost always wrong.
- **Missing deps** is a common bug. The ESLint rule `react-hooks/exhaustive-deps` catches it — mention it.
- **Cleanup matters.** Subscriptions, timers, event listeners, fetches (abort). Leaks cause bugs in long-lived apps.
- **Effects for derived state are usually wrong.** If something can be computed from props/state during render, compute it during render, not in an effect.
- **Race conditions in data fetching.** If `id` changes fast, responses can come back out of order. Use AbortController or an `ignore` flag.

### useRef

Two uses, often conflated:

1. **DOM access.** `const inputRef = useRef<HTMLInputElement>(null); <input ref={inputRef} />; inputRef.current?.focus();`
2. **Mutable value that doesn't trigger re-render.** For timers, latest-value tracking, imperative handles.

### useMemo + useCallback

The senior take: **don't reach for these by default.** They add complexity for often-negligible gains. Reach for them when:

- A child is wrapped in `React.memo` and you're passing an inline object/function prop
- A computation is genuinely expensive (tight loop, large data transform)
- A value is in another hook's dep array and must be stable

If you sprinkle them everywhere "for perf," that's a junior tell.

### useContext

```tsx
const ThemeContext = createContext<Theme | null>(null);

function useTheme() {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error("useTheme must be used within ThemeProvider");
  return theme;
}
```

**Talking points:**

- Context re-renders all consumers when value changes. For high-frequency updates, split into multiple contexts or use a state library (Zustand, Jotai, Redux).
- Wrap context value in `useMemo` if it's an object, to avoid re-renders on parent re-render.
- Custom hook wrapper (`useTheme`) catches "used outside provider" early.

### useReducer

```tsx
type State = { count: number };
type Action = { type: "increment" } | { type: "set"; value: number };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment": return { ...state, count: state.count + 1 };
    case "set": return { ...state, count: action.value };
  }
}

const [state, dispatch] = useReducer(reducer, { count: 0 });
```

**When to reach for it over useState:**

- Multiple related state fields that update together
- Next state depends on previous state in complex ways
- Want to test state transitions in isolation
- Complex actions that need descriptive names

### Custom hooks

Extract any stateful logic that could be reused. Name starts with `use`. Example:

```tsx
function useDebounced<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}
```

**Signals seniority to pull these out** when you see duplication — don't wait to be told.

---

## Patterns you'll reach for

### Controlled vs uncontrolled

- **Controlled:** parent owns state, passes `value` + `onChange`. Default for senior code.
- **Uncontrolled:** DOM owns state via `defaultValue` + `ref.current.value`. Use when you don't need to read until submit (simple forms).

Many senior interview prompts quietly test this: "build a form with a submit button." Controlled is the safer choice.

### Compound components (Tabs, Select, Accordion)

Parent maintains state, children consume via context. API looks like:

```tsx
<Tabs defaultValue="a">
  <TabList>
    <Tab value="a">A</Tab>
    <Tab value="b">B</Tab>
  </TabList>
  <TabPanel value="a">Panel A</TabPanel>
  <TabPanel value="b">Panel B</TabPanel>
</Tabs>
```

This is the idiomatic API for grouped components. Worth knowing how to sketch — comes up a lot in "design a component library API" prompts.

### Reducer + context for feature-scope state

When a subtree has non-trivial state (form wizard, multi-step checkout, editor), combine `useReducer` with `useContext`. Two contexts: one for state, one for dispatch. Prevents re-renders on components that only dispatch.

### Data fetching the right way

```tsx
function useData<T>(url: string) {
  const [state, setState] = useState<{ data?: T; error?: Error; loading: boolean }>({ loading: true });

  useEffect(() => {
    const ac = new AbortController();
    setState({ loading: true });
    fetch(url, { signal: ac.signal })
      .then((r) => r.json())
      .then((data) => setState({ data, loading: false }))
      .catch((error) => {
        if (error.name !== "AbortError") setState({ error, loading: false });
      });
    return () => ac.abort();
  }, [url]);

  return state;
}
```

**Talking points:** loading/error/empty is the three-state minimum. AbortController prevents race conditions. In production, you'd use React Query / SWR — mention it.

---

## Problem templates (the common prompts)

### 1. Autocomplete / typeahead

Core shape:

```tsx
function Autocomplete({ fetchSuggestions }: { fetchSuggestions: (q: string) => Promise<string[]> }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const debouncedQuery = useDebounced(query, 200);

  useEffect(() => {
    if (!debouncedQuery) { setSuggestions([]); return; }
    const ac = new AbortController();
    fetchSuggestions(debouncedQuery).then(setSuggestions).catch(() => {});
    return () => ac.abort();
  }, [debouncedQuery, fetchSuggestions]);

  return (
    <div role="combobox" aria-expanded={suggestions.length > 0}>
      <input value={query} onChange={(e) => setQuery(e.target.value)} aria-autocomplete="list" />
      {suggestions.length > 0 && (
        <ul role="listbox">
          {suggestions.map((s) => <li role="option" key={s}>{s}</li>)}
        </ul>
      )}
    </div>
  );
}
```

**Things to mention (even if not implementing):**
- Debouncing (included)
- Keyboard nav (ArrowDown/Up, Enter, Escape)
- Active descendant pattern (`aria-activedescendant`)
- Click-outside to close
- Race condition handling

### 2. Modal / dialog with focus trap

Focus moves to modal on open. Tab cycles within modal only. Escape closes. Focus returns to trigger on close.

```tsx
function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement as HTMLElement;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
      previouslyFocused.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;
  return createPortal(
    <div role="dialog" aria-modal="true" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>,
    document.body
  );
}
```

**Mention:** real focus trap (Tab + Shift-Tab cycling) is non-trivial — production would use `focus-trap-react` or similar.

### 3. Infinite scroll

Use `IntersectionObserver` on a sentinel element at the bottom of the list.

```tsx
function useIntersection(ref: React.RefObject<Element>, onIntersect: () => void) {
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) onIntersect(); });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, onIntersect]);
}
```

Parent tracks `pages`, sentinel triggers `loadMore()`. Mention virtualization (`react-window`) if list can be huge.

### 4. Todo list with add/remove/edit/filter

Classic. Signal seniority by:
- Using `useReducer` for the state transitions
- Keys on list items (never array index — use stable IDs)
- Immutable updates
- Keyboard support (Enter to add/save, Escape to cancel edit)
- Persisting to localStorage (bonus)

### 5. Fetching list with loading/error/empty states

Use the `useData` hook above. The hiring signal is **showing all three states explicitly** (most candidates only handle loading + success).

```tsx
if (loading) return <Spinner aria-label="Loading..." />;
if (error) return <ErrorBanner error={error} onRetry={refetch} />;
if (data.length === 0) return <EmptyState />;
return <List items={data} />;
```

### 6. Countdown timer

```tsx
function Countdown({ seconds: initial }: { seconds: number }) {
  const [remaining, setRemaining] = useState(initial);
  useEffect(() => {
    if (remaining <= 0) return;
    const t = setInterval(() => setRemaining((r) => r - 1), 1000);
    return () => clearInterval(t);
  }, [remaining]);
  return <div aria-live="polite">{remaining}</div>;
}
```

**Traps to avoid:** referencing `remaining` in a non-functional update inside setInterval (stale closure). Using functional `setRemaining((r) => r - 1)` avoids it.

### 7. Carousel / image gallery

- Keyboard: ArrowLeft/Right
- ARIA: `aria-roledescription="carousel"`, each slide `aria-roledescription="slide"`, `aria-label="N of M"`
- Reduced motion: respect `prefers-reduced-motion`
- Don't lazy-mount hidden slides if a11y is critical — screen readers can't announce them

### 8. Debounced search box

Same pattern as autocomplete but simpler — just the input + results list, no keyboard nav on results.

---

## Accessibility cheatsheet (senior signal)

Things to mention/implement on any component:

| Component type | A11y must-haves |
|---|---|
| Button | `<button>`, not `<div onClick>` |
| Link | `<a href>`, not `<span onClick>` |
| Modal | `role="dialog"`, `aria-modal="true"`, focus trap, Escape to close, focus return on close |
| Form field | `<label>` with `htmlFor`, error text linked via `aria-describedby`, `aria-invalid` on error |
| List of selectable | `role="listbox"` / `role="option"`, `aria-selected`, keyboard nav |
| Loading state | `aria-live="polite"` or `role="status"` |
| Error announcement | `role="alert"` |
| Icon-only button | `aria-label` |
| Heading hierarchy | Don't skip levels (h1 → h3) |
| Tab order | Logical; `tabIndex={-1}` to remove, `tabIndex={0}` to include |

If you get flustered, a fallback talking point: "I'd run it through axe DevTools and keyboard-test it with screen reader on — that catches 80% of common issues."

---

## Performance talking points

Reach for in order:

1. **Virtualization** for long lists (`react-window`, `react-virtual`)
2. **Code splitting** with `React.lazy` + `Suspense`
3. **Images:** `loading="lazy"`, `srcset`, modern formats
4. **Debounce/throttle** expensive handlers
5. **`React.memo`** wrapping leaf components with stable props
6. **`useMemo`/`useCallback`** — only if 5 is in place and it's measurable
7. **Web workers** for truly expensive compute off the main thread

What a senior says vs what a junior says:

> Junior: "I'd add useMemo to speed this up."
> Senior: "I'd profile first. If it's a render-path issue, I'd look at list virtualization. If it's a compute issue, useMemo or a worker. I don't reach for memoization without a measurement."

---

## Testing talking points

You probably won't write tests in a 45-min interview. You should be able to answer "what would you test?"

- **Behavior, not implementation.** React Testing Library philosophy: query by role/label, interact via `user-event`, assert on visible output.
- **Three layers:** unit (pure functions, hooks with `renderHook`), component (RTL), integration (mocked fetch, full page).
- **Things worth testing:** loading/error/empty states, user flows (type → debounce → fetch → render), accessibility (role/label queries), edge cases (empty data, slow network, fast typing).
- **Things NOT worth testing:** implementation details (state variable names, effect counts), styling (use visual regression instead).

---

## TypeScript quick-reference

Things to know for React + TS:

```tsx
// Component props
type Props = { label: string; onClick: () => void; children?: React.ReactNode };
function Button({ label, onClick, children }: Props) { ... }

// Event handlers
onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
onSubmit: (e: React.FormEvent<HTMLFormElement>) => void

// Refs
const ref = useRef<HTMLDivElement>(null);

// Generic components
function List<T>({ items, render }: { items: T[]; render: (item: T) => React.ReactNode }) { ... }
```

**Talking points:** prefer `type` over `interface` for component props (simpler, same result 99% of the time). Don't type return value unless it's ambiguous.

---

## SE-specific flavor (for Solutions Engineer interviews)

SE live-coding tends to be:
- **Less algorithm-y, more integration-y.** "Here's our API — build a small demo that consumes it."
- **Customer-simulation.** Interviewer plays a customer asking for a feature; you scope + build.
- **Tradeoff conversations.** Expect "why this approach and not that one?" — narrate as you go.

What matters:
- Clean API integration shape (error handling, loading, retries)
- Clear component boundaries that map to how a customer would extend it
- Talking about what you'd add next (auth, pagination, caching)
- Asking good clarifying questions — SE candidates who don't ask are a red flag

Your strength here: the Taproom enterprise integration work, Gravity Works CMS client training. Lean into "I'm used to building on top of external APIs for clients."

---

## Practice problems (pick and build, 30 min each)

1. Autocomplete with keyboard nav
2. Modal with focus trap
3. Sortable/filterable table (no library)
4. Infinite scroll
5. Todo list with localStorage persistence
6. Image gallery with keyboard nav
7. Tabs (compound component)
8. Multi-step form wizard
9. Drag-and-drop list (HTML5 DnD, not a library)
10. Live search with debounce + AbortController

**How to practice:**
- Cold-open: no docs, no StackOverflow, no Copilot
- Narrate out loud as you go (record yourself if you can stand it)
- Timer at 30 min — stop even if unfinished
- Critique: what did I get stuck on? Which concept to drill?

---

## Your specific reps to drill

Given your 9y/2y (frontend/React) shape:

| Drill this | Because |
|---|---|
| React-idiomatic state patterns (not Vue-adjacent) | Vue's reactive + computed is close but not identical; React's "re-render everything that changed" model catches Vue folks |
| Hooks ordering + rules | React's "call hooks in the same order every render" rule has no Vue equivalent and bites converts |
| Effect deps + cleanup | Vue's `watch` + `onUnmounted` are different enough to cause bugs |
| Controlled components | Vue `v-model` hides the controlled pattern; React makes you write it out |
| Keys in lists | Vue auto-keys more generously; React trips people who default to index |
| Error boundaries | Vue 3 has `onErrorCaptured`; React has class-only boundaries still (no hooks version as of April 2026) |

If you have 5 hours to prep, spend:
- 1 hour re-reading React docs on effects (they were rewritten well in 2023+)
- 2 hours building 3 problems from scratch, narrating
- 1 hour on a11y patterns (WAI-ARIA Authoring Practices — you already know this cold, use it to pad confidence)
- 1 hour mock-interviewing a friend or recording yourself solving one prompt

If you have 1 hour: pick one problem from the list and build it narrated, timer on.
