import { Award, BarChart3 } from "lucide-react";

export default function ReviewChart() {

    return (

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

            <div className="flex items-center gap-3 mb-6">

                <Award className="text-blue-500" />

                <h2 className="text-xl font-bold">
                    Code Quality
                </h2>

            </div>

            <div className="space-y-4">

                <div className="bg-slate-800 rounded-xl p-5">

                    <div className="flex justify-between">

                        <span className="text-slate-400">
                            AI analyzes your code for
                        </span>

                        <BarChart3 className="text-blue-500" />

                    </div>

                    <ul className="mt-4 space-y-2 text-slate-300">

                        <li>✓ Security Issues</li>

                        <li>✓ Bugs</li>

                        <li>✓ Performance Problems</li>

                        <li>✓ Best Practices</li>

                        <li>✓ Maintainability</li>

                        <li>✓ Readability</li>

                    </ul>

                </div>

            </div>

        </div>

    );

}