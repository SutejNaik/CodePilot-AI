export default function LanguageSelector({ language, setLanguage }) {

    return (
        <div>

            <label className="block text-slate-300 mb-3">
                Programming Language
            </label>

            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="
                w-full
                bg-slate-900
                border
                border-slate-800
                rounded-xl
                px-4
                py-3
                text-white
                "
            >

                <option value="python">Python</option>
                <option value="javascript">JavaScript</option>
                <option value="java">Java</option>
                <option value="cpp">C++</option>
                <option value="go">Go</option>

            </select>

        </div>
    );
}