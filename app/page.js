"use client";
// react
import { useState } from "react";

// axios
import axios from "axios";

// react skeleton loading
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// components
import Nav from "@/components/Nav";
import Weather from "@/components/Weather";

export default function Home() {
    const [weather, setWeather] = useState("");
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.NEXT_PUBLIC_API_KEY}`;

    const handleWeather = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.get(url).then((res) => setWeather(res.data));
        console.log(weather);
        setLoading(false);
        setSearch("");
    };

    if (loading) {
        return (
            <div className="mx-auto mt-[200px] w-[250px] xs:w-[300px] s:w-[430px] md:w-[600px]">
                <Skeleton count={16} />
            </div>
        );
    } else {
        return (
            <div>
                <Nav
                    search={search}
                    setSearch={setSearch}
                    handleWeather={handleWeather}
                    setWeather={setWeather}
                />

                {weather ? (
                    <Weather data={weather} />
                ) : (
                    <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                        No cities found
                    </h1>
                )}
            </div>
        );
    }
}
