const ApiKey="335d27e897aebf2b90816be6fcd4f7d9";

async function fetchData(city){
const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${ApiKey}`);
console.log(response);
let data = await response.json();
console.log(data.temp);
console.log(data.name);

updateweatherUi(data);

}
fetchData();


let cityElment=document.querySelector('.city');
let temperatyre= document.querySelector('.temp');
let windspeed=document.querySelector('.wind-speed');
let humidity=document.querySelector('.humidity');
let visibility=document.querySelector('visibility-distance');
let description_text=document.querySelector('.description-text');
let date =document.querySelector('.date');

function updateweatherUi(value){
    cityElment.textContent=value.name;
    temperatyre.innerHTML=`${Math.round(value.main.temp)}°`;
    windspeed.innerHTML=`${value.wind.speed}Km/H`;
    humidity.innerHTML=`${value.main.humidity}%`;
    visibility.innerHTML=`${value.visibility/1000}KM`;
    description_text.innerHTML=value.weather[0].description; 
    const currentdate = new Date();
    date.innerHTML=currentdate.toDateString();
}
const fromelemnt = document.querySelector('.search-from');
const inputelement =document.querySelector('.city-input');
fromelemnt.addEventListener('submit', (event)=>{
    event.preventDefault();
    let city=inputelement.value;
    if(city!==' '){
        fetchData(city);
        inputelement.vale =" ";
    }
});