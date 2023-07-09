import { useState, useEffect } from "react";
import axios from "axios";
import CountryDetail from "./components/CountryDetail";
import Country from "./components/Country";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [allCountries, setAllCountries] = useState([]);

    const filteredCountries = allCountries.filter((country) => {
        if (searchTerm) {
            return country.name.common
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
        } else {
            return country;
        }
    });

    console.log(filteredCountries);

    // const [filteredCountries, setFilteredCountries] = useState([]);
    // console.log(countries);
    // useEffect(() => {
    //     if (searchTerm.length > 0) {
    //         axios
    //             .get(
    //                 `https://studies.cs.helsinki.fi/restcountries/api/name/${searchTerm}`
    //             )
    //             .then((res) => setCountries(res.data));
    //     }
    // }, [searchTerm]);

    useEffect(() => {
        axios
            .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
            .then((res) => setAllCountries(res.data));
    }, []);

    return (
        <>
            <label>
                find countries
                <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                ></input>
            </label>
            {filteredCountries.length === 1 &&
                filteredCountries.map((country) => (
                    <CountryDetail
                        capital={country.capital.at(0)}
                        name={country.name.common}
                        key={country.name.common}
                        area={country.area}
                        alt={country.flags.alt}
                        flag={country.flags.png}
                        languages={country.languages}
                        lat={country.latlng[0]}
                        lon={country.latlng[1]}
                    />
                ))}
            {filteredCountries.length <= 10 &&
                filteredCountries.length > 1 &&
                filteredCountries.map((country) => (
                    <Country key={country.name.common} country={country} />
                ))}
            {searchTerm.length > 0 && filteredCountries.length > 10 && (
                <p>Too many matches, specify another filter</p>
            )}
        </>
    );
}

export default App;
