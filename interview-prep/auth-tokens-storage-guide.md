# Auth Token Storage in the Browser — A Reference Guide

**Purpose:** A focused reference on JWTs, browser storage trade-offs, and the modern best-practice pattern for auth in web apps. Not QM-specific; meant for general learning + interview prep + actual implementation decisions on future projects.

**Reading time:** ~15 min if you read it through; reference indefinitely after that.

---

## 1. What JWTs are

**JWT = JSON Web Token.** A format for representing data (claims) in a way that can be cryptographically verified.

A JWT looks like three base64url-encoded parts joined by dots:

```
eyJhbGc...  .  eyJzdWI...  .  SflKxwRJSMeKKF...
   header         payload         signature
```

Decode the parts and you get:

```json
// header
{ "alg": "HS256", "typ": "JWT" }

// payload (the actual data — "claims")
{
  "sub": "user-42",
  "name": "Kaitlyn",
  "iat": 1714600000,    // issued at
  "exp": 1714603600,    // expires at
  "scope": "read:posts write:posts"
}

// signature — cryptographic proof, signed with a server-side secret
```

**The signature is the load-bearing part.** A JWT is "valid" if the signature matches what the server would produce given the header + payload + secret. The server can verify this without looking anything up in a database — that's the **"stateless"** pitch.

**Important:** JWTs are SIGNED, not ENCRYPTED. Anyone with the token can decode the payload and read the data. Don't put secrets in a JWT — only put data the user is allowed to see. The signature ensures the data hasn't been **tampered with**, not that it's **hidden**.

### When to use JWTs

- **Stateless APIs** where you don't want to look up session state per-request
- **Cross-service auth** where multiple servers/services need to validate the same user
- **Mobile + SPA + microservices** architectures where multiple clients hit multiple backends

### When NOT to use JWTs

- **Simple monolithic web apps** — server-side session cookies are simpler, more revocable, and well-understood. Don't reach for JWTs unless you have a reason.
- **When you need easy revocation** — JWTs are valid until they expire; you can't easily invalidate one mid-session without adding a server-side denylist (which kills the stateless pitch). Session cookies are easier to revoke on the server side.

---

## 2. The three storage options for browser-side tokens

### Option A — localStorage / sessionStorage

```js
// Login
const response = await fetch('/api/login', { method: 'POST', body: ... })
const { token } = await response.json()
localStorage.setItem('token', token)

// Subsequent API calls
fetch('/api/users', {
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
})
```

**Pros:** Dead simple. Survives page reloads (localStorage) or stays for tab (sessionStorage). Manual attachment, predictable behavior.

**Cons:** **Vulnerable to XSS.** Any JS running on your page can read localStorage. If an attacker gets JS execution (compromised npm dep, unsanitized user input, CDN compromise), they read the token and impersonate the user.

### Option B — HttpOnly cookie

```http
# Server response sets the cookie:
Set-Cookie: token=eyJhbGc.eyJzdWI.SflKxwRJ; HttpOnly; Secure; SameSite=Strict; Path=/
```

```js
// JS literally cannot read it:
document.cookie  // won't include the httpOnly cookie

// But the browser auto-attaches it to every request to the matching domain:
fetch('/api/users')
// → request goes out with the cookie attached automatically
```

**Pros:** **JS cannot read or write httpOnly cookies.** XSS attackers can't steal them. Browser handles attachment automatically.

**Cons:** **CSRF risk** — the browser auto-attaches the cookie to *any* request to your domain, including malicious requests originating from other sites. Mitigated by `SameSite=Strict` (modern browsers) and CSRF tokens (defense in depth).

### Option C — In-memory only (JS variable, not persisted)

```js
let accessToken = null   // module-level variable, not in any storage

async function login(email, password) {
  const response = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  })
  const data = await response.json()
  accessToken = data.token   // in memory only
}

async function callApi(path) {
  return fetch(path, {
    headers: { Authorization: `Bearer ${accessToken}` }
  })
}
```

**Pros:** Most secure. Can't be stolen by XSS (XSS can read memory but only while the page is open; reload kills it).

**Cons:** **Lost on page reload.** User has to re-login every refresh. Unusable on its own for any normal app.

---

## 3. The threat models

Two categories of attack you're defending against:

### XSS (Cross-Site Scripting)

Attacker gets JS execution on your page.

**How:**
- Unsanitized user input rendered as HTML (`<div dangerouslySetInnerHTML={{ __html: userBio }}>`)
- Compromised npm dependency
- CDN compromise or supply-chain attack
- A vulnerable third-party widget on your page

**What they can do:**
- Read localStorage / sessionStorage / regular (non-httpOnly) cookies
- Make any request to your API as the user
- Modify the DOM, steal form input, etc.

