export function processWeather(raw) {
  const current = raw?.currentConditions;     // مرة واحدة بدل التكرار

  return {
    location: raw?.resolvedAddress ?? "Unknown place",
    temperature: current?.temp ?? null,
    feelsLike: current?.feelslike ?? null,
    conditions: current?.conditions ?? "",
    icon: current?.icon ?? "",
    humidity: current?.humidity ?? null,
    windSpeed: current?.windspeed ?? null,
  };
}