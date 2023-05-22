export const cE = (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);

export const getWeather = async (city) => {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=6f50c849ff554f93baa130646232205&q=${city}&aqi=yes`
  );
  const weatherData = await res.json();

  return weatherData;
};

export const createWeatherWidget = (cityData) => {
  const wrapperEl = qS(".weatherWidget");
  const mainDataEl = cE("div");
  const weatherIconEl = cE("div");
  const weatherIconImgEl = cE("img");
  const tempEl = cE("h2");
  const weatherTypeEl = cE("h3");
  const barEl = cE("hr");
  const locationDataEl = cE("div");
  const cityEl = cE("p");
  const dateEl = cE("p");

  mainDataEl.className = "mainData";
  weatherIconEl.className = "weatherIcon";
  weatherIconImgEl.src = cityData.current.condition.icon;
  weatherIconImgEl.alt = cityData.current.condition.text;
  tempEl.textContent = cityData.current.temp_c + "°C";
  weatherTypeEl.className = "weatherType";
  weatherTypeEl.textContent = cityData.current.condition.text;
  barEl.className = "hzBar";
  locationDataEl.className = "locationData";
  cityEl.className = "city";
  cityEl.textContent =
    "📍 " +
    cityData.location.name +
    `, ${cityData.location.region}` +
    `, ${cityData.location.country}`;
  dateEl.className = "date";
  dateEl.textContent = "📅 " + cityData.location.localtime;

  weatherIconEl.appendChild(weatherIconImgEl);
  mainDataEl.append(weatherIconEl, tempEl, weatherTypeEl);
  locationDataEl.append(cityEl, dateEl);

  wrapperEl.append(mainDataEl, barEl, locationDataEl);

  return wrapperEl;
};
