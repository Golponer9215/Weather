 async function getWeather() {
    // Get the name you typed in
    const city = document.getElementById('city').value;

    // This is your special key to get the weather (like a secret password)
    const apiKey = '42ef5c5b16905a9e3c2527995eda378c';

    // Make a URL to ask for the weather in your city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
      // Send the request and wait for the weather to come back
      const response = await fetch(url);

      // If the city is not found, show an error
      if (!response.ok) {
        throw new Error("City not found");
      }

      // Convert the answer to a readable format
      const data = await response.json();

      // Show the weather on the screen
      const weatherInfo = `
        <h2 class="text-xl font-bold mt-4">Weather in ${data.name}</h2>
        <p class="mt-2"><strong>🌡️ Temp:</strong> ${data.main.temp}°C</p>
        <p><strong> Condition:</strong> ${data.weather[0].main} (${data.weather[0].description})</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong> Wind:</strong> ${data.wind.speed} km/h</p>
      `;
      document.getElementById('weather').innerHTML = weatherInfo;

    } catch (error) {
      // If something goes wrong, show the message in red
      document.getElementById('weather').innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
  }