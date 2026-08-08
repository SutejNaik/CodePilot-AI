import { useState, useEffect } from "react";
import api from "../api/axios";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Reveal from "../components/common/Reveal";

import {
    Sparkles,
    Code2,
    Copy,
    Check,
    Trash2,
    Maximize2,
    Minimize2,
    Bug,
    ShieldCheck,
    Gauge,
    Zap,
    ArrowRight,
    MessageCircle,
} from "lucide-react";

import LanguageSelector from "../components/review/LanguageSelector";
import CodeEditor from "../components/review/CodeEditor";
import ReviewButton from "../components/review/ReviewButton";
import ReviewResult from "../components/review/ReviewResult";
import AIChat from "../components/review/AIChat";

// Drop an image URL here (e.g. "/images/review-bg.jpg", or import a local asset
// and pass it in) to add a background photo behind this page. Leave it empty to
// keep the current glow/grid look. Rendered at low opacity with a dark overlay
// on top so the workspace stays fully legible either way.
const PAGE_BACKGROUND_IMAGE = "/images/codepilot-bg1.png";

const STARTER_SNIPPETS = {
    python: `# Example Python code

def get_user_data(user_id):
    query = "SELECT * FROM users WHERE id = '" + user_id + "'"
    return db.execute(query)
`,

    javascript: `// Example JavaScript code

function processItems(items) {
    let results = [];

    for (var i = 0; i < items.length; i++) {
        setTimeout(function () {
            console.log("Processing item:", items[i]);
        }, 1000);
    }

    return results;
}
`,

    typescript: `// Example TypeScript code

async function fetchData(url: string) {
    const response = await fetch(url);
    const data = await response.json();

    return data.result.user;
}
`,
};

const ANALYSIS_PHASES = [
    "Parsing syntax…",
    "Scanning for bugs…",
    "Checking security…",
    "Reviewing performance…",
    "Finalizing report…",
];

const CAPABILITIES = [
    { icon: Bug, title: "Bugs", text: "Identify logical and runtime problems." },
    { icon: ShieldCheck, title: "Security", text: "Detect vulnerabilities and unsafe patterns." },
    { icon: Gauge, title: "Performance", text: "Spot inefficient operations and bottlenecks." },
    { icon: Zap, title: "Code Quality", text: "Improve readability and maintainability." },
];

const SUPPORTED_LANGUAGES = ["Python", "JavaScript", "TypeScript"];

