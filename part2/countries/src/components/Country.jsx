import { useState } from "react";
import CountryDetail from "./CountryDetail";

const Country = ({ country }) => {
    const [showDetail, setShowDetail] = useState(false);
    return (
        <div>
            <p>
                {country.name.common}
                <button onClick={() => setShowDetail(!showDetail)}>
                    {showDetail ? "hide" : "show"}
                </button>
            </p>
            {showDetail && (
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
            )}
        </div>
    );
};

export default Country;
