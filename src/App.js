import React from "react";
import "./App.css";


export default function App() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Saturday 10:00",
    description: "Clear Sky",
    humidity: 45,
    wind: 4,
    imgUrl: "https://openweathermap.org/img/wn/04n@2x.png",
    feelsLike: -2
  };

  return (
    <div className="box">
      <div className="Weather">
        <div>
          <img src={weatherData.imgUrl} alt="clear" className="float-left" />
        </div>
        <div>
          <form className="mt-5">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="enter city here"
                  className="form-control"
                  autofocus="on"
                />
              </div>

              <div className="col-3">
                <input
                  type="submit"
                  value="search"
                  className="form-control btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="weatherForecast row">
          <div className="col-6">
            <p className="city">
              <h1>{weatherData.city}</h1>
              <h2>
                <span></span>
                <span className="units">
                  {weatherData.temperature}{" "}
                  <a href="/" className="temp active">
                    °C
                  </a>{" "}
                  |
                  <a className="temp" href="/">
                    °F
                  </a>{" "}
                </span>
              </h2>
              <h3> {weatherData.date} </h3>
            </p>
          </div>

          <div className="col-6">
            <p className="information">
              <h4>Feels like: {weatherData.feelsLike} °C</h4>
              <h5>Humidity: {weatherData.humidity} %</h5>
              <h6 className="windy"> Wind:{weatherData.wind} km/h</h6>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
