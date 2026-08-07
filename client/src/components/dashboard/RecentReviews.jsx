import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/axios";

export default function RecentReviews() {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchRecentReviews();
    }, []);

    async function fetchRecentReviews() {

        try {

            const response = await api.get("/review/recent");

            setReviews(response.data);

        } catch (error) {

            console.log(error);

        }

    }

    return (

        <section className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <div className="flex justify-between items-center mb-6">

                <h2 className="text-xl font-bold">
                    Recent Reviews
                </h2>

                <Link
                    to="/history"
                    className="text-blue-400 hover:text-blue-300"
                >
                    View All
                </Link>

            </div>

            <div className="space-y-4">

                {reviews.length === 0 ? (

                    <p className="text-slate-400">
                        No reviews yet.
                    </p>

                ) : (

                    reviews.map((review) => (

                        <div
                            key={review._id}
                            className="flex justify-between items-center bg-slate-800 rounded-xl p-4"
                        >

                            <div>

                                <h3 className="font-semibold uppercase">
                                    {review.language}
                                </h3>

                                <p className="text-sm text-slate-400">
                                    {new Date(review.created_at).toLocaleString()}
                                </p>

                            </div>

                            <div className="text-right">

                                <p className="text-blue-400 font-bold text-lg">
                                    {review.score}%
                                </p>

                                <p className="text-sm text-slate-400">
                                    {review.issues.length} Issue(s)
                                </p>

                            </div>

                        </div>

                    ))

                )}

            </div>

        </section>

    );

}