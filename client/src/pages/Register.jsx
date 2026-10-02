import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlertCircle, ArrowRight, CheckCircle2 } from "lucide-react";

import api from "../api/axios";
import Footer from "../components/layout/Footer";

/* =========================================================
   STARFIELD
   Twinkling stars, gentle mouse parallax, rare shooting stars.
   Draws once (no animation) if the user prefers reduced motion.
========================================================= */

function Starfield() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const palette = ["255,255,255", "255,255,255", "255,255,255", "255,205,195", "195,215,255"];

        let w = 0;
        let h = 0;
        let raf = 0;
        let stars = [];
        let shooters = [];
        let nextShooter = 2500;
        const target = { x: 0, y: 0 };
        const offset = { x: 0, y: 0 };

        function resize() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            w = window.innerWidth;
            h = window.innerHeight;

            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const count = Math.min(420, Math.floor((w * h) / 4500));

            stars = Array.from({ length: count }, () => {
                const depth = Math.random();
                return {
                    x: Math.random() * w,
                    y: Math.random() * h,
                    depth,
                    r: 0.4 + depth * 1.3,
                    alpha: 0.3 + Math.random() * 0.6,
                    speed: 0.6 + Math.random() * 1.6,
                    phase: Math.random() * Math.PI * 2,
                    color: palette[Math.floor(Math.random() * palette.length)],
                };
            });
        }

        function onMouseMove(e) {
            target.x = (e.clientX / w - 0.5) * 24;
            target.y = (e.clientY / h - 0.5) * 24;
        }

        function spawnShooter() {
            shooters.push({
                x: Math.random() * w * 0.7,
                y: Math.random() * h * 0.35,
                vx: 9 + Math.random() * 4,
                vy: 4 + Math.random() * 2.5,
                life: 0,
                max: 55 + Math.random() * 25,
            });
        }

        function draw(t) {
            ctx.clearRect(0, 0, w, h);

            offset.x += (target.x - offset.x) * 0.04;
            offset.y += (target.y - offset.y) * 0.04;

            for (const s of stars) {
                const twinkle = reduceMotion ? 1 : 0.55 + 0.45 * Math.sin(t * 0.001 * s.speed + s.phase);
                const x = s.x + offset.x * s.depth;
                const y = s.y + offset.y * s.depth;

                ctx.fillStyle = `rgba(${s.color},${s.alpha * twinkle})`;
                ctx.beginPath();
                ctx.arc(x, y, s.r, 0, Math.PI * 2);
                ctx.fill();

                if (s.r > 1.45) {
                    ctx.fillStyle = `rgba(${s.color},${s.alpha * twinkle * 0.12})`;
                    ctx.beginPath();
                    ctx.arc(x, y, s.r * 3.2, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            if (!reduceMotion) {
                if (t > nextShooter) {
                    spawnShooter();
                    nextShooter = t + 3500 + Math.random() * 5500;
                }

                shooters = shooters.filter((s) => s.life < s.max);

                for (const s of shooters) {
                    s.x += s.vx;
                    s.y += s.vy;
                    s.life += 1;

                    const fade = 1 - s.life / s.max;
                    const tailX = s.x - s.vx * 12;
                    const tailY = s.y - s.vy * 12;

                    const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
                    grad.addColorStop(0, "rgba(255,255,255,0)");
                    grad.addColorStop(1, `rgba(255,235,225,${0.9 * fade})`);

                    ctx.strokeStyle = grad;
                    ctx.lineWidth = 1.6;
                    ctx.lineCap = "round";
                    ctx.beginPath();
                    ctx.moveTo(tailX, tailY);
                    ctx.lineTo(s.x, s.y);
                    ctx.stroke();
                }
            }
        }

        function loop(t) {
            draw(t);
            raf = requestAnimationFrame(loop);
        }

        resize();
        window.addEventListener("resize", resize);

        if (reduceMotion) {
            draw(0);
        } else {
            window.addEventListener("mousemove", onMouseMove);
            raf = requestAnimationFrame(loop);
        }

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" />;
}

/* =========================================================
   LOGO
========================================================= */

function Logo() {
    return (
        <Link to="/" className="group flex items-center gap-3.5" aria-label="CodePilot home">
            <div className="relative flex h-12 w-12 items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#ff2a2a] via-[#ff5c38] to-transparent opacity-60 blur-xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />

                <svg
                    className="relative z-10 h-12 w-12 drop-shadow-[0_4px_20px_rgba(255,42,42,0.6)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <defs>
                        <linearGradient id="rocket-body-register" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="50%" stopColor="#e2e8f0" />
                            <stop offset="100%" stopColor="#94a3b8" />
                        </linearGradient>
                        <linearGradient id="rocket-flame-register" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#ff6666" />
                            <stop offset="40%" stopColor="#ff2a2a" />
                            <stop offset="100%" stopColor="#800000" />
                        </linearGradient>
                    </defs>

                    <path d="M9 22L4 26L9 28" stroke="url(#rocket-body-register)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27 22L32 26L27 28" stroke="url(#rocket-body-register)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 3L25 15L21 25H15L11 15L18 3Z" fill="url(#rocket-body-register)" />
                    <path d="M18 5L22 14H19L17 5H18Z" fill="white" className="opacity-60" />
                    <path d="M18 22V33" stroke="url(#rocket-flame-register)" strokeWidth="4" strokeLinecap="round" />
                    <path d="M15 25L13 30" stroke="#ff4d4d" strokeWidth="2" strokeLinecap="round" />
                    <path d="M21 25L23 30" stroke="#ff4d4d" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="18" cy="12" r="2.2" fill="#09090c" />
                    <circle cx="18" cy="12" r="1" fill="#ff4d4d" />
                </svg>
            </div>

            <div className="leading-none">
                <div className="flex items-center gap-0.5 text-xl font-black tracking-tight text-white">
                    <span>Code</span>
                    <span className="bg-gradient-to-r from-[#ff6b66] via-[#ef3b39] to-[#ff8f8b] bg-clip-text text-transparent">
                        Pilot
                    </span>
                </div>
                <div className="mt-1 flex items-center gap-1.5">
                    <span className="h-[2px] w-2 rounded-full bg-[#ff514b]" />
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[#ff514b]">
                        AI Review
                    </span>
                </div>
            </div>
        </Link>
    );
}

/* =========================================================
   SHARED CLASSES
========================================================= */

const inputClass =
    "w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3.5 text-sm text-red-400 " +
    "placeholder-zinc-400 outline-none backdrop-blur-md transition-all duration-200 " +
    "focus:border-white/40 focus:bg-black/50 focus:ring-2 focus:ring-white/20";

const labelClass = "mb-2 block text-xs font-semibold text-zinc-100";

/* =========================================================
   PAGE
========================================================= */

export default function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setMessage({ type: "", text: "" });

        if (formData.password !== formData.confirmPassword) {
            setMessage({ type: "error", text: "Passwords do not match" });
            return;
        }

        setLoading(true);

        try {
            const response = await api.post("/auth/register", {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            });

            setMessage({
                type: "success",
                text: response.data.message || "Account created! Redirecting to login...",
            });

            setTimeout(() => {
                navigate("/login");
            }, 1200);
        } catch (error) {
            setMessage({
                type: "error",
                text: error.response?.data?.detail || "Registration failed. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="relative flex min-h-screen flex-col bg-[#05050a] text-white">
            <Starfield />

            <main className="relative z-10 flex min-h-screen flex-1 items-center justify-center overflow-hidden px-4 py-28 font-sans">
                {/* Navbar */}
                <header className="absolute inset-x-0 top-0 z-50">
                    <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-6 sm:px-10">
                        <Logo />

                        <Link
                            to="/login"
                            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#ef3b39] to-[#b51b1f] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(239,59,57,0.75)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_-8px_rgba(239,59,57,0.9)]"
                        >
                            Log In
                            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </header>

                {/* Transparent Container with Red Border */}
                <div className="relative w-full max-w-md rounded-3xl border border-red-500/40 bg-transparent p-8 shadow-[0_30px_90px_rgba(0,0,0,0.8)] sm:p-10">
                    <div className="relative">
                        <div className="mb-8 text-center">
                            <h1 className="text-3xl font-black tracking-tight bg-gradient-to-r from-[#ff6b66] via-[#ef3b39] to-[#ff8f8b] bg-clip-text text-transparent">
                                Create Account
                            </h1>
                            <p className="mt-2 text-sm leading-6 text-zinc-300">
                                Start analyzing your code with artificial intelligence
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="name" className={labelClass}>
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    autoComplete="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className={labelClass}>
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    autoComplete="email"
                                    placeholder="developer@company.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label htmlFor="password" className={labelClass}>
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    required
                                    autoComplete="new-password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label htmlFor="confirmPassword" className={labelClass}>
                                    Confirm Password
                                </label>
                                <input
                                    id="confirmPassword"
                                    type="password"
                                    name="confirmPassword"
                                    required
                                    autoComplete="new-password"
                                    placeholder="••••••••"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            {/* Status message */}
                            <div aria-live="polite">
                                {message.text && (
                                    <div
                                        role={message.type === "error" ? "alert" : "status"}
                                        className={`flex items-center gap-2 rounded-xl border px-3.5 py-3 text-sm backdrop-blur-sm ${message.type === "success"
                                                ? "border-emerald-400/40 bg-emerald-500/[0.12] text-emerald-200"
                                                : "border-red-400/40 bg-red-500/[0.12] text-red-200"
                                            }`}
                                    >
                                        {message.type === "success" ? (
                                            <CheckCircle2 size={16} className="shrink-0" />
                                        ) : (
                                            <AlertCircle size={16} className="shrink-0" />
                                        )}
                                        <span>{message.text}</span>
                                    </div>
                                )}
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="group relative w-full overflow-hidden rounded-xl border border-red-300/40 bg-gradient-to-r from-red-600 via-red-500 to-rose-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(239,68,68,0.30),inset_0_1px_0_rgba(255,255,255,0.35)] transition-all duration-300 hover:border-red-200/60 hover:shadow-[0_12px_40px_rgba(239,68,68,0.45),inset_0_1px_0_rgba(255,255,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                <div className="pointer-events-none absolute inset-y-0 -left-20 w-16 rotate-12 bg-white/25 blur-md transition-all duration-700 group-hover:left-[110%]" />

                                <div className="relative flex items-center justify-center gap-2">
                                    {loading ? (
                                        <>
                                            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            <span>Creating Account...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Create Account</span>
                                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </>
                                    )}
                                </div>
                            </button>
                        </form>

                        <div className="mt-7 border-t border-white/10 pt-6">
                            <p className="text-center text-sm text-zinc-300">
                                Already have an account?{" "}
                                <Link
                                    to="/login"
                                    className="font-semibold text-white underline transition-colors hover:text-zinc-200 focus-visible:outline-none"
                                >
                                    Log In
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}