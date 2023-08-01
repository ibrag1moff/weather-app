import SearchWeather from "./SearchWeather";

export default function Nav({ search, setSearch, handleWeather, setWeather }) {
    return (
        <nav className="flex items-center justify-center md:justify-between md:px-[70px] lg:px-[120px] py-6">
            <h1
                onClick={() => setWeather("")}
                className="hidden font-bold text-3xl md:flex text-center cursor-pointer"
            >
                Weather App
            </h1>

            <SearchWeather
                search={search}
                setSearch={setSearch}
                handleWeather={handleWeather}
            />
        </nav>
    );
}
