import { ArrowRight, LogOut } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    // Check whether the user is logged in
    const isLoggedIn = !!localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    const navItems = [
        {
            label: "Dashboard",
            path: "/dashboard",
        },
        {
            label: "Code Review",
            path: "/review",
        },
        {
            label: "History",
            path: "/history",
        },
        {
            label: "Profile",
            path: "/profile",
        },
    ];

    return (
        <header>
            <div className="max-w-[1500px] mx-auto px-10 py-6 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff4b45] to-[#d51f25] flex items-center justify-center shadow-[0_8px_25px_-8px_rgba(239,59,57,0.8)]">

                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                        </svg>

                    </div>

                    <div className="leading-none">

                        <div className="text-xl font-bold tracking-tight text-white">
                            CodePilot
                        </div>

                        <div className="mt-1 text-[9px] font-mono tracking-[0.2em] text-[#ff514b]">
                            AI REVIEW
                        </div>

                    </div>

                </Link>


                {/* Center Navigation */}
                <div className="relative hidden lg:block py-2">

                    <nav className="flex items-center gap-10 text-[15px] text-white/90 relative z-10 pb-3">

                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;

                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`
                                        relative
                                        transition-colors
                                        duration-200
                                        ${isActive
                                            ? "text-white"
                                            : "text-white/90 hover:text-red-400"
                                        }
                                    `}
                                >

                                    {item.label}

                                    {/* ACTIVE SCANNING BEAM */}
                                    {isActive && (
                                        <span
                                            className="
                                                pointer-events-none
                                                absolute
                                                left-0
                                                right-0
                                                -bottom-[13px]
                                                h-[2px]
                                                overflow-hidden
                                            "
                                        >

                                            {/* Base active line */}
                                            <span
                                                className="
                                                    absolute
                                                    inset-0
                                                    bg-red-500/20
                                                "
                                            />

                                            {/* Moving scan beam */}
                                            <span
                                                className="
                                                    absolute
                                                    top-0
                                                    bottom-0
                                                    left-[-45%]
                                                    w-[45%]
                                                    bg-gradient-to-r
                                                    from-transparent
                                                    via-white
                                                    to-transparent
                                                    shadow-[0_0_12px_rgba(239,68,68,0.95)]
                                                    animate-[navScan_2.4s_ease-in-out_infinite]
                                                "
                                            />

                                        </span>
                                    )}

                                </Link>
                            );
                        })}

                    </nav>

                </div>


                {/* Right Side */}
                <div className="flex items-center gap-5">

                    {isLoggedIn ? (

                        /* LOGGED IN */
                        <button
                            onClick={handleLogout}
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-white/20
                                bg-white/10
                                backdrop-blur-md
                                px-6
                                py-2.5
                                text-[14px]
                                font-semibold
                                text-white
                                hover:bg-red-500/20
                                hover:border-red-500/50
                                hover:text-red-400
                                transition-all
                                duration-200
                                cursor-pointer
                            "
                        >

                            <LogOut size={15} />

                            Log out

                        </button>

                    ) : (

                        /* LOGGED OUT */
                        <>
                            <Link
                                to="/login"
                                className="hidden sm:inline text-[15px] text-white hover:text-red-400 transition-colors duration-200"
                            >
                                Log in
                            </Link>

                            <Link
                                to="/register"
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    bg-gradient-to-br
                                    from-[#ef3b39]
                                    to-[#b51b1f]
                                    px-6
                                    py-3
                                    text-[14px]
                                    font-semibold
                                    text-white
                                    shadow-[0_10px_30px_-8px_rgba(239,59,57,0.75)]
                                    hover:shadow-[0_14px_35px_-8px_rgba(239,59,57,0.9)]
                                    hover:-translate-y-0.5
                                    transition-all
                                    duration-200
                                "
                            >

                                Get Started

                                <ArrowRight size={15} />

                            </Link>
                        </>
                    )}

                </div>

            </div>


            {/* Navigation scan animation */}
            <style>{`
                @keyframes navScan {
                    0% {
                        left: -45%;
                        opacity: 0;
                    }

                    10% {
                        opacity: 1;
                    }

                    50% {
                        opacity: 1;
                    }

                    90% {
                        opacity: 0.8;
                    }

                    100% {
                        left: 100%;
                        opacity: 0;
                    }
                }
            `}</style>

        </header>
    );
}