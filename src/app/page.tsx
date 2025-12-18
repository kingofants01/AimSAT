// src/app/page.tsx
"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

const DEMO_USERNAME = "Dina";
const DEMO_PASSWORD = "12345789";
const SIMULATED_LOGIN_MS = 900;

export default function HomePage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);

  const canSubmit = useMemo(() => {
    return username.trim().length > 0 && password.trim().length > 0 && !isSigningIn;
  }, [username, password, isSigningIn]);

  function goToDashboard() {
    router.push("/dashboard");
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!canSubmit) return;

    setIsSigningIn(true);

    // Fake auth delay (later replaced by a real POST /auth/login call)
    window.setTimeout(() => {
      goToDashboard();
    }, SIMULATED_LOGIN_MS);
  }

  return (
    <main className="container authPage">
      <header className="authHeader">
        <h1 className="pageTitle">AIMSAT</h1>
        <p className="subtitle">Welcome. Sign in to continue.</p>
      </header>

      <section className="card authCard" aria-label="Login">
        <div className="authCardTop">
          <div>
            <h2 className="cardTitle">Log in</h2>
            <p className="muted" style={{ marginTop: 6 }}>
              Logging into your account will take you to the dashboard.
            </p>
          </div>

          {isSigningIn ? (
            <div className="authStatus" aria-live="polite">
              <span className="spinner" aria-hidden="true" />
              <span className="muted">Signing you in…</span>
            </div>
          ) : null}
        </div>

        <form onSubmit={onSubmit} className="authForm">
          <div className="field">
            <label className="label" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              className="input"
              type="text"
              autoComplete="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isSigningIn}
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="input"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isSigningIn}
            />
          </div>

          <div className="demoBox">
            <div className="demoTitle">Demo credentials</div>
            <div className="demoCreds">
              <span>
                <span className="muted">Username:</span> <strong>{DEMO_USERNAME}</strong>
              </span>
              <span>
                <span className="muted">Password:</span> <strong>{DEMO_PASSWORD}</strong>
              </span>
            </div>
          </div>

          <div className="authActions">
            <button className="btn btnPrimary" type="submit" disabled={!canSubmit}>
              {isSigningIn ? "Signing in…" : "Sign in"}
            </button>

            <button
              className="btn btnSecondary"
              type="button"
              onClick={goToDashboard}
              disabled={isSigningIn}
            >
              Continue as demo
            </button>
          </div>
        </form>

        <p className="muted authFootnote">
           Stage 1
        </p>
      </section>
    </main>
  );
}
