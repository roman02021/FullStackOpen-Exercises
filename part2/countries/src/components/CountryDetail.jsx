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
    const [imgUrl, setImgUrl] = useState("");
    useEffect(() => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${
                    import.meta.env.VITE_WEATHER_API_KEY
                }`
            )
            .then((res) => setWeather(res.data));
    }, []);
    return (
        <div>
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
            {weather && (
                <>
                    <h2>Weather in ${capital}</h2>
                    <p>temperature {weather.main.temp} Celsius</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    ></img>
                    <p>wind {weather.wind.speed} m/s</p>
                </>
            )}
        </div>
    );
};

export default CountryDetail;