export default function Review() {
    const [language, setLanguage] = useState("python");
    const [code, setCode] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);
    const [phaseIndex, setPhaseIndex] = useState(0);


    // Cycles through the analysis phase labels while a review is in flight.
    useEffect(() => {
        if (!loading) {
            setPhaseIndex(0);
            return;
        }
        const interval = setInterval(() => {
            setPhaseIndex((i) => (i + 1) % ANALYSIS_PHASES.length);
        }, 1300);
        return () => clearInterval(interval);
    }, [loading]);

    async function analyzeCode() {
        if (!code.trim()) return;

        setLoading(true);
        setResult(null);

        try {
            const response = await api.post("/review/", {
                language,
                code,
            });

            setResult(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    async function handleCopy() {
        if (!code) return;

        await navigator.clipboard.writeText(code);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    function handleClear() {
        setCode("");
        setResult(null);
    }

    function loadPreset(lang) {
        setLanguage(lang);
        setCode(STARTER_SNIPPETS[lang] || "");
        setResult(null);
    }

    const extension =
        language === "javascript"
            ? "js"
            : language === "typescript"
                ? "ts"
                : "py";

    const status = loading
        ? { label: "Analyzing", text: "text-yellow-400", border: "border-yellow-500/20", bg: "bg-yellow-500/[0.05]", dot: "bg-yellow-400" }
        : result
            ? { label: "Complete", text: "text-emerald-400", border: "border-emerald-500/20", bg: "bg-emerald-500/[0.05]", dot: "bg-emerald-400" }
            : { label: "Waiting", text: "text-zinc-500", border: "border-white/[0.06]", bg: "", dot: "bg-zinc-600" };

    return (
        <div className="min-h-screen bg-[#050505] text-white overflow-hidden">

            {/* Background */}
            <div className="fixed inset-0 pointer-events-none">

                {PAGE_BACKGROUND_IMAGE && (
                    <>
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-[0.55]"
                            style={{
                                backgroundImage: `url("${PAGE_BACKGROUND_IMAGE}")`,
                            }}
                        />

                        {/* Light readability overlay instead of black wash */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
                    </>
                )}
                <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-red-600/[0.07] blur-[150px] animate-[float-1_20s_ease-in-out_infinite]" />

                <div className="absolute top-[45%] -right-60 w-[600px] h-[600px] rounded-full bg-rose-500/[0.05] blur-[160px] animate-[float-2_24s_ease-in-out_infinite]" />

                <div className="absolute -bottom-60 left-1/3 w-[500px] h-[500px] rounded-full bg-red-800/[0.06] blur-[170px] animate-[float-1_28s_ease-in-out_infinite]" />

                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                <div
                    className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    }}
                />
            </div>

            {/* Dims the page behind the fullscreen editor */}
            {fullscreen && (
                <div
                    className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
                    onClick={() => setFullscreen(false)}
                />
            )}

            {/* HOME NAVBAR */}
            <div className="relative z-30">
                <Navbar />
            </div>


            {/* PAGE */}
            <main className="relative z-10 max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-20">


                {/* HERO */}

                <section className="max-w-4xl mx-auto text-center">

                    <Reveal>
                        <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/[0.06] px-4 py-2">
                            <Sparkles className="w-4 h-4 text-red-400" />
                            <span className="text-[11px] uppercase tracking-[0.2em] text-red-400 font-mono">
                                AI Code Review
                            </span>
                        </div>
                    </Reveal>

                    <Reveal delay={100}>
                        <h1 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                            Write code.
                            <br />
                            <span className="bg-gradient-to-r from-red-400 via-rose-400 to-orange-300 bg-clip-text text-transparent">
                                Let AI find the problems.
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal delay={200}>
                        <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base leading-7 text-zinc-500">
                            Paste your code, select a language and let CodePilot
                            analyze bugs, security vulnerabilities, performance
                            issues and code quality.
                        </p>
                    </Reveal>

                    <Reveal delay={300}>
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                            {SUPPORTED_LANGUAGES.map((lang) => (
                                <span
                                    key={lang}
                                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-mono text-zinc-400"
                                >
                                    {lang}
                                </span>
                            ))}
                            <span className="text-[11px] text-zinc-600">+ more</span>
                        </div>
                    </Reveal>

                </section>


                {/* REVIEW WORKSPACE */}

                <section id="workspace" className="relative mt-16 scroll-mt-24">

                    {/* Centerpiece glow — this is the page's main event */}
                    <div className="absolute -inset-x-6 -top-8 -bottom-8 -z-10 rounded-[48px] bg-red-600/[0.06] blur-[90px]" />

                    <Reveal delay={150}>
                        <div
                            className={`relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#090909] shadow-[0_30px_100px_rgba(0,0,0,.55)]
                            ${fullscreen ? "fixed inset-5 z-50" : ""}`}
                        >

                            {/* Top accent line with a traveling highlight */}

                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px overflow-hidden bg-gradient-to-r from-transparent via-red-500/60 to-transparent">
                                <span className="absolute top-0 h-px w-10 bg-gradient-to-r from-transparent via-white to-transparent animate-[travel_4s_linear_infinite]" />
                            </div>


                            {/* Workspace header */}

                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 px-6 py-5 border-b border-white/[0.07]">

                                <div className="flex items-center gap-4">

                                    <div className="w-10 h-10 rounded-xl border border-red-500/20 bg-red-500/[0.07] flex items-center justify-center">

                                        <Code2 className="w-5 h-5 text-red-400" />

                                    </div>

                                    <div>

                                        <h2 className="text-sm font-semibold">
                                            Code Review Workspace
                                        </h2>

                                        <p className="text-[11px] text-zinc-600 mt-1">
                                            Analyze your source code with AI
                                        </p>

                                    </div>

                                </div>


                                {/* Quick languages */}

                                <div className="flex items-center gap-2">

                                    {Object.keys(STARTER_SNIPPETS).map((lang) => (

                                        <button
                                            key={lang}
                                            onClick={() => loadPreset(lang)}
                                            className={`px-3 py-1.5 rounded-lg border text-[10px] font-mono capitalize transition-all duration-200 active:scale-95
                                            ${language === lang
                                                    ? "border-red-500/30 bg-red-500/10 text-red-300"
                                                    : "border-white/[0.07] bg-white/[0.02] text-zinc-500 hover:text-white"
                                                }`}
                                        >
                                            {lang}
                                        </button>

                                    ))}

                                </div>

                            </div>


                            {/* TWO PANELS */}

                            <div className="grid lg:grid-cols-2">


                                {/* CODE */}

                                <div className="p-5 lg:p-6 border-b lg:border-b-0 lg:border-r border-white/[0.07]">

                                    <div className="flex items-center justify-between mb-4">

                                        <div>

                                            <p className="text-xs font-semibold text-zinc-200">
                                                Source Code
                                            </p>

                                            <p className="text-[9px] text-zinc-600 uppercase tracking-wider mt-1">
                                                main.{extension}
                                            </p>

                                        </div>

                                        <LanguageSelector
                                            language={language}
                                            setLanguage={setLanguage}
                                        />

                                    </div>


                                    {/* Editor */}

                                    <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#050505]">

                                        <div className="h-11 px-4 flex items-center justify-between border-b border-white/[0.06] bg-[#0b0b0b]">

                                            <span className="text-[10px] font-mono text-zinc-600">
                                                {language}
                                            </span>

                                            <div className="flex items-center gap-1">

                                                <button
                                                    onClick={handleCopy}
                                                    title="Copy code"
                                                    className="p-2 rounded-md text-zinc-600 hover:text-white hover:bg-white/[0.05] transition"
                                                >
                                                    {copied
                                                        ? <Check className="w-3.5 h-3.5 text-emerald-400" />
                                                        : <Copy className="w-3.5 h-3.5" />
                                                    }
                                                </button>

                                                <button
                                                    onClick={() => setFullscreen(!fullscreen)}
                                                    title={fullscreen ? "Exit fullscreen" : "Fullscreen"}
                                                    className="p-2 rounded-md text-zinc-600 hover:text-white hover:bg-white/[0.05] transition"
                                                >
                                                    {fullscreen
                                                        ? <Minimize2 className="w-3.5 h-3.5" />
                                                        : <Maximize2 className="w-3.5 h-3.5" />
                                                    }
                                                </button>

                                                <button
                                                    onClick={handleClear}
                                                    title="Clear"
                                                    className="p-2 rounded-md text-zinc-600 hover:text-red-400 hover:bg-red-500/[0.05] transition"
                                                >
                                                    <Trash2 className="w-3.5 h-3.5" />
                                                </button>

                                            </div>

                                        </div>


                                        <div className="min-h-[480px] p-2">

                                            <CodeEditor
                                                code={code}
                                                setCode={setCode}
                                            />

                                        </div>

                                    </div>


                                    {/* Bottom */}

                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">

                                        <div className="text-[9px] font-mono uppercase tracking-wider text-zinc-700">

                                            {code.length} characters
                                            <span className="mx-2">•</span>
                                            {code ? code.split("\n").length : 0} lines

                                        </div>

                                        <ReviewButton
                                            onClick={analyzeCode}
                                            loading={loading}
                                        />

                                    </div>

                                </div>


                                {/* AI RESULT */}

                                <div className="p-5 lg:p-6">

                                    <div className="flex items-center justify-between mb-4">

                                        <div className="flex items-center gap-3">

                                            <div className="w-9 h-9 rounded-xl border border-red-500/20 bg-red-500/[0.06] flex items-center justify-center">

                                                <Sparkles className="w-4 h-4 text-red-400" />

                                            </div>

                                            <div>

                                                <p className="text-xs font-semibold">
                                                    AI Review
                                                </p>

                                                <p className="text-[9px] uppercase tracking-wider text-zinc-600 mt-1">
                                                    Analysis Results
                                                </p>

                                            </div>

                                        </div>


                                        <span className={`text-[9px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-full border ${status.text} ${status.border} ${status.bg}`}>
                                            {status.label}
                                        </span>

                                    </div>


                                    <div className="min-h-[540px] rounded-2xl border border-white/[0.07] bg-[#060606] overflow-hidden">


                                        {/* Loading */}

                                        {loading && (

                                            <div className="h-full min-h-[540px] flex flex-col items-center justify-center text-center px-8">

                                                <div className="relative w-16 h-16 rounded-2xl border border-red-500/20 bg-red-500/[0.07] flex items-center justify-center">

                                                    <Sparkles className="w-7 h-7 text-red-400 animate-pulse" />

                                                    <span className="absolute inset-0 rounded-2xl border border-red-500/30 animate-[ping-slow_2s_ease-out_infinite]" />

                                                </div>

                                                <h3 className="mt-6 text-sm font-semibold">
                                                    Reviewing your code
                                                </h3>

                                                <p className="mt-2 min-h-[16px] text-xs font-mono text-red-300/80">
                                                    {ANALYSIS_PHASES[phaseIndex]}
                                                </p>

                                                <div className="mt-6 w-48 h-1 rounded-full bg-white/[0.06] overflow-hidden">
                                                    <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-red-500 to-rose-400 animate-[loadingBar_1.4s_ease-in-out_infinite]" />
                                                </div>

                                            </div>

                                        )}


                                        {/* RESULT */}

                                        {!loading && result && (

                                            <div className="h-[540px] overflow-y-auto p-5">

                                                <ReviewResult
                                                    result={result}
                                                    language={language}
                                                    originalCode={code}
                                                />

                                            </div>

                                        )}


                                        {/* EMPTY */}

                                        {!loading && !result && (

                                            <div className="h-[540px] flex flex-col items-center justify-center text-center px-8">

                                                <div className="w-16 h-16 rounded-2xl border border-white/[0.07] bg-white/[0.02] flex items-center justify-center">

                                                    <Sparkles className="w-7 h-7 text-zinc-700" />

                                                </div>

                                                <h3 className="mt-5 text-sm font-semibold text-zinc-300">
                                                    Your review will appear here
                                                </h3>

                                                <p className="mt-2 max-w-sm text-xs leading-6 text-zinc-600">
                                                    Add your code and start an AI review
                                                    to see detailed findings.
                                                </p>

                                                <div className="flex flex-wrap justify-center gap-2 mt-6">

                                                    {[
                                                        "Bug Detection",
                                                        "Security",
                                                        "Performance",
                                                        "Code Quality",
                                                    ].map((item) => (

                                                        <span
                                                            key={item}
                                                            className="px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] text-[9px] font-mono text-zinc-600"
                                                        >
                                                            {item}
                                                        </span>

                                                    ))}

                                                </div>

                                            </div>

                                        )}

                                    </div>

                                </div>

                            </div>


                            {/* STATUS */}

                            <div className="px-6 py-3 border-t border-white/[0.06] flex items-center justify-between">

                                <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-700">
                                    CodePilot AI Engine
                                </span>

                                <span className={`flex items-center gap-2 text-[9px] font-mono uppercase tracking-wider ${status.text}`}>

                                    <span className={`w-1.5 h-1.5 rounded-full ${status.dot} ${loading ? "animate-pulse" : ""}`} />

                                    {status.label}

                                </span>

                            </div>

                        </div>
                    </Reveal>

                </section>


                {/* AI CHAT — promoted above Capabilities and given a featured treatment */}

                <section className="mt-20 max-w-5xl mx-auto">

                    <Reveal>
                        {/* gradient-border wrapper: outer div carries the gradient, inner div is the real background */}
                        <div className="relative rounded-[26px] bg-gradient-to-b from-red-500/25 via-red-500/[0.06] to-transparent p-px overflow-hidden">

                            <div className="absolute -top-24 right-0 w-72 h-72 rounded-full bg-red-500/[0.08] blur-[100px] pointer-events-none" />

                            <div className="relative rounded-[25px] bg-[#090909] p-6 sm:p-8">

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

                                    <div className="flex items-center gap-4">

                                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-500 to-rose-800 shadow-[0_8px_20px_-8px_rgba(239,68,68,0.5)] flex items-center justify-center flex-none">
                                            <MessageCircle className="w-5 h-5 text-white" />
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h2 className="text-xl font-semibold">
                                                    Ask CodePilot about your code
                                                </h2>
                                                <span className="inline-flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider text-red-300 border border-red-500/25 bg-red-500/10 px-2 py-0.5 rounded-full">
                                                    <span className="w-1 h-1 rounded-full bg-red-400 animate-pulse" />
                                                    Live
                                                </span>
                                            </div>
                                            <p className="text-xs text-zinc-500 mt-1">
                                                Follow-up questions, deeper explanations, and fixes — right after your review.
                                            </p>
                                        </div>

                                    </div>

                                </div>

                                <AIChat />

                            </div>
                        </div>
                    </Reveal>

                </section>


                {/* CAPABILITIES */}

                <section className="mt-20">

                    <Reveal>
                        <div className="text-center mb-8">

                            <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-red-400">
                                What CodePilot checks
                            </p>

                            <h2 className="mt-2 text-2xl font-semibold">
                                One review. Four layers of analysis.
                            </h2>

                        </div>
                    </Reveal>


                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

                        {CAPABILITIES.map((item, i) => {

                            const Icon = item.icon;

                            return (
                                <Reveal key={item.title} delay={i * 100}>
                                    <div className="h-full p-5 rounded-2xl border border-white/[0.07] bg-white/[0.015] transition-all duration-300 hover:-translate-y-1 hover:border-red-500/25 hover:bg-red-500/[0.03] hover:shadow-[0_20px_50px_-20px_rgba(239,68,68,0.35)]">

                                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-500 to-rose-800 shadow-[0_8px_20px_-8px_rgba(239,68,68,0.5)] flex items-center justify-center">
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>

                                        <h3 className="mt-4 text-sm font-semibold">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 text-xs leading-5 text-zinc-600">
                                            {item.text}
                                        </p>

                                    </div>
                                </Reveal>
                            );

                        })}

                    </div>

                </section>


                {/* CTA */}

                <Reveal>
                    <section className="mt-20 max-w-xl mx-auto">

                        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 text-center sm:text-left rounded-2xl border border-white/[0.08] bg-white/[0.02] px-8 py-8">

                            <div className="flex items-center gap-3">

                                <div className="flex-none w-10 h-10 rounded-xl border border-red-500/20 bg-red-500/[0.07] flex items-center justify-center">
                                    <Sparkles className="w-4 h-4 text-red-400" />
                                </div>

                                <p className="text-sm text-zinc-400">
                                    Paste another snippet any time — CodePilot is ready when you are.
                                </p>

                            </div>

                            <a
                                href="#workspace"
                                className="flex-none inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-red-500/25 bg-red-500/[0.08] px-4 py-2 text-xs font-medium text-red-300 hover:bg-red-500/[0.15] transition"
                            >
                                Try another snippet <ArrowRight className="w-3.5 h-3.5" />
                            </a>

                        </div>

                    </section>
                </Reveal>

            </main>


            {/* HOME FOOTER */}

            <div className="relative z-10">
                <Footer />
            </div>

            <style>{`
                @keyframes float-1 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-20px, 24px) scale(1.05); }
                }
                @keyframes float-2 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(22px, -22px) scale(1.06); }
                }
                @keyframes travel {
                    0% { left: -10%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { left: 100%; opacity: 0; }
                }
                @keyframes ping-slow {
                    0% { transform: scale(1); opacity: .6; }
                    100% { transform: scale(1.35); opacity: 0; }
                }
                @keyframes loadingBar {
                    0% { transform: translateX(-110%); }
                    50% { transform: translateX(60%); }
                    100% { transform: translateX(230%); }
                }
                @media (prefers-reduced-motion: reduce) {
                    *, *::before, *::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }
                }
            `}</style>

        </div>
    );
}
