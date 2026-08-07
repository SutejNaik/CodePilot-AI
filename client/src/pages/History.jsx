import { useEffect, useState } from "react";
import api from "../api/axios";
import HistoryCard from "../components/history/HistoryCard";

export default function History() {

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchHistory() {

            try {

                const response = await api.get("/review/history");

                setReviews(response.data);

            } catch (err) {

                console.log(err);

            }

            setLoading(false);

        }

        fetchHistory();

    }, []);

    return (

        <div className="min-h-screen bg-slate-950 text-white p-8">

            <div className="max-w-7xl mx-auto">

                <h1 className="text-4xl font-bold">
                    Review History
                </h1>

                <p className="text-slate-400 mt-2">
                    View all your previous AI code reviews.
                </p>

                {loading ? (

                    <p className="mt-10 text-slate-400">
                        Loading...
                    </p>

                ) : reviews.length === 0 ? (

                    <div className="mt-10 bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">

                        <h2 className="text-2xl font-semibold">
                            No Reviews Yet
                        </h2>

                        <p className="text-slate-400 mt-2">
                            Review some code to see it here.
                        </p>

                    </div>

                ) : (

                    <div className="grid gap-6 mt-8">

                        {reviews.map((review) => (

                            <HistoryCard
                                key={review._id}
                                review={review}
                            />

                        ))}

                    </div>

                )}

            </div>

        </div>

    );

}