import IssueCard from "./IssueCard";
import ImprovedCode from "./ImprovedCode";
import DownloadReport from "./DownloadReport";
import AIChat from "./AIChat";

export default function ReviewResult({
    result,
    language,
    originalCode,
    historyMode = false
}) {

    return (
        <div className="mt-10">

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

                <h2 className="text-2xl font-bold">
                    AI Review Summary
                </h2>

                <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">

                    <h3 className="text-lg font-semibold text-blue-400">
                        Overall Review
                    </h3>

                    <p className="mt-2 text-slate-300 leading-7">
                        {result.summary}
                    </p>

                </div>

                <div className="mt-6">

                    <p className="text-slate-400">
                        Code Quality Score
                    </p>

                    <h3 className="text-5xl font-bold text-blue-500 mt-2">
                        {result.score}%
                    </h3>

                </div>

            </div>


            <div className="mt-6 space-y-5">

                <h2 className="text-xl font-bold">
                    Issues Found
                </h2>

                {result.issues.length === 0 ? (

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-green-400">
                        ✅ No issues found.
                    </div>

                ) : (

                    result.issues.map((issue, index) => (

                        <IssueCard
                            key={index}
                            title={issue.title}
                            category={issue.category}
                            severity={issue.severity}
                            description={issue.description}
                            line={issue.line}
                        />

                    ))

                )}

            </div>


            <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6">

                <h2 className="text-xl font-bold">
                    Suggestions
                </h2>

                <ul className="mt-4 space-y-3">

                    {result.suggestions.map((item, index) => (

                        <li
                            key={index}
                            className="text-slate-300"
                        >
                            ✓ {item}
                        </li>

                    ))}

                </ul>

            </div>


            <ImprovedCode
                code={result.improved_code}
                language={language}
            />

            {!historyMode && (
                <>
                    <AIChat
                        language={language}
                        originalCode={originalCode}
                        improvedCode={result.improved_code}
                    />

                    <DownloadReport
                        result={result}
                        language={language}
                    />
                </>
            )}

        </div>
    );
}