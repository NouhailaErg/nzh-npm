const http = require('http');

//API Key henerated from an website called OpenWeather API
const apiKey = '46f16526f1403ffe2f52fb812e7b0a66';

async function getWeather(city) {
  try {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const resp = await makeRequest(apiUrl);
    const weatherData = JSON.parse(resp);

    // Login the weather data
    console.log('Weather Data:', weatherData);


    const temperature = weatherData.main.temp;
    const description = weatherData.weather[0].description;

    return { temperature, description };
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    throw error;
  }
}

// Function to make HTTP requests
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (resp) => {
      let data = '';

    
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // RECEPTION.
      resp.on('end', () => {
        resolve(data);
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

module.exports = {
  getWeather,
};
