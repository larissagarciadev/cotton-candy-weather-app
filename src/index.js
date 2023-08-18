function updateCityTemp(response) {
  let city = response.data.name;
  let temperature = Math.round(response.data.main.temp);

  document.querySelector(".city").textContent = city;
  document.querySelector(".current-temperature").textContent = temperature;
}

function searchCity(event) {
  event.preventDefault();

  let cityName = document.querySelector(".enter-city-input").value;
  let units = "metric";
  let apiKey = "2718952144ed077c12e7c160fb6fc351";
  let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndPoint}?q=${cityName}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(updateCityTemp);
}

document
  .querySelector("#enter-city-form")
  .addEventListener("submit", searchCity);

function updateFullDate() {
  const monthDateYearElements =
    document.getElementsByClassName("month-date-year");
  const date = new Date();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  Array.from(monthDateYearElements).forEach((element) => {
    element.textContent = `${month} ${date.getDate()}, ${year}`;
  });
}

updateFullDate();

function updateDayTime() {
  const dayTimeElements = document.getElementsByClassName("day-time");
  const date = new Date();
  const day = date.toLocaleString("en-US", { weekday: "long" });
  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  Array.from(dayTimeElements).forEach((element) => {
    element.textContent = `${day}, ${time}`;
  });
}

updateDayTime();
