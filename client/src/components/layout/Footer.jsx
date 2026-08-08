import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-red-500/15 bg-black">

            {/* Ambient glow */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-[220px] w-[700px] -translate-x-1/2 rounded-full bg-red-600/[0.08] blur-[120px]" />

            {/* Top red light */}
            <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent shadow-[0_0_18px_rgba(239,68,68,0.6)]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">

                {/* Top Row */}
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

                    {/* Brand */}
                    <Link
                        to="/"
                        className="group flex w-fit items-center gap-3"
                    >
                        <div
                            className="
                                flex h-10 w-10 items-center justify-center
                                rounded-xl
                                border border-red-500/30
                                bg-gradient-to-br from-red-500 to-red-800
                                shadow-[0_0_25px_rgba(239,68,68,0.15)]
                                transition-all duration-300
                                group-hover:scale-105
                                group-hover:border-red-400/60
                                group-hover:shadow-[0_0_35px_rgba(239,68,68,0.3)]
                            "
                        >
                            <svg
                                className="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                />
                            </svg>
                        </div>

                        <div className="leading-none">
                            <div className="text-lg font-bold text-white">
                                CodePilot
                            </div>

                            <div className="mt-1 font-mono text-[8px] tracking-[0.2em] text-red-400">
                                AI REVIEW
                            </div>
                        </div>
                    </Link>


                    {/* Navigation */}
                    <div className="flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-xs text-zinc-500">

                        <Link
                            to="/dashboard"
                            className="transition-colors hover:text-red-400"
                        >
                            Dashboard
                        </Link>

                        <Link
                            to="/review"
                            className="transition-colors hover:text-red-400"
                        >
                            Code Review
                        </Link>

                        <Link
                            to="/history"
                            className="transition-colors hover:text-red-400"
                        >
                            History
                        </Link>

                        <Link
                            to="/profile"
                            className="transition-colors hover:text-red-400"
                        >
                            Profile
                        </Link>

                    </div>
                </div>


                {/* Divider */}
                <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/[0.10] to-transparent" />


                {/* Bottom Row */}
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                    {/* Copyright */}
                    <div className="flex items-center gap-3">

                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />

                        <p className="font-mono text-[10px] tracking-[0.12em] text-zinc-600">
                            © 2026 CODEPILOT AI. ALL RIGHTS RESERVED.
                        </p>

                    </div>


                    {/* Built By */}
                    <div className="flex flex-wrap items-center gap-2">

                        <Sparkles
                            size={13}
                            className="text-red-400"
                        />

                        <span className="font-mono text-[10px] text-zinc-500">
                            BUILT BY
                        </span>

                        <span className="
                            rounded-md
                            border border-red-500/20
                            bg-red-500/[0.07]
                            px-2.5 py-1
                            text-[10px]
                            font-semibold
                            text-zinc-200
                            shadow-[0_0_15px_rgba(239,68,68,0.08)]
                        ">
                            SHARAT NAIK
                        </span>

                        <span className="text-[10px] text-zinc-700">
                            &
                        </span>

                        <span className="
                            rounded-md
                            border border-red-500/20
                            bg-red-500/[0.07]
                            px-2.5 py-1
                            text-[10px]
                            font-semibold
                            text-zinc-200
                            shadow-[0_0_15px_rgba(239,68,68,0.08)]
                        ">
                            SUTEJ NAIK
                        </span>

                    </div>


                    {/* Start Reviewing */}
                    <Link
                        to="/review"
                        className="
                            group
                            flex w-fit items-center gap-1.5
                            font-mono text-[10px]
                            tracking-[0.12em]
                            text-zinc-500
                            transition-colors
                            hover:text-red-400
                        "
                    >
                        Start Reviewing

                        <ArrowUpRight
                            size={13}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </Link>

                </div>

            </div>

            {/* Bottom red light */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

        </footer>
    );
}