import { Link } from "react-router-dom";
import { Code2, History, User } from "lucide-react";


const actions = [
    {
        title: "Review Code",
        description: "Start a new AI code review",
        icon: <Code2 />,
        path: "/review",
    },
    {
        title: "View History",
        description: "Check previous reviews",
        icon: <History />,
        path: "/history",
    },
    {
        title: "Profile",
        description: "Manage your account",
        icon: <User />,
        path: "/profile",
    },
];


export default function QuickActions() {

    return (
        <section className="mt-8">

            <h2 className="text-xl font-bold mb-6">
                Quick Actions
            </h2>


            <div className="grid md:grid-cols-3 gap-6">

                {actions.map((action) => (
                    <Link
                        key={action.title}
                        to={action.path}
                        className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition"
                    >

                        <div className="text-blue-500 mb-4">
                            {action.icon}
                        </div>


                        <h3 className="font-semibold text-lg">
                            {action.title}
                        </h3>


                        <p className="text-slate-400 mt-2">
                            {action.description}
                        </p>

                    </Link>
                ))}

            </div>

        </section>
    );
}