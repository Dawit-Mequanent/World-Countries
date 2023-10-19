import React, { useState, useEffect } from 'react';

const url = 'https://restcountries.com/v2/all';

const Worldcount = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchWorldCountryData = async () => {
      try {
        const response = await fetch(url);
        const countries = await response.json();
        setCountry(countries);
        console.log(countries);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchWorldCountryData();
  }, []);

  return (
    <>
      {country.map((country) => {
        const { name, flags, capital, population, languages } = country;
        const flag = flags.png;

        return (
          <article key={name}>
            World Country Data
            <div>
              <img src={flag} alt={name} />
              <h3>{name}</h3>
              <h4>Capital: <span>{capital}</span></h4>
              <h4>Population: <span>{population}</span></h4>
              <h4>Language: <span>{languages[0].name}</span></h4>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Worldcount;