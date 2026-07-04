"use client";
import React, { useState, useTransition } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Coffee,
  Mail,
  Lock,
  User,
  ArrowRight,
  Loader2,
  AlertCircle,
} from "lucide-react";

export default function CafeXAuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isPending, startTransition] = useTransition();
  const [globalError, setGlobalError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (globalError) setGlobalError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGlobalError(null);

    if (!formData.email || !formData.password || (!isLogin && !formData.name)) {
      setGlobalError("Please fill out all required fields.");
      return;
    }

    startTransition(async () => {
      try {
        if (!isLogin) {
          const regResponse = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });

          const regData = await regResponse.json();

          if (!regResponse.ok) {
            setGlobalError(
              regData.error || "Something went wrong during registration.",
            );
            return;
          }
        }

        const authResult = await signIn("credentials", {
          email: formData.email.toLowerCase().trim(),
          password: formData.password,
          redirect: false,
        });

        if (authResult?.error) {
          setGlobalError(
            "Invalid credentials provided. Please check your spelling and try again.",
          );
          return;
        }

        router.refresh();
        router.push("/");
      } catch (err) {
        console.error("AUTH_WORKFLOW_FAILURE:", err);
        setGlobalError(
          "A critical network error occurred. Please try again later.",
        );
      }
    });
  };

  const handleGoogleAuth = async () => {
    setGlobalError(null);
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (err) {
      console.error("GOOGLE_AUTH_FAILURE:", err);
      setGlobalError("Failed to initialize Google authentication loop.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-stone-950 flex font-sans text-stone-100 selection:bg-amber-800/30">
      {/* LEFT: Branding Column */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-stone-900 items-center justify-center p-12 overflow-hidden border-r border-stone-800/40">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#7c2d12_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="z-10 max-w-md space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-amber-950/40 border border-amber-900/30 text-amber-500 text-sm tracking-wide">
            <Coffee className="w-4 h-4" /> Artisanal Experience Since 2026
          </div>
          <h1 className="text-5xl font-serif tracking-tight leading-none text-stone-50">
            Welcome to <span className="text-amber-600 block mt-2">CafeX</span>
          </h1>
          <p className="text-stone-400 text-base leading-relaxed">
            Skip the lines, customize your micro-lots, and unlock exclusive
            rewards with our high-throughput ordering interface. Built for true
            coffee connoisseurs.
          </p>
        </div>
      </div>

      {/* RIGHT: Dynamic Interface Panel */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-12 relative">
        <div className="w-full max-w-md mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-3xl font-serif tracking-tight text-stone-50">
              {isLogin ? "Sign in to account" : "Create an account"}
            </h2>
            <p className="text-stone-400 text-sm">
              {isLogin ? "New to CafeX? " : "Already have an account? "}
              <button
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setGlobalError(null);
                }}
                className="text-amber-500 hover:text-amber-400 underline underline-offset-4 font-medium transition-colors"
              >
                {isLogin ? "Register here" : "Sign in here"}
              </button>
            </p>
          </div>

          {/* Global Alert Container */}
          {globalError && (
            <div className="flex items-start gap-3 p-3.5 rounded-lg bg-red-950/30 border border-red-900/40 text-red-400 text-sm animate-in fade-in-50 duration-200">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <div>{globalError}</div>
            </div>
          )}

          {/* Google OAuth Provider Button */}
          <button
            type="button"
            disabled={isPending}
            onClick={handleGoogleAuth}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-800 hover:border-stone-700 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:scale-105"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-stone-800/60" />
            </div>
            <span className="relative px-3 bg-stone-950 text-xs text-stone-500 uppercase tracking-widest">
              Or credentials
            </span>
          </div>

          {/* Form Processing System */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="space-y-1.5 animate-in fade-inslide-in-from-top-2 duration-200">
                <label
                  className="text-xs font-semibold uppercase tracking-wider text-stone-400"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-500 absolute left-3 top-3.5" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required={!isLogin}
                    disabled={isPending}
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full bg-stone-900 border border-stone-800/80 rounded-lg py-3 pl-10 pr-4 text-sm text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600/30 transition-all disabled:opacity-50"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <label
                className="text-xs font-semibold uppercase tracking-wider text-stone-400"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-stone-500 absolute left-3 top-3.5" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  disabled={isPending}
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@cafex.com"
                  className="w-full bg-stone-900 border border-stone-800/80 rounded-lg py-3 pl-10 pr-4 text-sm text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600/30 transition-all disabled:opacity-50"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label
                  className="text-xs font-semibold uppercase tracking-wider text-stone-400"
                  htmlFor="password"
                >
                  Password
                </label>
                {isLogin && (
                  <button
                    type="button"
                    className="text-xs text-stone-500 hover:text-amber-500 transition-colors"
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-stone-500 absolute left-3 top-3.5" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  disabled={isPending}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full bg-stone-900 border border-stone-800/80 rounded-lg py-3 pl-10 pr-4 text-sm text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600/30 transition-all disabled:opacity-50"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full flex items-center justify-center gap-2 px-4 py-3.5 bg-amber-600 hover:bg-amber-500 active:bg-amber-700 text-stone-950 rounded-lg text-sm font-semibold tracking-wide transition-all duration-150 shadow-md disabled:opacity-50 disabled:cursor-not-allowed group mt-2"
            >
              {isPending ?
                <Loader2 className="w-4 h-4 animate-spin" />
              : <>
                  {isLogin ? "Sign In to Lounge" : "Generate Member Token"}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </>
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
