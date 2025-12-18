// src/components/LoginClient.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const DEMO_USERNAME = "Dina";
const DEMO_PASSWORD = "12345789";
const REDIRECT_MS = 3000;

export default function LoginClient() {
  const router = useRouter();

  const [username, setUsername] = useState(DEMO_USERNAME);
  const [password, setPassword] = useState(DEMO_PASSWORD);
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const [error, setError] = useState<string | null>(null);


useEffect(() => {
  if (!isLoggingIn) return;

  const t = setTimeout(() => {
    router.push("/dashboard");
  }, 3000);

  return () => clearTimeout(t);
}, [isLoggingIn, router]);


  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // If you want manual login instead of auto-login, delete the useEffect above
    // and keep this submit handler.
    setError(null);

    if (username.trim() !== DEMO_USERNAME || password !== DEMO_PASSWORD) {
      setError("Invalid demo credentials. Try Dina / 12345789");
      return;
    }

    setIsLoggingIn(true);
    setTimeout(() => router.push("/dashboard"), REDIRECT_MS);
  }

  return (
    <main className="container">
      <section className="authCard">
        <h1 className="pageTitle" style={{ marginBottom: 6 }}>
          AimSAT
        </h1>
        <p className="muted" style={{ marginTop: 0 }}>
          {isLoggingIn ? "Welcome. Logging into your account…" : "Sign in to continue."}
        </p>

        <form onSubmit={onSubmit} className="authForm">
          <label className="label">
            Username
            <input
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Dina"
              autoComplete="username"
              disabled={isLoggingIn}
            />
          </label>

          <label className="label">
            Password
            <input
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="12345789"
              type="password"
              autoComplete="current-password"
              disabled={isLoggingIn}
            />
          </label>

          {error && <p className="errorText">{error}</p>}

          <button className="btn btnPrimary" type="submit" disabled={isLoggingIn}>
            {isLoggingIn ? "Logging in..." : "Login"}
          </button>

          {isLoggingIn && <p className="muted" style={{ marginTop: 10 }}>Redirecting to dashboard…</p>}
        </form>
      </section>
    </main>
  );
}
