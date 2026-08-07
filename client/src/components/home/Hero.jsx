"use client";

import { useRef } from "react";
import HeroContent from "./HeroContent";
import HeroDashboard from "./HeroDashboard";

export default function Hero() {
    const spotlightRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        if (spotlightRef.current) {
            spotlightRef.current.style.setProperty("--x", `${x}%`);
            spotlightRef.current.style.setProperty("--y", `${y}%`);
        }
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative min-h-screen overflow-hidden bg-[#060812]"
        >
            {/* Luxury Background */}
            <div className="absolute inset-0 overflow-hidden">

                {/* Base */}
                <div className="absolute inset-0 bg-[#060812]" />

                {/* Top Glow */}
                <div className="absolute -top-64 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-violet-500/20 blur-[180px] animate-[float-1_16s_ease-in-out_infinite]" />

                {/* Left Glow */}
                <div className="absolute left-[-250px] top-[180px] w-[600px] h-[600px] rounded-full bg-fuchsia-500/15 blur-[170px] animate-[float-2_19s_ease-in-out_infinite]" />

                {/* Right Glow */}
                <div className="absolute right-[-250px] top-[80px] w-[650px] h-[650px] rounded-full bg-sky-400/15 blur-[180px] animate-[float-3_22s_ease-in-out_infinite]" />

                {/* Bottom Glow */}
                <div className="absolute bottom-[-300px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-indigo-500/15 blur-[220px] animate-[float-4_20s_ease-in-out_infinite]" />

                {/* Mouse-reactive spotlight — signature element */}
                <div
                    ref={spotlightRef}
                    style={{
                        "--x": "50%",
                        "--y": "40%",
                        background:
                            "radial-gradient(560px circle at var(--x) var(--y), rgba(167,139,250,0.12), transparent 70%)",
                    }}
                    className="absolute inset-0 transition-[background] duration-300 ease-out"
                />

                {/* Fine grid texture, faded at the edges */}
                <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #ffffff14 1px, transparent 1px), linear-gradient(to bottom, #ffffff14 1px, transparent 1px)",
                        backgroundSize: "56px 56px",
                        maskImage: "radial-gradient(ellipse at center, black, transparent 72%)",
                        WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 72%)",
                    }}
                />

                {/* Grain for texture/depth */}
                <div
                    className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    }}
                />
            </div>

            {/* Stars */}
            <div className="absolute inset-0 pointer-events-none">
                <span className="absolute top-20 left-32 w-1 h-1 bg-white rounded-full animate-[twinkle_3.6s_ease-in-out_infinite]" />
                <span className="absolute top-40 right-52 w-2 h-2 bg-violet-300 rounded-full animate-[twinkle_4.4s_ease-in-out_infinite] [animation-delay:.4s]" />
                <span className="absolute top-72 left-[40%] w-1 h-1 bg-sky-300 rounded-full animate-[twinkle_3.1s_ease-in-out_infinite] [animation-delay:.9s]" />
                <span className="absolute bottom-48 left-24 w-1 h-1 bg-white rounded-full animate-[twinkle_5s_ease-in-out_infinite] [animation-delay:1.3s]" />
                <span className="absolute bottom-36 right-44 w-2 h-2 bg-fuchsia-300 rounded-full animate-[twinkle_3.8s_ease-in-out_infinite] [animation-delay:.6s]" />
                <span className="absolute top-1/3 right-[28%] w-[3px] h-[3px] bg-white rounded-full animate-[twinkle_4.7s_ease-in-out_infinite] [animation-delay:1.7s]" />
            </div>

            {/* Light Beams */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-40 top-28 h-[250px] w-px bg-gradient-to-b from-transparent via-violet-400/50 to-transparent animate-[beam_5.5s_ease-in-out_infinite]" />
                <div className="absolute right-52 top-52 h-[180px] w-px bg-gradient-to-b from-transparent via-sky-300/50 to-transparent animate-[beam_6.5s_ease-in-out_infinite] [animation-delay:1s]" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-[1500px] mx-auto px-10">
                <div className="grid lg:grid-cols-[1fr_650px] items-center min-h-screen gap-28">

                    <div className="opacity-0 animate-[rise_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards] [animation-delay:.1s]">
                        <HeroContent />
                    </div>

                    <div className="opacity-0 animate-[rise_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards] [animation-delay:.3s]">
                        <HeroDashboard />
                    </div>

                </div>
            </div>

            <style>{`
                @keyframes float-1 {
                    0%, 100% { transform: translate(-50%, 0) scale(1); }
                    50% { transform: translate(-50%, 26px) scale(1.05); }
                }
                @keyframes float-2 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(22px, -22px) scale(1.06); }
                }
                @keyframes float-3 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-20px, 24px) scale(1.05); }
                }
                @keyframes float-4 {
                    0%, 100% { transform: translate(-50%, 0) scale(1); }
                    50% { transform: translate(-50%, -24px) scale(1.06); }
                }
                @keyframes twinkle {
                    0%, 100% { opacity: 0.25; transform: scale(0.85); }
                    50% { opacity: 1; transform: scale(1.4); }
                }
                @keyframes beam {
                    0%, 100% { opacity: 0.25; }
                    50% { opacity: 0.75; }
                }
                @keyframes rise {
                    from { opacity: 0; transform: translateY(26px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @media (prefers-reduced-motion: reduce) {
                    *, *::before, *::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                    }
                }
            `}</style>
        </section>
    );
}