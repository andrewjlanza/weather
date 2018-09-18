const addWeatherAttributesToPage = weatherAttributes => {
  // use our friend forEach to go through all the 'results'
  weatherAttributes.forEach(weatherAttributes => {
    // get the people UL dom object
    let weatherAttributes = document.querySelector(".search");

    // make an LI
    let weatherLI = document.createElement("li");
  });
};

const clickOnSearch = () => {
  let searchInputValue = document.querySelector(".search");
  let searchValue = searchInputValue.value;

  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=imperial&appid=7fdd86ea7f948ed836a6a9ef49752dba`
  )
    .then(response => {
      return response.json();
    })
    .then(weatherAttributes => {
      let weatherOnPage = document.querySelector(".weather-display");

      let weatherLiName = document.createElement("li");
      weatherLiName.textContent = weatherAttributes.name;
      weatherOnPage.appendChild(weatherLiName);
      console.log(weatherAttributes.name);

      let weatherLiTemp = document.createElement("li");
      weatherLiTemp.textContent = weatherAttributes.main.temp;
      weatherOnPage.appendChild(weatherLiTemp);
      console.log(weatherAttributes.main.temp);

      weatherAttributes.weather.forEach(weatherCondition => {
        let weatherLi = document.createElement("li");
        weatherLi.textContent = weatherCondition.main;
        weatherOnPage.appendChild(weatherLi);
        console.log(weatherCondition.main);
      });
    })

    // IOU for the response
    .then(response => {
      return response.json();
    })
    .then(weatherAttributes => {
      console.log(weatherAttributes.name);
      console.log(weatherAttributes.main.temp);
      console.log(weatherAttributes.main.humidity);
    });
};

const main = () => {
  //create a search bar w/ an input

  // make a button
  // button click listener
  //get name of city from input box
  // display
  let button = document.querySelector(".goButton");
  button.addEventListener("click", clickOnSearch);
};

document.addEventListener("DOMContentLoaded", main);
