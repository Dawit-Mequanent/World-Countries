import React, { useState, useEffect } from 'react';

const url = 'https://restcountries.com/v2/all';

const Worldcount = () => {
  const [country, setCountry] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCountries = country.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className='table'>
      <div>
        <input
          type="text"
          placeholder="Enter a country name here"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <table className="world-table">
        <thead>
          <tr>
            <th className="column-divider">Flag</th>
            <th className="column-divider">Country</th>
            <th className="column-divider">Capital</th>
            <th className="column-divider">Population</th>
            <th className="column-divider">Language</th>
          </tr>
        </thead>
        <tbody>
          {filteredCountries.map((country, index) => {
            const { name, flags, capital, population, languages } = country;
            const flag = flags.png;

            return (
              <React.Fragment key={name}>
                <tr>
                  <td className="column-divider"><img src={flag} alt={name} /></td>
                  <td className="column-divider">{name}</td>
                  <td className="column-divider">{capital}</td>
                  <td className="column-divider">{population}</td>
                  <td className="column-divider">{languages[0].name}</td>
                </tr>
                {index !== filteredCountries.length - 1 && <tr><td colSpan="5" className="row-divider"></td></tr>}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Worldcount;