**What they CANNOT do (this is the design intent of httpOnly):**
- Read httpOnly cookies via `document.cookie`
- Read in-memory variables in other JS contexts (limited)

### CSRF (Cross-Site Request Forgery)

Attacker tricks the user's browser into making a request to your site while they're logged in.

**How:**
- User is logged into yourbank.com (has cookie set)
- User visits attacker.com
- attacker.com has a hidden form that POSTs to yourbank.com/api/transfer
- Browser auto-attaches the yourbank.com cookie to the POST
- yourbank.com sees an authenticated request and processes the transfer

**What attackers exploit:** **Cookies get auto-attached to requests regardless of origin.** localStorage doesn't have this property — it's read-only by the page that wrote it.

**Mitigations:**
- `SameSite=Strict` cookie attribute → browser refuses to attach the cookie to cross-origin requests
- `SameSite=Lax` → less strict, attaches on top-level navigations, refuses on form POSTs
- CSRF tokens → server issues a per-session token, client must include it in headers; attackers can't read your cookies so they can't read your CSRF token
- Verify `Origin` / `Referer` headers on the server

---

## 4. Modern best-practice pattern: two-token strategy

The consensus among security practitioners (OWASP, Auth0, etc.):

| Token | Storage | Lifetime | Purpose |
|---|---|---|---|
| **Access token** (short-lived JWT) | In-memory JS variable | ~15 min | Sent in `Authorization` header on API calls |
| **Refresh token** (longer-lived) | HttpOnly cookie | 7–30 days | Used to mint new access tokens when current one expires |

### Why this works

- **XSS exposure of access token is bounded.** If stolen, it's only valid for ~15 min. Server can't revoke easily, but the time window is small.
- **Refresh token is XSS-immune.** It's in an httpOnly cookie. JS can't read it.
- **Refresh token is server-revocable.** If a user logs out or the server detects compromise, the refresh-token cookie can be invalidated server-side. The next refresh attempt fails, the access token expires shortly after, the user is effectively logged out.
- **Page reloads work.** On reload, the in-memory access token is gone, but the refresh-token cookie is still there. The app calls `/api/refresh` on startup, gets a new access token, continues.
- **Silent refresh during session.** When the access token nears expiration, the app can call `/api/refresh` in the background to get a new one — user never sees a re-login prompt.

### The flow in pseudocode

```
1. User submits login form
2. Server validates credentials
3. Server response:
   - Set-Cookie: refresh_token=xxx; HttpOnly; Secure; SameSite=Strict
   - Body: { access_token: 'short-lived JWT' }
4. Client stores access_token in memory (JS variable)
5. Client makes API calls: Authorization: Bearer <access_token>
6. After ~15 min, access_token expires
7. Client calls POST /api/refresh
   - Browser auto-attaches refresh_token cookie
   - Server validates the cookie, issues new access_token
   - Client stores new access_token in memory
8. Loop steps 5-7 until user logs out or refresh token expires
9. Logout: client calls POST /api/logout, server clears refresh_token cookie
```

### When to refresh (proactively)

Two strategies:
- **Reactive:** Wait until an API call returns 401, then refresh and retry
- **Proactive:** Track expiration time, refresh ~1-2 min before expiration

Most apps use proactive refresh because it avoids the user-visible flash of "this request failed; let me retry it."

---

## 5. CSRF deep dive

The single most important defense is `SameSite=Strict` (or `Lax`). Modern browsers enforce this and it kills most CSRF attacks for free.

### SameSite values

| Value | Behavior |
|---|---|
| `Strict` | Cookie ONLY sent on requests originating from the same site. Even clicking a link from gmail.com to yoursite.com won't include the cookie. Highest security, slight UX impact. |
| `Lax` (default in modern browsers) | Cookie sent on top-level navigations (clicking a link), but NOT on form POSTs / iframe loads / fetch requests from other origins. Good balance. |
| `None` | Cookie sent on all cross-site requests. Required for true cross-site flows (e.g., embedded widgets), but **MUST** be paired with `Secure` flag (HTTPS only). |

### Other CSRF mitigations (defense in depth)

- **CSRF tokens:** Server issues a per-session token (e.g., in a non-httpOnly cookie or a meta tag), client reads it via JS and includes it in a custom header (`X-CSRF-Token`). Attackers on other origins can't read your cookies → can't read your CSRF token → can't forge the request.
- **Origin / Referer header verification:** Server checks request headers and rejects requests from unexpected origins. Not bulletproof (some legitimate browsers strip these) but a useful additional layer.
- **Custom request headers + CORS:** Browsers won't send custom headers cross-origin without a preflight CORS request. Server-side strict CORS config helps.

