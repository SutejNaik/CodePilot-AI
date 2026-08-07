import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/common/Button";
import Hero from "../components/home/Hero";

export default function Home() {
    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col">
            <Navbar />

            <main className="relative overflow-hidden">

                {/* Background Glow */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-[-180px] left-[-120px] h-[500px] w-[500px] rounded-full bg-sky-400/20 blur-[140px]" />
                    <div className="absolute top-[120px] right-[-150px] h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[140px]" />
                    <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[180px]" />
                </div>

                <Hero />

            </main>

            {/* Features */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold">Why Choose CodePilot-AI?</h2>
                    <p className="mt-4 text-slate-400">
                        Everything you need to review code faster and write better software.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 hover:border-blue-500 transition">
                        <div className="text-4xl mb-4">🤖</div>
                        <h3 className="text-xl font-semibold mb-3">AI Review</h3>
                        <p className="text-slate-400">
                            Get instant AI-powered code reviews with detailed suggestions.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 hover:border-blue-500 transition">
                        <div className="text-4xl mb-4">🔒</div>
                        <h3 className="text-xl font-semibold mb-3">Security Analysis</h3>
                        <p className="text-slate-400">
                            Detect common security issues before they become real problems.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 hover:border-blue-500 transition">
                        <div className="text-4xl mb-4">⚡</div>
                        <h3 className="text-xl font-semibold mb-3">Performance</h3>
                        <p className="text-slate-400">
                            Improve efficiency with AI suggestions for cleaner, faster code.
                        </p>
                    </div>

                    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 hover:border-blue-500 transition">
                        <div className="text-4xl mb-4">📊</div>
                        <h3 className="text-xl font-semibold mb-3">Detailed Reports</h3>
                        <p className="text-slate-400">
                            View organized reports with issues, explanations, and recommendations.
                        </p>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold">How It Works</h2>
                    <p className="mt-4 text-slate-400">
                        Review your code in three simple steps.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
                        <div className="w-14 h-14 mx-auto rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold">
                            1
                        </div>

                        <h3 className="text-2xl font-semibold mt-6">
                            Paste Your Code
                        </h3>

                        <p className="text-slate-400 mt-4">
                            Paste or upload your source code directly into the review editor.
                        </p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
                        <div className="w-14 h-14 mx-auto rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold">
                            2
                        </div>

                        <h3 className="text-2xl font-semibold mt-6">
                            AI Reviews It
                        </h3>

                        <p className="text-slate-400 mt-4">
                            Our AI analyzes bugs, security, performance and coding practices.
                        </p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
                        <div className="w-14 h-14 mx-auto rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold">
                            3
                        </div>

                        <h3 className="text-2xl font-semibold mt-6">
                            Get Your Report
                        </h3>

                        <p className="text-slate-400 mt-4">
                            Receive an organized report with suggestions and improvements.
                        </p>
                    </div>

                </div>
            </section>

            {/* Statistics */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid gap-8 md:grid-cols-3">

                    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 text-center">
                        <h2 className="text-5xl font-bold text-blue-500">10K+</h2>
                        <p className="mt-3 text-slate-400">Lines of Code Reviewed</p>
                    </div>

                    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 text-center">
                        <h2 className="text-5xl font-bold text-blue-500">95%</h2>
                        <p className="mt-3 text-slate-400">Review Accuracy</p>
                    </div>

                    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 text-center">
                        <h2 className="text-5xl font-bold text-blue-500">15+</h2>
                        <p className="mt-3 text-slate-400">Programming Languages</p>
                    </div>

                </div>
            </section>

            {/* Call To Action */}
            <section className="max-w-5xl mx-auto px-6 py-20">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-center">

                    <h2 className="text-4xl font-bold">
                        Ready to Improve Your Code?
                    </h2>

                    <p className="mt-6 text-lg text-blue-100">
                        Let AI analyze your code, detect issues, and help you write cleaner,
                        faster, and more secure software.
                    </p>

                    <div className="mt-10">
                        <Link to="/review">
                            <Button className="bg-white text-blue-700 hover:bg-slate-100">
                                Start Your First Review
                            </Button>
                        </Link>
                    </div>

                </div>
            </section>
            <Footer />
        </div>



    );
}