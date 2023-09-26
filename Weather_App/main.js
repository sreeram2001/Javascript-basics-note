
const api_key = `Enter API KEY`;
const search_button = document.querySelector("#search");
const city_name = document.querySelector("#city-name");
const form = document.querySelector("form");
const temperature = document.querySelector("#temperature");

//we implement a simple submit button from input field
form.addEventListener("submit",function(event) {
        
        event.preventDefault();
        getWeather(search_button.value)
    }
)

//we use async and await as api promise will be in pending stage
const getWeather = async(city) => {
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    const response = await fetch(url);
    const responseData = await response.json()

    //for Not found 404 status code
    if(responseData.cod == 404)
    {
        alert("Enter Proper Data")
        city_name.innerHTML = `City ${search_button.value} Not Found`;
    }
    else
    {
        console.log(responseData)
        city_name.innerHTML = `${responseData.name} <br> ${responseData.weather[0].main}`;
        temperature.innerHTML = `<img src="https://openweathermap.org/img/wn/${responseData.weather[0].icon}@2x.png" alt="">
        <br> ${responseData.main.temp} `
    }


}
