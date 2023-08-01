// icons
import { RiCelsiusFill } from "react-icons/ri";

export default function Weather({ data }) {
    if (!data) return null;

    const tempInC = data.main.temp - 273.15;
    const feelsLikeInC = data.main.feels_like - 273.15;
    const tempMinInC = data.main.temp_min - 273.15;
    const tempMaxInC = data.main.temp_max - 273.15;

    return (
        <div className="absolute left-1/2 top-1/2 translate-x-[-50%] mt-[50px] translate-y-[-50%] p-4 w-[250px] xs:w-[300px] s:w-[430px] md:w-[600px] min-h-[400px] bg-white/30 backdrop-blur-[10px] rounded-2xl">
            <div className="flex flex-col gap-3 items-center">
                <div className="flex flex-col items-center">
                    <span className="flex items-center gap-2 text-gray-200">
                        Country:<span>{data.sys.country}</span>
                    </span>
                    <h1 className="text-5xl font-bold">{data.name}</h1>
                </div>
                <span>{data.weather[1]}</span>
                <h1 className="flex items-center gap-2 text-5xl font-bold">
                    {tempInC.toFixed(0)}
                    <RiCelsiusFill size={30} />
                </h1>

                <div className="flex flex-col justify-center items-center md:flex-row md:gap-[80px]">
                    <ul className="flex flex-col items-center gap-2 mt-6">
                        <h3>Temperture Details</h3>
                        <li className="flex items-center gap-3">
                            Feels Like:
                            <div className="flex items-center gap-1">
                                <span>{feelsLikeInC.toFixed(0)}</span>
                                <RiCelsiusFill size={20} />
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            Temp Min:
                            <div className="flex items-center gap-1">
                                <span>{tempMinInC.toFixed(0)}</span>
                                <RiCelsiusFill size={20} />
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            Temp Max:
                            <div className="flex items-center gap-1">
                                <span>{tempMaxInC.toFixed(0)}</span>
                                <RiCelsiusFill size={20} />
                            </div>
                        </li>
                    </ul>

                    <ul className="flex flex-col items-center gap-2 mt-6">
                        <h3>Weather Details</h3>
                        <li className="flex items-center gap-3">
                            Wind: <span>{data.wind.speed}km/h</span>
                        </li>
                        <li className="flex items-center gap-3">
                            Clouds: <span>{data.clouds.all}</span>
                        </li>
                        <li className="flex items-center gap-3">
                            Humidity: <span>{data.main.humidity}</span>
                        </li>
                        <li className="flex items-center gap-3">
                            Pressure: <span>{data.main.pressure}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
