const api = {
  key: "7ad924b5466dc687fb4ebe1aa3849fcb",
  base: "https://api.openweathermap.org/data/2.5/",
};

const inputContext = document.querySelector("#search");
inputContext.addEventListener("keypress", setInput);
function setInput(event) {
  if (event.keyCode == 13) {
    getResult(inputContext.value);
  }
}

function getResult(inputValue) {
  fetch(`${api.base}weather?q=${inputValue}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
}
function displayResult(weather) {
  console.log(weather);
  let cityCountry = document.querySelector(".location");
  cityCountry.innerHTML = `<p>${weather.name},${weather.sys.country}</p>`;

  let temp = document.querySelector(".temprature-value");
  temp.innerHTML = `<p>${weather.main.temp.toFixed(1)} <span>°C</span></p>`;

  let weatherCondition = document.querySelector(".temprature-description p");
  weatherCondition.innerHTML = weather.weather[0].main;

  let tempratureMinMax = document.querySelector(".temprature-minmax p");
  tempratureMinMax.innerHTML = `${weather.main.temp_max.toFixed(
    1
  )}<span>°C</span>/${weather.main.temp_min.toFixed(1)}<span>°C</span>`;

  let weatherIcon = document.querySelector(".weather-icon img");
  weatherIcon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
}
