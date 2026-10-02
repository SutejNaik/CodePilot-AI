import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/axios";
import ReviewResult from "../components/review/ReviewResult";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import {
    ArrowLeft,
    Sparkles,
    FileCode2,
} from "lucide-react";

export default function ReviewDetails() {
    const { id } = useParams();
    const [review, setReview] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadReview() {
            try {
                setLoading(true);
                const response = await api.get(`/review/${id}`);
                setReview(response.data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }

        loadReview();
    }, [id]);

    return (
        <div className="min-h-screen bg-transparent text-white">
            <div className="relative z-10">
                <Navbar />

                <main className="relative mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8 lg:px-10">

                    {/* =================================================
                        HEADER & BACK BUTTON
                    ================================================= */}

                    <section className="mb-10">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                            <div>
                                {/* Badge */}
                                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/[0.06] px-4 py-2 font-mono text-[11px] tracking-[0.15em] text-red-400 shadow-[0_0_30px_rgba(239,68,68,0.08)] backdrop-blur-xl">
                                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                                    <Sparkles size={13} />
                                    REVIEW DETAILS
                                </div>

                                {/* Heading */}
                                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                    <span className="text-white">Analysis</span>{" "}
                                    <span className="text-red-500 drop-shadow-[0_0_25px_rgba(239,68,68,0.45)]">
                                        Report
                                    </span>
                                </h1>

                                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                                    Detailed AI feedback, code improvements, and security findings.
                                </p>
                            </div>

                            {/* Back Button */}
                            <Link
                                to="/history"
                                className="
                                    group inline-flex w-fit items-center gap-2
                                    rounded-xl
                                    border border-red-500/20
                                    bg-black
                                    px-5 py-3
                                    text-sm font-medium
                                    text-zinc-300
                                    shadow-[0_0_30px_rgba(239,68,68,0.05)]
                                    transition-all duration-300
                                    hover:-translate-y-0.5
                                    hover:border-red-500/50
                                    hover:bg-red-500/[0.05]
                                    hover:text-red-300
                                    hover:shadow-[0_0_35px_rgba(239,68,68,0.12)]
                                "
                            >
                                <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
                                Back to History
                            </Link>
                        </div>
                    </section>

                    {/* =================================================
                        CONTENT AREA
                    ================================================= */}

                    {loading ? (
                        /* LOADING SKELETON */
                        <div className="relative overflow-hidden rounded-3xl border border-red-500/15 bg-black p-8 shadow-[0_25px_70px_rgba(0,0,0,0.65)]">
                            <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
                            <div className="animate-pulse space-y-6">
                                <div className="h-6 w-1/3 rounded bg-zinc-800" />
                                <div className="h-4 w-3/4 rounded bg-zinc-900" />
                                <div className="h-4 w-1/2 rounded bg-zinc-900" />
                                <div className="h-64 rounded-2xl bg-zinc-900" />
                            </div>
                        </div>
                    ) : !review ? (
                        /* NOT FOUND STATE */
                        <div className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-black px-6 py-24 text-center">
                            <div className="absolute left-10 right-10 top-0 h-px bg-gradient-to-r from-transparent via-red-500/70 to-transparent" />
                            <h2 className="text-2xl font-bold text-white">Review not found</h2>
                            <p className="mt-3 text-sm text-zinc-500">
                                The requested review could not be loaded or might have been deleted.
                            </p>
                            <Link
                                to="/history"
                                className="
                                    mt-7 inline-flex items-center gap-2 rounded-xl
                                    border border-red-400/30
                                    bg-gradient-to-r from-red-700 via-red-500 to-red-700
                                    px-6 py-3 text-sm font-semibold text-white
                                    shadow-[0_0_30px_rgba(239,68,68,0.20)]
                                    transition-all hover:-translate-y-1
                                "
                            >
                                Return to History
                            </Link>
                        </div>
                    ) : (
                        /* RESULT CARD CONTAINER */
                        <div className="relative">
                            <div className="absolute -inset-4 rounded-[30px] bg-red-600/10 blur-3xl opacity-100" />

                            <div className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-black p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.7),0_0_35px_rgba(239,68,68,0.08)]">
                                <div className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_18px_rgba(239,68,68,0.8)]" />

                                <ReviewResult
                                    result={review}
                                    language={review.language}
                                    originalCode={review.code}
                                    historyMode={true}
                                />
                            </div>
                        </div>
                    )}

                </main>

                <Footer />
            </div>
        </div>
    );
}