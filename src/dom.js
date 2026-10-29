function formatTemp(celsius, unit) {
  if (celsius === null) return "—";
  const value = unit === "F" ? (celsius * 9) / 5 + 32 : celsius;
  return `${Math.round(value)}°${unit}`;      // التقريب للعرض فقط
}

export function renderWeather(weather, unit) {
  const container = document.getElementById("weather");
  container.textContent = "";

  const city = document.createElement("h2");
  city.textContent = weather.location;

  const temp = document.createElement("p");
  temp.textContent = formatTemp(weather.temperature, unit);

  const condition = document.createElement("p");
  condition.textContent = weather.conditions;

  const feelsLike = document.createElement("p");
  feelsLike.textContent = `Feels like ${formatTemp(weather.feelsLike, unit)}`;

  const humidity = document.createElement("p");
  humidity.textContent = `Humidity ${weather.humidity}%`;

  const wind = document.createElement("p");
  wind.textContent = `Wind ${weather.windSpeed}`;       // أضف الوحدة بعد أن تتحقق منها

  container.append(city, temp, condition, feelsLike, humidity, wind);

  container.dataset.weather = weather.icon;
}