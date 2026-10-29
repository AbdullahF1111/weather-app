import { getWeather } from "./api.js";
import { processWeather } from "./data.js";
import { renderWeather } from "./dom.js";
const errorEl=document.getElementById("Error")
const form = document.getElementById("location-search");
const search = document.getElementById("location");
const metricSwitch = document.getElementById("unit-toggle");
const loadingSpinner = document.getElementById("loading");
const searchBtn = document.getElementById("btn");

let data = null; // آخر كائن جاء من processWeather
let unit = "C";
// الاستماع لحدث الـ submit الخاص بالفورم بالكامل
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const cityName = search.value.trim();
  if (!cityName) return;

  searchBtn.disabled = true;       // قبل try
  loadingSpinner.hidden = false;
  errorEl.hidden = true;

  try {
    const rawData = await getWeather(cityName);
    data = processWeather(rawData);
    renderWeather(data, unit);
  } catch (error) {
    console.error("Error fetching weather:", error);
    errorEl.textContent = "City not found or network error. Please try again.";
    errorEl.hidden = false;
  } finally {
    loadingSpinner.hidden = true;  // يعمل دائماً
    searchBtn.disabled = false;
  }
});

metricSwitch.addEventListener("click", () => {
  unit = unit == "C" ? "F" : "C";
  metricSwitch.textContent = unit == "C" ? "Switch to °F" : "Switch to °C";
  renderWeather(data, unit);
});
