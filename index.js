

const apiKey = "bab14bb26b41df2fb4c5a2c45c806274";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const cityName = document.querySelector('.search-bar input');
const btn = document.querySelector('.b1');
const weatherIcon = document.querySelector('.weather-icon')


async function checkWeather(city){
const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
if(response.status == 404){
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
}
else{
    const data = await response.json();
    console.log(data);
    
    document.querySelector('.temp').innerHTML = (data.main.temp).toFixed(1) + '°C';
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
    
    if(data.weather[0].main == 'Clouds'){
     weatherIcon.src = 'images/clouds.png';
    }
    else if(data.weather[0].main == 'Rain'){
        weatherIcon.src ='images/rain.png';
    }
    else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = 'images/clear.png';
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src ='images/drizzle.png';
    }
    else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = 'images/mist.png';
    }
    else{
        weatherIcon.src = 'https://th.bing.com/th/id/OIP.5emTcA5DH_8IGuR4W9ZOUgHaHa?w=512&h=512&rs=1&pid=ImgDetMain';
    }
    document.querySelector('.error').style.display = 'none';
    document.querySelector('.weather').style.display = 'flex';
}
}


btn.addEventListener('click', ()=>{
    checkWeather(cityName.value)
})