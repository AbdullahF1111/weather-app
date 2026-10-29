# 🌤️ Weather App

A simple, responsive weather application. Search for any city and instantly see its current temperature, conditions, "feels like" temperature, humidity and wind speed. The card's look changes automatically to match the weather.

## 🔗 Live Demo

**https://AbdullahF1111.github.io/weather-app/**

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Toggle between Celsius (°C) and Fahrenheit (°F)
- 🎨 Dynamic card styling based on the weather (sunny, rainy, cloudy, snowy, ...)
- ⏳ Loading spinner while data is being fetched
- 🧩 Clean, modular code (API / data processing / DOM rendering are separated)

## 🛠️ Tech Stack

- HTML5
- CSS3 (glassmorphism, gradients, CSS animations)
- JavaScript (ES Modules, `async/await`, `fetch`)
- A public weather API (see `src/api.js`)

## 📁 Project Structure

```
.
├── index.html
└── src
    ├── api.js        # Fetches raw data from the weather API
    ├── data.js       # Processes raw data into a clean object
    ├── dom.js        # Renders the weather card
    ├── index.js      # App entry point: events and state
    └── style.css     # Styling
```

## 🚀 Run Locally

Because the project uses ES Modules, it must be served over HTTP (opening `index.html` directly from the file system will not work).

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
npx serve .
```

Or simply use the **Live Server** extension in VS Code.

## 🔑 API Key

1. Create a free account on your weather API provider.
2. Put your API key in `src/api.js`.

> ⚠️ This is a front-end only project, so the API key is visible to anyone who opens the browser dev tools. Use a free-tier key and restrict it (by domain, if your provider supports it).

## 🌐 Deploy to GitHub Pages

1. Push the project to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**, select `main` and `/ (root)`, then click **Save**.
4. After a minute, your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`.

## 🗺️ Roadmap

- [ ] Show a friendly error message for unknown cities / network errors
- [ ] Convert wind speed together with the temperature unit
- [ ] Remember the last searched city and preferred unit
- [ ] Weather icons and a multi-day forecast
- [ ] Use the browser's geolocation on first load

## 📄 License

This project is open source and available under the [MIT License](LICENSE).