For most modern apps, `SameSite=Strict` + httpOnly + Secure cookies is sufficient. CSRF tokens are belt-and-suspenders.

---

## 6. Implementation pattern (React-flavored)

```js
// auth-context.tsx
import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // On mount, try silent refresh (refresh-token cookie may be set)
  useEffect(() => {
    refresh()
  }, [])

  async function login(email, password) {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',  // include cookies in the request
      body: JSON.stringify({ email, password })
    })
    if (!response.ok) throw new Error('Login failed')
    const { access_token, user } = await response.json()
    setAccessToken(access_token)
    setUser(user)
  }

  async function refresh() {
    try {
      const response = await fetch('/api/refresh', {
        method: 'POST',
        credentials: 'include'  // sends the refresh-token cookie
      })
      if (!response.ok) throw new Error('Refresh failed')
      const { access_token, user } = await response.json()
      setAccessToken(access_token)
      setUser(user)
    } catch {
      setAccessToken(null)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  async function logout() {
    await fetch('/api/logout', {
      method: 'POST',
      credentials: 'include'
    })
    setAccessToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ accessToken, user, loading, login, logout, refresh }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
```

### Authenticated fetch helper

```js
export function useAuthFetch() {
  const { accessToken, refresh } = useAuth()

  return async (url, options = {}) => {
    const doFetch = (token) => fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`
      }
    })

    let response = await doFetch(accessToken)

    // If access token is expired, refresh and retry once
    if (response.status === 401) {
      await refresh()
      // Note: in a real implementation you'd need to grab the new accessToken
      // from context after refresh resolves — this pseudocode glosses over that
      response = await doFetch(/* new access token */)
    }

    return response
  }
}
```

### Server side (just a sketch — Node/Express flavor)

```js
// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body
  const user = await validateCredentials(email, password)
  if (!user) return res.status(401).send()

  const accessToken = signJWT({ sub: user.id }, { expiresIn: '15m' })
  const refreshToken = signJWT({ sub: user.id, type: 'refresh' }, { expiresIn: '7d' })

  res.cookie('refresh_token', refreshToken, {
    httpOnly: true,
    secure: true,           // HTTPS only
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: '/api/refresh'    // only sent on refresh endpoint
  })

  res.json({ access_token: accessToken, user: { id: user.id, name: user.name } })
})

// Refresh route
app.post('/api/refresh', async (req, res) => {
  const refreshToken = req.cookies.refresh_token
  if (!refreshToken) return res.status(401).send()

  try {
    const payload = verifyJWT(refreshToken)
    if (payload.type !== 'refresh') throw new Error('Wrong token type')
    if (await isTokenRevoked(refreshToken)) throw new Error('Token revoked')

    const newAccessToken = signJWT({ sub: payload.sub }, { expiresIn: '15m' })
    const user = await getUser(payload.sub)
    res.json({ access_token: newAccessToken, user })
  } catch {
    res.clearCookie('refresh_token')
    res.status(401).send()
  }
})

