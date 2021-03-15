//Animación entrada de app

const tl = gsap.timeline({ defaults: 'power1.out' });

tl.to('.text', { y: '0%', duration: 2, stagger: 1.5 });



const api = {
    key: '1dce9dc1dfba699c6da05c18c3e95300',
    baseurl:'http://api.openweathermap.org/data/2.5/'
}

const searchbox = document.querySelector('.search-city');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
        opacityClaim();
     
        
    }
}

//Añadir clase Opacity al claim inicial, y se la quitamos al icono y weather info.

    function opacityClaim(){
        let claim = document.querySelector('.claim-info');
        claim.classList.add('opacity');
    
        let icon = document.querySelector('.weather-icon'); 
        icon.classList.remove('opacity');
    
        let weatherInfo = document.querySelector('.weather-info');
        weatherInfo.classList.remove('opacity');
    }


function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&lang=es&units=metric&appid=${api.key}`)
        .then(weather => {
            return weather.json();

        }).then(displayResults);
}

function displayResults(weather) {
    console.log(weather);

    let icon = document.querySelector('.weather-icon'); 
    icon.innerHTML = `<img  class="weather-icon__element" src="./icons/${weather.weather[0].icon}.png" />`

    let city = document.querySelector('.main-info__city');
    city.innerHTML = `${weather.name}`;

    let temp = document.querySelector('.main-info__temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°</span>`;

    let weather_description = document.querySelector('.main-info__description');
    weather_description.innerHTML = weather.weather[0].main;

    let humidity = document.querySelector('.humidity__value');
    humidity.innerHTML = `${weather.main.humidity}<span>%</span>`;

    let maxMinValue = document.querySelector('.max-min__value');
    maxMinValue.innerHTML = `${Math.round(weather.main.temp_min)}<span>° / </span> ${Math.round(weather.main.temp_max)}<span>°</span>`
        
    let wind = document.querySelector('.wind__value');
     wind.innerHTML = `${weather.wind.speed}<span>m/s</span>`
        
        
}

