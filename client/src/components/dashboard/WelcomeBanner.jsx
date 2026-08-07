export default function WelcomeBanner() {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8">
            <h1 className="text-3xl font-bold">
                Welcome back, Developer 👋
            </h1>

            <p className="mt-3 text-blue-100 max-w-xl">
                Analyze your code with AI, find bugs, improve security,
                and receive professional development suggestions.
            </p>

            <button className="mt-6 bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition">
                Start New Review
            </button>
        </section>
    );
}