"use client";

import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Code2,
    LogOut,
} from "lucide-react";

import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

const ROBOT_IMAGE = "/images/Character.jpg";

export default function Hero() {
    const spotlightRef = useRef(null);
    const navigate = useNavigate();

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

                    <Link
                        to="/"
                        className="group flex items-center gap-3"
                    >

                        {/* Logo icon */}
                        <div
                            className="
                                flex h-11 w-11 items-center justify-center
                                rounded-xl
                                bg-gradient-to-br
                                from-red-500
                                to-red-700
                                text-white
                                shadow-[0_0_30px_rgba(239,68,68,0.35)]
                                transition-all duration-300
                                group-hover:scale-105
                                group-hover:shadow-[0_0_40px_rgba(239,68,68,0.55)]
                            "
                        >
                            <Code2
                                size={24}
                                strokeWidth={2.5}
                            />
                        </div>

                        {/* Brand */}
                        <div className="leading-none">

                            <div className="text-xl font-bold tracking-tight text-white">
                                CodePilot
                            </div>

                            <div className="mt-1 font-mono text-[9px] font-medium tracking-[0.32em] text-red-400">
                                AI REVIEW
                            </div>

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