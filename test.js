const { getWeather } = require('./index.js');

const city = 'Rabat';

getWeather(city)
  .then(weatherData => {
    console.log(`Temperature: ${weatherData.temperature}°C`);
    console.log(`Description: ${weatherData.description}`);
  })
  .catch(error => {
    console.error('Error fetching weather data:', error.message);
  });
