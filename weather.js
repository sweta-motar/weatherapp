document.getElementById('location-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const locationInput = document.getElementById('location-input').value;

  // Call function to fetch weather data
  getWeather(locationInput);
});

async function getWeather(location) {
  const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

  try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Display weather data
      displayWeather(data);
  } catch (error) {
      console.log('Error fetching weather data:', error);
      alert('Error fetching weather data. Please try again.');
  }
}

function displayWeather(data) {
  const weatherOutput = document.getElementById('weather-output');
  weatherOutput.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Feels like: ${data.main.feels_like}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
  `;
}