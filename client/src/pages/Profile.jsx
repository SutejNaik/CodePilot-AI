
import ProfileCard from "../components/profile/ProfileCard";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import {
    UserRound,
    ShieldCheck,
} from "lucide-react";

export default function Profile() {
    return (
        <div className="min-h-screen bg-[#070709] text-white">

            {/* =====================================================
                GLOBAL BACKGROUND
            ====================================================== */}

            <div className="fixed inset-0 z-0 pointer-events-none">

                <img
                    src="/images/codepilot-bg1.png"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Dark overlay */}

                <div className="absolute inset-0 bg-black/52" />

                {/* Red atmosphere */}

                <div className="absolute inset-0 bg-red-950/20" />

                {/* Center red glow */}

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(220,38,38,0.08),transparent_45%)]" />

            </div>


            {/* =====================================================
                PAGE CONTENT
            ====================================================== */}

            <div className="relative z-10">

                {/* =================================================
                    NAVBAR
                ================================================= */}

                <Navbar />


                {/* =================================================
                    MAIN CONTENT
                ================================================= */}

                <main className="relative mx-auto max-w-6xl px-5 pb-20 pt-24 sm:px-8 lg:px-10">

                    {/* =================================================
                        HEADER
                    ================================================= */}

                    <section className="mb-10">

                        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

                            {/* LEFT */}

                            <div>

                                {/* Badge */}

                                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/[0.06] px-4 py-2 font-mono text-[11px] tracking-[0.15em] text-red-400 shadow-[0_0_30px_rgba(239,68,68,0.08)] backdrop-blur-xl">

                                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />

                                    <UserRound size={13} />

                                    ACCOUNT SETTINGS

                                </div>


                                {/* Heading */}

                                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">

                                    <span className="text-white">
                                        Your
                                    </span>{" "}

                                    <span className="text-red-500 drop-shadow-[0_0_25px_rgba(239,68,68,0.45)]">
                                        Profile
                                    </span>

                                </h1>


                                {/* Description */}

                                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">

                                    Manage your CodePilot-AI account and
                                    personal information.

                                </p>

                            </div>


                            {/* =================================================
                                SECURITY STATUS
                            ================================================== */}

                            <div
                                className="
                                    group relative hidden sm:block
                                "
                            >

                                {/* Glow */}

                                <div className="absolute -inset-2 rounded-2xl bg-red-600/10 blur-xl transition duration-500 group-hover:bg-red-600/20" />


                                {/* Badge */}

                                <div
                                    className="
                                        relative flex items-center gap-3
                                        rounded-xl
                                        border border-red-500/20
                                        bg-black
                                        px-5 py-3
                                        font-mono text-[11px]
                                        tracking-[0.08em]
                                        text-zinc-400
                                        shadow-[0_0_30px_rgba(220,38,38,0.06)]
                                        transition-all duration-300
                                        group-hover:border-red-500/40
                                        group-hover:text-zinc-300
                                    "
                                >

                                    <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-red-500/20 bg-red-500/10">

                                        <ShieldCheck
                                            size={15}
                                            className="text-red-400"
                                        />

                                    </span>

                                    <span>
                                        ACCOUNT SECURED
                                    </span>

                                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />

                                </div>

                            </div>

                        </div>

                    </section>


                    {/* =================================================
                        PROFILE CARD
                    ================================================= */}

                    <section className="relative">

                        {/* Ambient glow behind profile */}

                        <div className="absolute -inset-5 rounded-[36px] bg-red-600/10 blur-3xl" />

                        <div className="relative">

                            <ProfileCard />

                        </div>

                    </section>

                </main>


                {/* =================================================
                    FOOTER
                ================================================= */}

                <Footer />

            </div>

        </div>
    );
}
