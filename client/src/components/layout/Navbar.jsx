import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="absolute top-0 left-0 right-0 z-50">

            <div className="max-w-[1500px] mx-auto px-10 py-6 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff4b45] to-[#d51f25] flex items-center justify-center shadow-[0_8px_25px_-8px_rgba(239,59,57,0.8)]">
                        <svg
                            className="w-6 h-6 text-white"
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
                        <div className="text-xl font-bold tracking-tight text-white">
                            CodePilot
                        </div>

                        <div className="mt-1 text-[9px] font-mono tracking-[0.2em] text-[#ff514b]">
                            AI REVIEW
                        </div>
                    </div>

                </Link>

                {/* Center Navigation */}
                <nav className="hidden lg:flex items-center gap-10 text-[15px] text-white/90">

                    <Link
                        to="/dashboard"
                        className="hover:text-red-400 transition-colors duration-200"
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/review"
                        className="hover:text-red-400 transition-colors duration-200"
                    >
                        Code Review
                    </Link>

                    <Link
                        to="/history"
                        className="hover:text-red-400 transition-colors duration-200"
                    >
                        History
                    </Link>

                    <Link
                        to="/profile"
                        className="hover:text-red-400 transition-colors duration-200"
                    >
                        Profile
                    </Link>

                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-5">

                    <Link
                        to="/login"
                        className="hidden sm:inline text-[15px] text-white hover:text-red-400 transition-colors duration-200"
                    >
                        Log in
                    </Link>

                    <Link
                        to="/register"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            bg-gradient-to-br
                            from-[#ef3b39]
                            to-[#b51b1f]
                            px-6
                            py-3
                            text-[14px]
                            font-semibold
                            text-white
                            shadow-[0_10px_30px_-8px_rgba(239,59,57,0.75)]
                            hover:shadow-[0_14px_35px_-8px_rgba(239,59,57,0.9)]
                            hover:-translate-y-0.5
                            transition-all
                            duration-200
                        "
                    >
                        Get Started
                        <ArrowRight size={15} />
                    </Link>

                </div>

            </div>

        </header>
    );
}