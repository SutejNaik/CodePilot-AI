import { ArrowRight, LogOut } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const isLoggedIn = !!localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    const navItems = [
        { label: "Dashboard", path: "/dashboard" },
        { label: "Code Review", path: "/review" },
        { label: "History", path: "/history" },
        { label: "Profile", path: "/profile" },
    ];

    return (
        <header>
            <div className="max-w-[1500px] mx-auto px-10 py-6 flex items-center justify-between">

                {/* LOGO SECTION */}
                <Link to="/" className="flex items-center gap-3.5 group">

                    {/* LARGE CODE ROCKET LOGO (NO CONTAINER) */}
                    <div className="relative w-12 h-12 flex items-center justify-center">
                        {/* Ambient Rocket Flame Glow */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#ff2a2a] via-[#ff5c38] to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />

                        {/* MAIN ROCKET SVG */}
                        <svg
                            className="w-12 h-12 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1 drop-shadow-[0_4px_20px_rgba(255,42,42,0.6)]"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                {/* Metallic Body Gradient */}
                                <linearGradient id="rocket-body-lg" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#ffffff" />
                                    <stop offset="50%" stopColor="#e2e8f0" />
                                    <stop offset="100%" stopColor="#94a3b8" />
                                </linearGradient>

                                {/* AI Flame Gradient */}
                                <linearGradient id="rocket-flame-lg" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#ff6666" />
                                    <stop offset="40%" stopColor="#ff2a2a" />
                                    <stop offset="100%" stopColor="#800000" />
                                </linearGradient>
                            </defs>

                            {/* Left Bracket Fin '<' */}
                            <path
                                d="M9 22L4 26L9 28"
                                stroke="url(#rocket-body-lg)"
                                strokeWidth="2.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            {/* Right Bracket Fin '>' */}
                            <path
                                d="M27 22L32 26L27 28"
                                stroke="url(#rocket-body-lg)"
                                strokeWidth="2.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            {/* Rocket Fuselage */}
                            <path
                                d="M18 3L25 15L21 25H15L11 15L18 3Z"
                                fill="url(#rocket-body-lg)"
                            />

                            {/* Glass Reflection / Sheen Line */}
                            <path
                                d="M18 5L22 14H19L17 5H18Z"
                                fill="white"
                                className="opacity-60"
                            />

                            {/* Main Flame Thrust Beam */}
                            <path
                                d="M18 22V33"
                                stroke="url(#rocket-flame-lg)"
                                strokeWidth="4"
                                strokeLinecap="round"
                                className="drop-shadow-[0_0_12px_#ff2a2a]"
                            />

                            {/* Side Thrust Sparks */}
                            <path
                                d="M15 25L13 30"
                                stroke="#ff4d4d"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                d="M21 25L23 30"
                                stroke="#ff4d4d"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />

                            {/* Cockpit Window / Core Node */}
                            <circle cx="18" cy="12" r="2.2" fill="#09090c" />
                            <circle cx="18" cy="12" r="1" fill="#ff4d4d" />
                        </svg>
                    </div>

                    {/* BRAND TYPOGRAPHY */}
                    <div className="leading-none flex items-center gap-2">
                        <div>
                            <div className="text-xl font-black tracking-tight text-white flex items-center gap-0.5">
                                <span className="tracking-tight">Code</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b66] via-[#ef3b39] to-[#ff8f8b] drop-shadow-[0_2px_10px_rgba(239,59,57,0.3)]">
                                    Pilot
                                </span>
                            </div>

                            <div className="mt-1 flex items-center gap-1.5">
                                <span className="h-[2px] w-2 bg-[#ff514b] rounded-full" />
                                <span className="text-[9px] font-mono tracking-[0.25em] text-[#ff514b] font-bold uppercase">
                                    AI Review
                                </span>
                            </div>
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
                                        <span className="pointer-events-none absolute left-0 right-0 -bottom-[13px] h-[2px] overflow-hidden">
                                            <span className="absolute inset-0 bg-red-500/20" />
                                            <span className="absolute top-0 bottom-0 left-[-45%] w-[45%] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_12px_rgba(239,68,68,0.95)] animate-[navScan_2.4s_ease-in-out_infinite]" />
                                        </span>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Right Side Buttons */}
                <div className="flex items-center gap-5">
                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-6 py-2.5 text-[14px] font-semibold text-white hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-400 transition-all duration-200 cursor-pointer"
                        >
                            <LogOut size={15} />
                            Log out
                        </button>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="hidden sm:inline text-[15px] text-white hover:text-red-400 transition-colors duration-200"
                            >
                                Log in
                            </Link>

                            <Link
                                to="/register"
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#ef3b39] to-[#b51b1f] px-6 py-3 text-[14px] font-semibold text-white shadow-[0_10px_30px_-8px_rgba(239,59,57,0.75)] hover:shadow-[0_14px_35px_-8px_rgba(239,59,57,0.9)] hover:-translate-y-0.5 transition-all duration-200"
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
          0% { left: -45%; opacity: 0; }
          10% { opacity: 1; }
          50% { opacity: 1; }
          90% { opacity: 0.8; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>
        </header>
    );
}