import { useEffect, useState } from "react";
import api from "../api/axios";

import DashboardLayout from "../layouts/DashboardLayout";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import StatsCard from "../components/dashboard/StatsCard";
import RecentReviews from "../components/dashboard/RecentReviews";
import QuickActions from "../components/dashboard/QuickActions";
import ReviewChart from "../components/dashboard/ReviewChart";
import LanguageChart from "../components/dashboard/LanguageChart";

import {
    FileCode2,
    Star,
    ShieldCheck,
    Languages,
} from "lucide-react";


export default function Dashboard() {


    const [stats, setStats] = useState({

        total_reviews: 0,
        average_score: 0,
        security_issues: 0,
        languages: 0

    });



    useEffect(() => {

        fetchStats();

    }, []);



    async function fetchStats() {

        try {

            const response = await api.get("/review/stats");

            setStats(response.data);


        } catch (error) {

            console.log(error);

        }

    }



    const statsCards = [

        {
            title: "Total Reviews",
            value: stats.total_reviews,
            change: "All reviews",
            icon: <FileCode2 />,
        },

        {
            title: "Average Score",
            value: `${stats.average_score}%`,
            change: "Quality score",
            icon: <Star />,
        },

        {
            title: "Security Issues",
            value: stats.security_issues,
            change: "Detected",
            icon: <ShieldCheck />,
        },

        {
            title: "Languages",
            value: stats.languages,
            change: "Used",
            icon: <Languages />,
        },

    ];



    return (

        <DashboardLayout>

            <WelcomeBanner />


            <div className="grid gap-6 mt-8 md:grid-cols-2 xl:grid-cols-4">

                {statsCards.map((item) => (

                    <StatsCard
                        key={item.title}
                        {...item}
                    />

                ))}

            </div>


            <RecentReviews />


            <QuickActions />


            <div className="grid lg:grid-cols-2 gap-6 mt-8">

                <ReviewChart />

                <LanguageChart />

            </div>


        </DashboardLayout>

    );
}