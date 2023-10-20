import React, { useState, useEffect } from 'react';

const url = 'https://restcountries.com/v2/all';

const Worldcount = () => {
  const [country, setCountry] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isInputUndefined, setIsInputUndefined] = useState(false);

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
    setIsInputUndefined(false); // Reset the input undefined flag
  };

  const handleSearchClick = () => {
    // Perform search logic here
    // You can use the searchTerm state to filter the countries
  };

  const formatPopulation = (population) => {
    return population.toLocaleString();
  };

  const filteredCountries = country.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderTableRows = () => {
    if (filteredCountries.length === 0) {
      return (
        <tr>
          <td colSpan="5" className="no-results">
            No matching countries found with your input!!
          </td>
        </tr>
      );
    }

    return filteredCountries.map((country, index) => {
      const { name, flags, capital, population, languages } = country;
      const flag = flags.png;

      return (
        <React.Fragment key={name}>
          <tr>
            <td className="column-divider">
              <img src={flag} alt={name} />
            </td>
            <td className="column-divider">
              <h3>{name}</h3>
            </td>
            <td className="column-divider">
              <h4>{capital}</h4>
            </td>
            <td className="column-divider">
              <h4>{formatPopulation(population)}</h4>
            </td>
            <td className="column-divider">
              <h4>{languages[0].name}</h4>
            </td>
          </tr>
          {index !== filteredCountries.length - 1 && (
            <tr>
              <td colSpan="5" className="row-divider"></td>
            </tr>
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <section className='table'>
      <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          placeholder="Enter a country name here"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="searchButton" onClick={handleSearchClick}>
          <i className="material-icons">search</i>
        </button>
      </div>
      <div className="table-container">
        <table className="world-table">
          <thead>
            <tr>
              <th className="column-divider">
                <h2>Flag</h2>
              </th>
              <th className="column-divider">
                <h2>Country</h2>
              </th>
              <th className="column-divider">
                <h2>Capital</h2>
              </th>
              <th className="column-divider">
                <h2>Population</h2>
              </th>
              <th className="column-divider">
                <h2>Language</h2>
              </th>
            </tr>
          </thead>
          <tbody>{renderTableRows()}</tbody>
        </table>
      </div>
    </section>
  );
};

export default Worldcount;