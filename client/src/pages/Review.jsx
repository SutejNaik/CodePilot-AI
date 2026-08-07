import { useState } from "react";

import api from "../api/axios";

import AIChat from "../components/review/AIChat";
import LanguageSelector from "../components/review/LanguageSelector";
import CodeEditor from "../components/review/CodeEditor";
import ReviewButton from "../components/review/ReviewButton";
import ReviewResult from "../components/review/ReviewResult";

export default function Review() {

    const [language, setLanguage] = useState("python");

    const [code, setCode] = useState("");

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    async function analyzeCode() {

        setLoading(true);

        setResult(null);

        try {

            const response = await api.post(
                "/review/",
                {
                    language,
                    code
                }
            );

            console.log(response.data);

            setResult(response.data);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    }

    return (

        <div className="min-h-screen bg-slate-950 text-white p-8">

            <div className="max-w-7xl mx-auto">

                <h1 className="text-4xl font-bold">
                    AI Code Review
                </h1>

                <p className="text-slate-400 mt-3">
                    Analyze your code and get intelligent suggestions.
                </p>

                <div className="grid lg:grid-cols-2 gap-8 mt-10">

                    <div className="bg-slate-900 p-6 rounded-3xl">

                        <LanguageSelector
                            language={language}
                            setLanguage={setLanguage}
                        />

                        <div className="mt-6">

                            <CodeEditor
                                code={code}
                                setCode={setCode}
                            />

                        </div>

                        <ReviewButton
                            onClick={analyzeCode}
                            loading={loading}
                        />

                    </div>

                    <div>

                        {result && (
                            <ReviewResult
                                result={result}
                                language={language}
                                originalCode={code}
                            />
                        )}

                    </div>

                </div>

            </div>

        </div>

    );
}