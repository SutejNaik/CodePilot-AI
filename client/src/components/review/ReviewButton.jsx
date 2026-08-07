import { Loader2 } from "lucide-react";

export default function ReviewButton({
    onClick,
    loading
}) {

    return (

        <button
            onClick={onClick}
            disabled={loading}
            className={`
                w-full
                mt-6
                py-3
                rounded-xl
                font-semibold
                transition
                flex
                items-center
                justify-center
                gap-2
                ${loading
                    ? "bg-slate-700 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }
            `}
        >

            {loading ? (
                <>
                    <Loader2
                        size={20}
                        className="animate-spin"
                    />
                    Analyzing...
                </>
            ) : (
                "Analyze Code"
            )}

        </button>

    );

}
