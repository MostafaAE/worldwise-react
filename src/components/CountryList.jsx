import CountryItem from './CountryItem';
import styles from './CountryList.module.css';
import Message from './Message';
import Spinner from './Spinner';

function getUniqueCountries(cities) {
  const uniqueCountries = new Set();
  return cities
    .filter(city => {
      if (uniqueCountries.has(city.country)) return false;

      uniqueCountries.add(city.country);
      return true;
    })
    .map(city => {
      return { country: city.country, emoji: city.emoji };
    });
}

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message
        message={'Add your first city by clicking on a city on the map'}
      />
    );

  const countries = getUniqueCountries(cities);

  return (
    <ul className={styles.countryList}>
      {countries.map(country => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
