


const apiKey="f8b08d10845c0223cd5170471658b1be";


const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const btn=document.getElementById('btn');

btn.addEventListener('click',()=>{

const city=document.querySelector(".search input");
if(city.value===""){
    alert("Please enter a city name");
}else{
    checkWeather(city.value);
}

});

async function checkWeather(city){

    //api request

    const response=await fetch(url+city+"&appid="+apiKey);

    //check status code

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        
    }else{

        document.querySelector(".error").style.display="none";

        const data=await response.json();
        console.log(data);
        document.querySelector(".weather").style.display='block';
        document.querySelector(".main").innerHTML=data.weather[0].main;
        document.querySelector(".temp").innerHTML=data.main.temp;
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".humidity").innerHTML=`${data.main.temp}%`;
        document.querySelector(".wind").innerHTML=`${data.wind.speed}Km/Hr`;





        const img=document.getElementById('image');
        const condition=data.weather[0].main;
        if(condition=='Clouds'){
            img.src="img/clouds.png";
        }else if(condition=='Haze'){
            img.src='img/clouds.png';
        }
        else if(condition=="Drizzle"){
            img.src="img/drizzle.png"
        }
        else if(condition=='Mist'){
            img.src="img/mis.png";
        }else{
            img.src="img/clear.png";
        }


        

    }

}