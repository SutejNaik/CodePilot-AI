import { Link } from "react-router-dom";
import { Eye, Calendar, Code2, AlertTriangle } from "lucide-react";

export default function HistoryCard({ review }) {

    return (

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">

            <div className="flex justify-between items-start">

                <div>

                    <div className="flex items-center gap-2 text-blue-400">

                        <Code2 size={18} />

                        <span className="uppercase font-semibold">
                            {review.language}
                        </span>

                    </div>

                    <div className="flex items-center gap-2 mt-3 text-slate-400">

                        <Calendar size={16} />

                        <span>
                            {new Date(review.created_at).toLocaleString()}
                        </span>

                    </div>

                </div>

                <div className="text-right">

                    <p className="text-slate-400 text-sm">
                        Score
                    </p>

                    <h2 className="text-3xl font-bold text-blue-500">
                        {review.score}%
                    </h2>

                </div>

            </div>

            <div className="flex items-center gap-2 mt-6 text-yellow-400">

                <AlertTriangle size={18} />

                <span>
                    {review.issues.length} Issue(s) Found
                </span>

            </div>

            <div className="mt-6">

                <Link
                    to={`/history/${review._id}`}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl transition"
                >
                    <Eye size={18} />

                    View Review
                </Link>

            </div>

        </div>

    );

}