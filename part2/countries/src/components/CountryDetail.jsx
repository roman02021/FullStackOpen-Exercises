import { useEffect, useState } from "react";
import axios from "axios";

const CountryDetail = ({
    name,
    capital,
    area,
    languages,
    flag,
    alt,
    lat,
    lon,
}) => {
    const [weather, setWeather] = useState();
    useEffect(() => {
        axios
            .get(
                `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${
                    import.meta.env.VITE_WEATHER_API_KEY
                }`
            )
            .then((res) => setWeather(res.data));
    }, []);
    return (
        <div>
            {weather}
            <h1>{name}</h1>
            <p>capital {capital}</p>
            <p>area {area}</p>
            <h3>languages</h3>
            <ul>
                {Object.keys(languages).map((lang) => (
                    <li key={lang}>{languages[lang]}</li>
                ))}
            </ul>
            <img src={flag} alt={alt} />
        </div>
    );
};

export default CountryDetail;
