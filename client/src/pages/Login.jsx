import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: "", text: "" });

        try {
            const response = await api.post("/auth/login", formData);

            localStorage.setItem("token", response.data.access_token);

            setMessage({
                type: "success",
                text: "Welcome back! Redirecting...",
            });

            setTimeout(() => {
                navigate("/dashboard");
            }, 1200);
        } catch (error) {
            setMessage({
                type: "error",
                text:
                    error.response?.data?.detail ||
                    "Invalid email or password",
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex flex-col">

            {/* EXISTING NAVBAR */}
            <Navbar />

            {/* MAIN CONTENT AREA */}
            <main
                className="relative flex-1 w-full bg-cover bg-left sm:bg-center bg-no-repeat flex items-center justify-end overflow-hidden font-sans select-none"
                style={{ backgroundImage: `url('/images/login.png')` }}
            >
                {/* Optional subtle vignette on the right edge */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/60 pointer-events-none" />

                {/* Login Container */}
                <div className="relative z-10 w-full max-w-md mr-4 md:mr-10 lg:mr-48 p-8 my-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-red-900/30 shadow-[0_0_50px_rgba(220,38,38,0.15)] transition-all duration-300 hover:border-red-600/40">

                    {/* Glow Accent */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-600/20 rounded-full blur-2xl pointer-events-none" />

                    <div className="mb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/20 text-red-400 text-xs font-mono mb-4">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            AI POWERED AUTHENTICATION
                        </div>

                        <h1 className="text-3xl font-extrabold text-white tracking-tight">
                            Welcome Back
                        </h1>

                        <p className="text-sm text-neutral-400 mt-2">
                            Access your AI code analysis dashboard
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Email */}
                        <div className="group">
                            <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="developer@company.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-100 placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-200"
                            />
                        </div>

                        {/* Password */}
                        <div className="group">
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                                    Password
                                </label>

                                <a
                                    href="#"
                                    className="text-xs text-red-400 hover:text-red-300 transition-colors"
                                >
                                    Forgot?
                                </a>
                            </div>

                            <input
                                type="password"
                                name="password"
                                required
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-100 placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-200"
                            />
                        </div>

                        {/* Message */}
                        {message.text && (
                            <div
                                className={`p-3 rounded-lg text-xs font-mono flex items-center gap-2 ${message.type === "success"
                                    ? "bg-emerald-950/80 border border-emerald-500/40 text-emerald-300"
                                    : "bg-red-950/80 border border-red-500/40 text-red-300"
                                    }`}
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                                {message.text}
                            </div>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full relative group overflow-hidden py-3.5 px-6 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-semibold text-sm shadow-lg shadow-red-950/50 hover:shadow-red-600/30 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <div className="flex items-center justify-center gap-2">
                                {loading ? (
                                    <>
                                        <svg
                                            className="animate-spin h-4 w-4 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
                                        </svg>

                                        <span>Authenticating...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Sign In</span>

                                        <svg
                                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </>
                                )}
                            </div>
                        </button>
                    </form>

                    {/* Footer text inside login card */}
                    <p className="text-center text-xs text-neutral-400 mt-8">
                        Don't have an account?{" "}
                        <Link
                            to="/register"
                            className="text-red-400 font-medium hover:text-red-300 underline underline-offset-4 transition-colors"
                        >
                            Create Account
                        </Link>
                    </p>
                </div>
            </main>

            {/* EXISTING FOOTER */}

        </div>
    );
}