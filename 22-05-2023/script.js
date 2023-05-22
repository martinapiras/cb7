import { cE, qS, getWeather, createWeatherWidget } from "./fn.js";

export const weatherEl = qS(".weather");
export const searchEl = cE("div");
export const searchbarEl = cE("input");
export const searchBtnEl = cE("button");
export const weatherWidgetEl = cE("div");

searchEl.className = "search";
searchbarEl.className = "searchbar";
searchbarEl.setAttribute("type", "search");
searchbarEl.setAttribute("placeholder", "Enter your city");
searchBtnEl.className = "searchButton";
searchBtnEl.textContent = "🔍";
weatherWidgetEl.className = "weatherWidget";

searchEl.append(searchbarEl, searchBtnEl);
weatherEl.append(searchEl, weatherWidgetEl);

searchBtnEl.addEventListener("click", () => {
  let cityInput = searchbarEl.value;
  getWeather(cityInput).then((weatherData) => {
    weatherWidgetEl.style.display = "block";
    weatherWidgetEl.textContent = "";
    weatherEl.appendChild(createWeatherWidget(weatherData));
  });
});
