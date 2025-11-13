"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function AdminAuthLoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ identifier, password }),
        }
      );

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.message || "Invalid credentials");
        setLoading(false);
        return;
      }

      setLoading(false);
      router.push("/admin/dashboard");
    } catch (error) {
      console.error(error);
      setError("Network error, please try again");
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/image/bg-image.jpeg')] fixed inset-0 bg-no-repeat bg-center">
      <div className="absolute inset-0 bg-black/75"></div>

      <form
        onSubmit={handleLogin}
        className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl shadow-blue-500/30 rounded-3xl p-10 w-full max-w-sm space-y-7 relative z-10"
        autoComplete="on"
      >
        <h2 className="text-3xl font-extrabold text-white text-center tracking-wider pb-2">
          Secure Access
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Sign in to manage your system.
        </p>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-300 px-5 py-3 rounded-xl text-sm">
            <p className="font-semibold">Login Failed</p>
            <p>{error}</p>
          </div>
        )}

        {/* INPUT: Email or Username */}
        <input
          type="text"
          name="identifier"
          placeholder="Email or Username"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-4 placeholder-gray-400 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400 transition text-base"
          autoComplete="username"
          required
        />

        {/* INPUT: Password with toggle */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-4 placeholder-gray-400 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400 transition text-base pr-12"
            autoComplete="current-password"
            required
            style={{
              WebkitTextSecurity: "none",
            }}
          />
          <button
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* BUTTON: Login */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white font-bold rounded-xl py-4 mt-8 uppercase tracking-widest shadow-lg shadow-blue-500/40 hover:bg-blue-700 hover:shadow-blue-500/60 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition transform hover:scale-[1.01] disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
