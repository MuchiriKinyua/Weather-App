const apiKey = "d3361a3940df7b07c93e9a9badb9eee1";
const apiUrl = "https://pro.openweathermap.org/data/2.5/forecast/climate?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " knots";

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


