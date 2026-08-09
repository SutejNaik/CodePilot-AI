"use client";

import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    ArrowRight,
    LogIn,
    LogOut,
} from "lucide-react";

import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

const ROBOT_IMAGE = "/images/Character.jpg";

export default function Hero() {
    const spotlightRef = useRef(null);
    const navigate = useNavigate();
    const isLoggedIn =
        !!localStorage.getItem("token") ||
        !!localStorage.getItem("access_token");

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        if (spotlightRef.current) {
            spotlightRef.current.style.setProperty("--x", `${x}%`);
            spotlightRef.current.style.setProperty("--y", `${y}%`);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("access_token");
        navigate("/login");
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative min-h-screen overflow-hidden bg-[#0a0304]"
        >

            {/* =====================================================
                BACKGROUND
            ====================================================== */}

            <div className="absolute inset-0 overflow-hidden">

                {/* Robot photo */}
                <div
                    className="absolute inset-0 bg-cover"
                    style={{
                        backgroundImage: `url("${ROBOT_IMAGE}")`,
                        backgroundPosition: "82% 38%",
                    }}
                />

                {/* Scrim */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(100deg, #0a0304 0%, rgba(20,5,6,0.94) 26%, rgba(42,8,9,0.72) 42%, rgba(60,10,10,0.32) 58%, rgba(80,12,12,0.05) 74%), linear-gradient(to bottom, rgba(0,0,0,0.4), transparent 20%, transparent 75%, rgba(0,0,0,0.55))",
                    }}
                />

                {/* Mouse-reactive spotlight */}
                <div
                    ref={spotlightRef}
                    style={{
                        "--x": "50%",
                        "--y": "40%",
                        background:
                            "radial-gradient(560px circle at var(--x) var(--y), rgba(255,106,82,0.14), transparent 70%)",
                        mixBlendMode: "screen",
                    }}
                    className="absolute inset-0 transition-[background] duration-300 ease-out"
                />

                {/* Fine grid */}
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #ffffff14 1px, transparent 1px), linear-gradient(to bottom, #ffffff14 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                        maskImage:
                            "linear-gradient(105deg, black 0%, black 35%, transparent 60%)",
                        WebkitMaskImage:
                            "linear-gradient(105deg, black 0%, black 35%, transparent 60%)",
                    }}
                />

                {/* Grain */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    }}
                />
            </div>


            {/* =====================================================
                HOME NAVBAR
                LOCAL TO HERO — NO GLOBAL NAVBAR
            ====================================================== */}

            <nav className="absolute left-0 right-0 top-0 z-30">

                <div
                    className="
                        mx-auto flex h-[96px] max-w-[1500px]
                        items-center justify-between
                        px-6
                        sm:px-10
                        lg:px-14
                    "
                >

                    {/* =================================================
                        LOGO
                    ================================================== */}

                    <Link to="/" className="flex items-center gap-3.5 group">

                        {/* LARGE CODE ROCKET LOGO (NO CONTAINER) */}
                        <div className="relative w-12 h-12 flex items-center justify-center">
                            {/* Ambient Rocket Flame Glow */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#ff2a2a] via-[#ff5c38] to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />

                            {/* MAIN ROCKET SVG */}
                            <svg
                                className="w-12 h-12 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1 drop-shadow-[0_4px_20px_rgba(255,42,42,0.6)]"
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    {/* Metallic Body Gradient */}
                                    <linearGradient id="rocket-body-lg" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#ffffff" />
                                        <stop offset="50%" stopColor="#e2e8f0" />
                                        <stop offset="100%" stopColor="#94a3b8" />
                                    </linearGradient>

                                    {/* AI Flame Gradient */}
                                    <linearGradient id="rocket-flame-lg" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#ff6666" />
                                        <stop offset="40%" stopColor="#ff2a2a" />
                                        <stop offset="100%" stopColor="#800000" />
                                    </linearGradient>
                                </defs>

                                {/* Left Bracket Fin '<' */}
                                <path
                                    d="M9 22L4 26L9 28"
                                    stroke="url(#rocket-body-lg)"
                                    strokeWidth="2.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />

                                {/* Right Bracket Fin '>' */}
                                <path
                                    d="M27 22L32 26L27 28"
                                    stroke="url(#rocket-body-lg)"
                                    strokeWidth="2.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />

                                {/* Rocket Fuselage */}
                                <path
                                    d="M18 3L25 15L21 25H15L11 15L18 3Z"
                                    fill="url(#rocket-body-lg)"
                                />

                                {/* Glass Reflection / Sheen Line */}
                                <path
                                    d="M18 5L22 14H19L17 5H18Z"
                                    fill="white"
                                    className="opacity-60"
                                />

                                {/* Main Flame Thrust Beam */}
                                <path
                                    d="M18 22V33"
                                    stroke="url(#rocket-flame-lg)"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    className="drop-shadow-[0_0_12px_#ff2a2a]"
                                />

                                {/* Side Thrust Sparks */}
                                <path
                                    d="M15 25L13 30"
                                    stroke="#ff4d4d"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M21 25L23 30"
                                    stroke="#ff4d4d"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />

                                {/* Cockpit Window / Core Node */}
                                <circle cx="18" cy="12" r="2.2" fill="#09090c" />
                                <circle cx="18" cy="12" r="1" fill="#ff4d4d" />
                            </svg>
                        </div>

                        {/* Brand */}
                        <div className="leading-none flex items-center gap-2">
                            <div>
                                <div className="text-xl font-black tracking-tight text-white flex items-center gap-0.5">
                                    <span className="tracking-tight">Code</span>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b66] via-[#ef3b39] to-[#ff8f8b] drop-shadow-[0_2px_10px_rgba(239,59,57,0.3)]">
                                        Pilot
                                    </span>
                                </div>

                                <div className="mt-1 flex items-center gap-1.5">
                                    <span className="h-[2px] w-2 bg-[#ff514b] rounded-full" />
                                    <span className="text-[9px] font-mono tracking-[0.25em] text-[#ff514b] font-bold uppercase">
                                        AI Review
                                    </span>
                                </div>
                            </div>

                            {/* Ambient Sparkle Icon */}
                            <svg className="w-3.5 h-3.5 text-red-400 animate-pulse -mt-3" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0L14.593 9.407L24 12L14.593 14.593L12 24L9.407 14.593L0 12L9.407 9.407L12 0Z" />
                            </svg>
                        </div>

                    </Link>


                    {/* =================================================
                        NAVIGATION
                    ================================================== */}

                    <div className="hidden items-center gap-10 md:flex">

                        <Link
                            to="/dashboard"
                            className="
                                relative py-2
                                text-sm font-medium text-zinc-300
                                transition-colors duration-300
                                hover:text-white
                                after:absolute
                                after:bottom-0
                                after:left-0
                                after:h-[2px]
                                after:w-0
                                after:bg-red-500
                                after:shadow-[0_0_10px_rgba(239,68,68,0.8)]
                                after:transition-all
                                after:duration-300
                                hover:after:w-full
                            "
                        >
                            Dashboard
                        </Link>

                        <Link
                            to="/review"
                            className="
                                relative py-2
                                text-sm font-medium text-zinc-300
                                transition-colors duration-300
                                hover:text-white
                                after:absolute
                                after:bottom-0
                                after:left-0
                                after:h-[2px]
                                after:w-0
                                after:bg-red-500
                                after:shadow-[0_0_10px_rgba(239,68,68,0.8)]
                                after:transition-all
                                after:duration-300
                                hover:after:w-full
                            "
                        >
                            Code Review
                        </Link>

                        <Link
                            to="/history"
                            className="
                                relative py-2
                                text-sm font-medium text-zinc-300
                                transition-colors duration-300
                                hover:text-white
                                after:absolute
                                after:bottom-0
                                after:left-0
                                after:h-[2px]
                                after:w-0
                                after:bg-red-500
                                after:shadow-[0_0_10px_rgba(239,68,68,0.8)]
                                after:transition-all
                                after:duration-300
                                hover:after:w-full
                            "
                        >
                            History
                        </Link>

                        <Link
                            to="/profile"
                            className="
                                relative py-2
                                text-sm font-medium text-zinc-300
                                transition-colors duration-300
                                hover:text-white
                                after:absolute
                                after:bottom-0
                                after:left-0
                                after:h-[2px]
                                after:w-0
                                after:bg-red-500
                                after:shadow-[0_0_10px_rgba(239,68,68,0.8)]
                                after:transition-all
                                after:duration-300
                                hover:after:w-full
                            "
                        >
                            Profile
                        </Link>

                    </div>


                    {/* =================================================
                        LOGOUT
                    ================================================== */}

                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className="
            hidden
            md:flex
            items-center
            gap-2
            rounded-full
            border border-white/20
            bg-white/[0.04]
            px-6
            py-3
            text-sm
            font-medium
            text-zinc-200
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-red-500/40
            hover:bg-red-500/[0.08]
            hover:text-white
            hover:shadow-[0_0_25px_rgba(239,68,68,0.12)]
        "
                        >
                            <LogOut size={16} />
                            Log out
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="
            hidden
            md:flex
            items-center
            gap-2
            rounded-full
            border border-white/20
            bg-white/[0.04]
            px-6
            py-3
            text-sm
            font-medium
            text-zinc-200
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-red-500/40
            hover:bg-red-500/[0.08]
            hover:text-white
            hover:shadow-[0_0_25px_rgba(239,68,68,0.12)]
        "
                        >
                            <LogIn size={16} />
                            Log in
                        </Link>
                    )}

                </div>

            </nav>


            {/* =====================================================
                HERO CONTENT
            ====================================================== */}

            <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-center px-6 sm:px-10 lg:px-14">

                <div
                    className="
                        max-w-xl
                        opacity-0
                        animate-[rise_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards]
                        [animation-delay:.1s]
                    "
                >
                    <HeroContent />
                </div>

            </div>


            {/* =====================================================
                HERO VISUAL
            ====================================================== */}

            <HeroVisual />


            {/* =====================================================
                ANIMATIONS
            ====================================================== */}

            <style>{`
                @keyframes rise {
                    from {
                        opacity: 0;
                        transform: translateY(26px);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes pulseDot {
                    0% {
                        box-shadow: 0 0 0 0 rgba(255,106,82,.55);
                    }

                    70% {
                        box-shadow: 0 0 0 8px rgba(255,106,82,0);
                    }

                    100% {
                        box-shadow: 0 0 0 0 rgba(255,106,82,0);
                    }
                }

                @keyframes scan {
                    0% {
                        top: 6%;
                        opacity: 0;
                    }

                    10% {
                        opacity: .6;
                    }

                    50% {
                        opacity: .3;
                    }

                    92% {
                        opacity: 0;
                    }

                    100% {
                        top: 96%;
                        opacity: 0;
                    }
                }

                @keyframes floatCard {
                    0%, 100% {
                        transform: translateY(0);
                    }

                    50% {
                        transform: translateY(-9px);
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    *,
                    *::before,
                    *::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                    }
                }
            `}</style>

        </section>
    );
}