// Logout
app.post('/api/logout', async (req, res) => {
  const refreshToken = req.cookies.refresh_token
  if (refreshToken) await revokeToken(refreshToken)
  res.clearCookie('refresh_token')
  res.status(204).send()
})
```

---

## 7. Common interview questions

### "Where would you store an auth token in the browser?"

Answer the trade-offs, not just the location:

> "Three options. localStorage is simple but XSS-vulnerable; if attackers get JS execution they read the token. HttpOnly cookies are XSS-resistant but introduce CSRF risk that needs SameSite=Strict and possibly CSRF tokens. In-memory is most secure but doesn't survive reload.
>
> The modern consensus is the two-token pattern: short-lived access token in memory, longer-lived refresh token in an httpOnly+secure+sameSite cookie. The access token's blast radius is small if stolen because it expires quickly; the refresh token can't be read by JS at all. On page reload, the app calls /refresh and gets a new access token from the still-present cookie."

### "What's the CSRF risk and how do you mitigate it?"

> "Cookies get auto-attached to requests regardless of origin. So a malicious site can make a POST to your site while the user is logged in, and the browser sends the cookie. Mitigation in 2026 is mostly free: SameSite=Strict on the cookie tells the browser not to attach it on cross-origin requests. Defense in depth: CSRF tokens (server-issued per-session token in a header), Origin/Referer header verification, strict CORS config."

### "Why not just put everything in localStorage?"

> "OWASP explicitly recommends against storing auth tokens in localStorage if XSS is a real risk — and it usually is. XSS happens via vulnerable npm deps, unsanitized inputs, or CDN compromise more often than people think. localStorage is JS-readable; httpOnly cookies aren't. The latter is meaningfully safer for long-lived credentials."

### "What's the difference between sessionStorage, localStorage, and cookies for auth?"

| | sessionStorage | localStorage | Cookie |
|---|---|---|---|
| Lifetime | Tab lifetime | Persistent | Per max-age/expires |
| Auto-sent to server | No | No | Yes |
| JS-readable | Yes | Yes | Yes (unless httpOnly) |
| Size limit | ~5MB | ~5MB | ~4KB total |
| XSS risk for tokens | High | High | None (if httpOnly) |
| CSRF risk | None | None | Yes (mitigate with SameSite) |

### "Why JWTs instead of session cookies?"

> "JWTs let the server validate without a database lookup — useful for stateless APIs, microservices where many backends share auth, or multi-client apps (web + mobile + APIs). Trade-off: harder to revoke. For a simple monolithic web app, session cookies are usually simpler and more revocable. JWTs are not always the right answer."

### "How do you handle token refresh in a SPA?"

> "Two strategies. Reactive: wait until an API call returns 401, then refresh and retry the original request. Proactive: track expiration timestamp, refresh 1-2 min before it. Most apps go proactive to avoid user-visible failed-then-retried requests. The refresh call itself is just a POST to /api/refresh with the refresh-token cookie auto-attached; server returns a new access token, app stores it in memory and continues."

### "What if the user refreshes the page mid-session?"

> "On app boot, the app calls /api/refresh. If the refresh-token cookie is still valid, the server returns a new access token, the app comes back to the user's session. If not (cookie expired, user logged out elsewhere, server revoked it), the app shows the login screen. Most apps render a loading state during this initial refresh check — the auth context starts in a 'loading' state, becomes 'authenticated' or 'unauthenticated' once /refresh resolves."

---

## 8. Things to be careful about

1. **Don't put secrets in JWTs.** Anyone can decode the payload. Signed ≠ encrypted. Never put passwords, API keys, or PII you don't want client-side in a JWT.

2. **Set short access-token expirations.** 15 min is common. Long-lived access tokens defeat the point of the two-token pattern.

3. **Always use HTTPS for cookies (`Secure` flag).** Auth cookies over HTTP can be intercepted on any open Wi-Fi.

4. **Set `SameSite=Strict` if you can.** `Lax` is the modern default but `Strict` is more secure if your app doesn't need cross-site cookie flow.

5. **Have a server-side revocation list for refresh tokens.** Otherwise you can't actually log a user out everywhere — they can keep refreshing until their token expires naturally.

6. **CORS config matters.** If your API and frontend are on different origins, you need `Access-Control-Allow-Credentials: true` AND `Access-Control-Allow-Origin: <specific origin>` (not `*`). Otherwise cookies won't flow.

7. **Don't refresh too eagerly.** A common bug: app starts polling /refresh every minute "just in case." This creates load on the server and can mask real refresh failures. Refresh on demand or with a sensible expiry-based schedule.

8. **Watch for race conditions on simultaneous refresh.** If two API calls both 401 at the same time, they might both try to refresh, causing two refresh-token rotations. Use a single in-flight refresh promise that all callers await.

---

## 9. Related docs

- **`browser-storage-decisions.md`** — broader "where should this data live" decision matrix. Covers when localStorage is the right answer vs when state-management or server-cache tools (TanStack Query, Zustand-with-persist) are better.

---

## 10. Further reading

- **OWASP — JSON Web Token Cheat Sheet for Java** — but applies broadly: https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.html
- **OWASP Browser Storage Cheat Sheet** — when to use what: https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html
- **MDN Cookies** — https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
- **MDN SameSite cookies** — https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#samesite_attribute
- **Auth0's "Token Best Practices"** — https://auth0.com/docs/secure/tokens/token-best-practices
- **Pragmatic Web Security blog** — Philippe De Ryck's writing on this topic is unusually clear: https://pragmaticwebsecurity.com/

---

## TL;DR

- **JWTs** are signed (not encrypted) tokens carrying claims; server validates the signature, no database lookup needed.
- **Three storage options:** localStorage (XSS-vulnerable), httpOnly cookie (XSS-resistant, CSRF-vulnerable), in-memory (most secure but lost on reload).
- **Modern best practice:** short-lived access token in memory + long-lived refresh token in httpOnly+secure+sameSite cookie.
- **CSRF mitigation:** `SameSite=Strict` is the default modern defense; CSRF tokens are belt-and-suspenders.
- **Don't reach for JWTs reflexively** — for simple monolithic apps, server-side session cookies are often simpler and more revocable.
