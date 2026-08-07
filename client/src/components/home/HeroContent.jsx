import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroContent() {
    return (
        <div className="relative z-50">

            {/* Badge */}

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-violet-500/20 bg-white/5 backdrop-blur-xl">

                <div className="w-2 h-2 rounded-full bg-violet-400" />

                <span className="text-violet-200 text-sm">
                    AI Powered Code Reviews
                </span>

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-7xl font-bold leading-[1.05] tracking-tight text-white">

                Ship Better

                <br />

                <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-white bg-clip-text text-transparent">
                    Code Faster.
                </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-lg text-slate-300 leading-8 text-lg">

                Analyze code instantly with AI.
                Detect bugs, security vulnerabilities,
                performance issues and receive
                production-ready improvements.

            </p>

            {/* Buttons */}

            <div className="flex gap-5 mt-10">

                <Link to="/review">

                    <button
                        type="button"
                        className="
                            h-14
                            px-8
                            rounded-full
                            bg-gradient-to-r
                            from-violet-600
                            to-fuchsia-500
                            text-white
                            font-semibold
                            flex
                            items-center
                            gap-3
                            hover:scale-105
                            transition
                            cursor-pointer
                        "
                    >

                        Start Reviewing

                        <ArrowRight size={18} />

                    </button>

                </Link>

                <Link to="/demo">

                    <button
                        type="button"
                        className="
                            h-14
                            px-8
                            rounded-full
                            border
                            border-white/10
                            bg-white/5
                            backdrop-blur-xl
                            text-white
                            hover:bg-white/10
                            transition
                            cursor-pointer
                        "
                    >

                        Live Demo

                    </button>

                </Link>

            </div>

        </div>
    );
}