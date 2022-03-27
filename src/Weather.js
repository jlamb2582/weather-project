import React, {useState} from "react";
import "./Weather.css";
import "./index.css";
import "./App.css";
import axios from "axios";


export default function Weather () {
const [ready, setReady] = useState(false);
const [temperature, setTemperature] = useState(null);
function handleResponse(response) {
setTemperature(response.data.main.temp);
setReady(true);
}

if (ready) {
    return ( 
    <div className ="Weather">
    <form>
    <div className ="row">
        <div className ="col-9">
    <input type ="search" placeholder ="Search city" className ="form-control" autoFocus ="on"/>
    </div>
    <div className ="col-3">
    <input type ="submit" value = "Search" className = "btn btn-primary w-100"/>
    </div>
    </div>
    </form>
    <h1>New York</h1> 
    <ul>
    <li>Wednesday 7:00</li>
    <li>Mostly Cloudy</li>
    </ul>
    <div className = "row mt-3">
        <div className ="col-6">
            <div className = "clearfix">
        <img src ="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt ="Mostly Cloudy" />
     
      <span className ="temperature">
       {Math.round(temperature)}
       </span>
       <span className ="unit">°C </span>
    
       </div>
        </div>
        <div className ="col-6">
         <ul>
         <li>Precipitation: 15%</li>
         <li>Humidity: 72%</li>
         <li>Wind: 13 km/h</li>
         </ul>
        </div>
    </div>
    </div>
    );
} else {
    const apiKey = "52497c6b69bb4648be92f1f0807d9c4d";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
}
}
