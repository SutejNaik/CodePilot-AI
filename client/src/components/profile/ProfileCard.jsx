import {
    User,
    Mail,
    Calendar,
    BadgeCheck,
    FileCode2,
    ShieldCheck
} from "lucide-react";

export default function ProfileCard() {

    return (

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <div className="flex items-center gap-6">

                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-4xl font-bold">
                    U
                </div>

                <div>

                    <h2 className="text-3xl font-bold">
                        User Developer
                    </h2>

                    <p className="text-slate-400 mt-1">
                        AI Code Review User
                    </p>

                    <span className="inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">
                        <BadgeCheck size={16} />
                        Active Account
                    </span>

                </div>

            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-10">

                <div className="flex items-center gap-4 bg-slate-800 rounded-xl p-4">
                    <Mail className="text-blue-500" />
                    <div>
                        <p className="text-slate-400 text-sm">Email</p>
                        <p>user@example.com</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-slate-800 rounded-xl p-4">
                    <User className="text-blue-500" />
                    <div>
                        <p className="text-slate-400 text-sm">Account Type</p>
                        <p>Developer</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-slate-800 rounded-xl p-4">
                    <Calendar className="text-blue-500" />
                    <div>
                        <p className="text-slate-400 text-sm">Joined</p>
                        <p>August 2026</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-slate-800 rounded-xl p-4">
                    <ShieldCheck className="text-blue-500" />
                    <div>
                        <p className="text-slate-400 text-sm">AI Reviewer</p>
                        <p>Enabled</p>
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">

                <div className="bg-slate-800 rounded-xl p-6 text-center">

                    <FileCode2 className="mx-auto text-blue-500 mb-3" />

                    <h3 className="text-3xl font-bold">
                        ∞
                    </h3>

                    <p className="text-slate-400">
                        Reviews Supported
                    </p>

                </div>

                <div className="bg-slate-800 rounded-xl p-6 text-center">

                    <ShieldCheck className="mx-auto text-green-500 mb-3" />

                    <h3 className="text-3xl font-bold">
                        AI
                    </h3>

                    <p className="text-slate-400">
                        Powered Analysis
                    </p>

                </div>

            </div>

        </div>

    );

}