const url =
  "https://api.open-meteo.com/v1/forecast" +
  "?latitude=20.45" +
  "&longitude=99.88" +
  "&current=temperature_2m,relative_humidity_2m,weather_code" +
  "&timezone=Asia%2FYangon";

// Fetch weather
function getWeatherDescription(code) {
  if (code === 0) return "Clear Sky";
  if (code <= 3) return "Partly Cloudy";
  if (code === 45 || code === 48) return "Foggy";
  if (code <= 57) return "Drizzle";
  if (code <= 67) return "Rainy";
  if (code <= 77) return "Snowy";
  if (code <= 82) return "Rain Showers";
  if (code <= 86) return "Snow Showers";
  if (code <= 99) return "Thunderstorm";

  return "Unknown";
}

function updateWeather() {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Weather data unavailable");
      }
      return response.json();
    })
    .then(data => {
      const current = data.current;

      document.getElementById("temperature").textContent =
        `${current.temperature_2m}°C`;

      document.getElementById("weather").textContent =
        getWeatherDescription(current.weather_code);
    })
    .catch(error => {
      console.error("Weather error:", error);
    });
}

// Fetch immediately
updateWeather();

// Refresh every 10 minutes
setInterval(updateWeather, 600000);

// Display local time
const time = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Yangon",
  hour: "2-digit",
  minute: "2-digit",
  hour12: true
});

function updateTime() {
  document.getElementById("local-time").textContent =
    time.format(new Date()).toUpperCase();
}

updateTime();
setInterval(updateTime, 60000);