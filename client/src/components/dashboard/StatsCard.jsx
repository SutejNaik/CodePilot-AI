export default function StatsCard({
    title,
    value,
    change,
    icon,
}) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">

            <div className="flex justify-between items-center">
                <p className="text-slate-400">
                    {title}
                </p>

                <div className="text-blue-500">
                    {icon}
                </div>
            </div>


            <h2 className="text-4xl font-bold mt-5">
                {value}
            </h2>


            <p className="text-green-400 mt-3 text-sm">
                {change}
            </p>

        </div>
    );
}