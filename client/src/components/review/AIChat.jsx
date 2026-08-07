import { useState, useRef, useEffect } from "react";
import api from "../../api/axios";
import { Bot, User, SendHorizontal } from "lucide-react";

export default function AIChat({
    language,
    originalCode,
    improvedCode
}) {

    const [question, setQuestion] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [messages]);

    async function askAI() {

        if (!question.trim()) return;

        const userQuestion = question;

        setMessages(prev => [
            ...prev,
            {
                role: "user",
                text: userQuestion
            }
        ]);

        setQuestion("");
        setLoading(true);

        try {

            const response = await api.post("/review/chat", {
                language,
                original_code: originalCode,
                improved_code: improvedCode,
                question: userQuestion
            });

            setMessages(prev => [
                ...prev,
                {
                    role: "assistant",
                    text: response.data.answer
                }
            ]);

        } catch (err) {

            setMessages(prev => [
                ...prev,
                {
                    role: "assistant",
                    text: "Sorry, something went wrong."
                }
            ]);

            console.log(err);

        }

        setLoading(false);
    }

    function handleKeyDown(e) {

        if (e.key === "Enter" && !e.shiftKey) {

            e.preventDefault();
            askAI();

        }

    }

    return (

        <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">

            <div className="border-b border-slate-800 px-6 py-4">

                <h2 className="text-xl font-bold">
                    Ask AI About Your Code
                </h2>

                <p className="text-slate-400 text-sm mt-1">
                    Ask follow-up questions about your review.
                </p>

            </div>

            <div className="h-96 overflow-y-auto p-6 space-y-5">

                {messages.length === 0 && (

                    <div className="text-slate-500">

                        Try asking:

                        <ul className="list-disc ml-6 mt-3 space-y-2">

                            <li>Why is this insecure?</li>
                            <li>Explain line 2.</li>
                            <li>Can this code be optimized?</li>
                            <li>Rewrite using best practices.</li>

                        </ul>

                    </div>

                )}

                {messages.map((message, index) => (

                    <div
                        key={index}
                        className={`flex gap-3 ${message.role === "user"
                                ? "justify-end"
                                : "justify-start"
                            }`}
                    >

                        {message.role === "assistant" && (

                            <div className="bg-blue-600 p-2 rounded-full h-fit">

                                <Bot size={18} />

                            </div>

                        )}

                        <div
                            className={`max-w-[80%] rounded-2xl px-5 py-4 whitespace-pre-wrap ${message.role === "user"
                                    ? "bg-blue-600"
                                    : "bg-slate-800"
                                }`}
                        >

                            {message.text}

                        </div>

                        {message.role === "user" && (

                            <div className="bg-slate-700 p-2 rounded-full h-fit">

                                <User size={18} />

                            </div>

                        )}

                    </div>

                ))}

                {loading && (

                    <div className="flex gap-3">

                        <div className="bg-blue-600 p-2 rounded-full">

                            <Bot size={18} />

                        </div>

                        <div className="bg-slate-800 rounded-2xl px-5 py-4">

                            Thinking...

                        </div>

                    </div>

                )}

                <div ref={bottomRef}></div>

            </div>

            <div className="border-t border-slate-800 p-5 flex gap-3">

                <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask anything..."
                    className="flex-1 bg-slate-950 border border-slate-700 rounded-xl p-3 outline-none resize-none h-16"
                />

                <button
                    onClick={askAI}
                    disabled={loading}
                    className="bg-blue-600 hover:bg-blue-700 px-5 rounded-xl disabled:opacity-50"
                >

                    <SendHorizontal />

                </button>

            </div>

        </div>

    );

}