// icons
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchWeather({ search, setSearch, handleWeather }) {
    return (
        <div>
            <form
                onSubmit={handleWeather}
                className="flex flex-wrap justify-center gap-3 items-center"
            >
                <input
                    className="border-2 bg-transparent py-2 px-4 s:px-12 rounded-3xl outline-none"
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    placeholder="Search..."
                />
                <button>
                    <AiOutlineSearch size={25} />
                </button>
            </form>
        </div>
    );
}
