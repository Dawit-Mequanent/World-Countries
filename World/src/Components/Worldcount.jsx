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
    <section className='table'>
      <table>
        <thead>
          <tr>
            <th className="column-divider"><div className="header-line"></div>Flag</th>
            <th className="column-divider"><div className="header-line"></div>Country</th>

            

            <th className="column-divider"><div className="header-line"></div>Capital</th>
            <th className="column-divider"><div className="header-line"></div>Population</th>
            <th className="column-divider"><div className="header-line"></div>Language</th>
          </tr>
          <tr><div className="header-line"></div></tr>
          
        </thead>
        <tbody >
          {country.map((country, index) => {
            const { name, flags, capital, population, languages } = country;
            const flag = flags.png;

            return (
              <React.Fragment key={name}>
                <tr >
                  <td className="column-divider"><img src={flag} alt={name} /></td>
                  <td className="column-divider">{name}</td>
                  <td className="column-divider">{capital}</td>
                  <td className="column-divider">{population}</td>
                  <td className="column-divider">{languages[0].name}</td>
                </tr>
                {index !== country.length - 1 && <tr><td colSpan="5" className="row-divider"></td></tr>}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Worldcount;