import { Link, useLocation, useNavigate } from "react-router-dom";

import {
    LayoutDashboard,
    Code2,
    History,
    User,
    Settings,
    LogOut,
} from "lucide-react";


const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Review Code", path: "/review", icon: Code2 },
    { name: "History", path: "/history", icon: History },
    { name: "Profile", path: "/profile", icon: User },
    { name: "Settings", path: "/settings", icon: Settings },
];


export default function Sidebar() {

    const location = useLocation();
    const navigate = useNavigate();


    function handleLogout() {

        localStorage.removeItem("token");

        navigate("/login");

    }


    return (
        <aside className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col">

            <div className="p-6 border-b border-slate-800">
                <h1 className="text-2xl font-bold text-blue-500">
                    CodePilot-AI
                </h1>
            </div>


            <nav className="flex-1 p-4">

                {menuItems.map((item) => {

                    const Icon = item.icon;

                    return (

                        <Link
                            key={item.name}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition ${location.pathname === item.path
                                    ? "bg-blue-600 text-white"
                                    : "text-slate-300 hover:bg-slate-800"
                                }`}
                        >

                            <Icon size={20} />

                            {item.name}

                        </Link>

                    );

                })}

            </nav>


            <div className="p-4 border-t border-slate-800">

                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-slate-300 hover:bg-red-600 hover:text-white transition"
                >

                    <LogOut size={20} />

                    Logout

                </button>

            </div>


        </aside>
    );
}