import { Link } from "react-router-dom";
import { MoonStar } from "lucide-react";
import Logo from "../common/Logo";
import Button from "../common/Button";

export default function Navbar() {
    return (
        <header className="fixed top-6 left-0 w-full z-50">
            <div className="w-[92%] max-w-[1500px] mx-auto">

                <div className="
                    h-[72px]
                    rounded-[30px]
                    px-8
                    flex
                    items-center
                    justify-between
                    backdrop-blur-2xl
                    bg-gradient-to-r
                    from-white/[0.08]
                    to-white/[0.03]
                    border
                    border-white/10
                    shadow-[0_15px_60px_rgba(0,0,0,.45)]
                ">

                    <Logo />

                    <nav className="hidden lg:flex items-center gap-10">

                        {["Features", "How it Works", "Pricing", "Docs"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="
                                    relative
                                    text-[15px]
                                    text-slate-300
                                    transition
                                    hover:text-white
                                    after:absolute
                                    after:left-0
                                    after:-bottom-2
                                    after:h-[2px]
                                    after:w-0
                                    after:bg-violet-400
                                    after:transition-all
                                    hover:after:w-full
                                "
                            >
                                {item}
                            </a>
                        ))}

                    </nav>

                    <div className="flex items-center gap-4">

                        <button
                            className="
                                w-11
                                h-11
                                rounded-full
                                border
                                border-white/10
                                bg-white/5
                                flex
                                items-center
                                justify-center
                                hover:bg-white/10
                                transition
                            "
                        >
                            <MoonStar size={18} className="text-slate-300" />
                        </button>

                        <Link to="/login">
                            <button
                                className="
                                    h-11
                                    px-6
                                    rounded-full
                                    text-slate-300
                                    hover:text-white
                                    border
                                    border-white/10
                                    hover:bg-white/5
                                    transition
                                "
                            >
                                Log in
                            </button>
                        </Link>

                        <Link to="/register">
                            <Button
                                className="
                                    h-11
                                    px-7
                                    rounded-full
                                    bg-gradient-to-r
                                    from-violet-500
                                    via-fuchsia-500
                                    to-purple-500
                                    hover:scale-105
                                    transition-all
                                    duration-300
                                    text-white
                                    shadow-[0_0_35px_rgba(168,85,247,.45)]
                                "
                            >
                                Get Started →
                            </Button>
                        </Link>

                    </div>

                </div>

            </div>
        </header>
    );
}