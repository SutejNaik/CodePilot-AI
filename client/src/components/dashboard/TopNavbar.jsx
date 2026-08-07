import { Bell } from "lucide-react";

export default function TopNavbar() {
    return (
        <header className="h-20 border-b border-slate-800 bg-slate-950 flex items-center justify-between px-8">
            <div>
                <h2 className="text-2xl font-bold">Dashboard</h2>
                <p className="text-slate-400 text-sm">
                    Welcome back to CodePilot-AI
                </p>
            </div>

            <div className="flex items-center gap-6">
                <Bell className="cursor-pointer" />

                <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center font-bold">
                    U
                </div>
            </div>
        </header>
    );
}