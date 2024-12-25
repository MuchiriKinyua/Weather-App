const apiKey = "d3361a3940df7b07c93e9a9badb9eee1";
const apiUrl = "https://pro.openweathermap.org/data/2.5/forecast/climate?units=metric&q=nairobi";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}

checkWeather();
