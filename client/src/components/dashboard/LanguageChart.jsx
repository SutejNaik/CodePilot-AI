import { Code2 } from "lucide-react";

export default function LanguageChart() {

    return (

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <div className="flex items-center gap-3 mb-6">

                <Code2 className="text-green-500" />

                <h2 className="text-xl font-bold">
                    Supported Languages
                </h2>

            </div>

            <div className="grid grid-cols-2 gap-4">

                <div className="bg-slate-800 rounded-xl p-4 text-center">

                    <h3 className="text-lg font-semibold">
                        Python
                    </h3>

                    <p className="text-sm text-slate-400 mt-2">
                        Fully Supported
                    </p>

                </div>

                <div className="bg-slate-800 rounded-xl p-4 text-center">

                    <h3 className="text-lg font-semibold">
                        JavaScript
                    </h3>

                    <p className="text-sm text-slate-400 mt-2">
                        Supported
                    </p>

                </div>

                <div className="bg-slate-800 rounded-xl p-4 text-center">

                    <h3 className="text-lg font-semibold">
                        Java
                    </h3>

                    <p className="text-sm text-slate-400 mt-2">
                        Supported
                    </p>

                </div>

                <div className="bg-slate-800 rounded-xl p-4 text-center">

                    <h3 className="text-lg font-semibold">
                        C++
                    </h3>

                    <p className="text-sm text-slate-400 mt-2">
                        Supported
                    </p>

                </div>

            </div>

        </div>

    );

}