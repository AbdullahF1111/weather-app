import { API_KEY } from "./config.js";

export async function getWeather(location) {
  const url =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
    `${encodeURIComponent(location)}?unitGroup=metric&contentType=json&key=${API_KEY}`;
    
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed (HTTP ${response.status})`);
  }
  

  return response.json();
}
//