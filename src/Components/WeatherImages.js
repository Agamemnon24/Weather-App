import React from "react";

const WeatherImages = ({ weatherData }) => {
  return (
    <div>
      {weatherData?.main === "Clouds" && (
        <center>
          <img
            src="https://i.ibb.co/6Nr4Pm3/cloudy.png"
            height="140px"
            width="140px"
          />
        </center>
      )}
      {weatherData?.main === "Rain" && (
        <center>
          <img
            src="https://i.ibb.co/wKjznry/rain.png"
            height="140px"
            width="140px"
          />
        </center>
      )}
      {weatherData?.main === "Clear" && (
        <center>
          <img
            src="https://i.ibb.co/Lk1pSNh/clear-sky.png"
            height="140px"
            width="140px"
          />
        </center>
      )}
      {weatherData?.main === "Mist" && (
        <center>
          <img
            src="https://i.ibb.co/Tv9pm53/fog.png"
            height="140px"
            width="140px"
          />
        </center>
      )}
      {weatherData?.main === "Snow" && (
        <center>
          <img
            src="https://i.ibb.co/fNsM76s/snow.png"
            height="140px"
            width="140px"
          />
        </center>
      )}
      {weatherData?.main === "Fog" && (
        <center>
          <img
            src="https://i.ibb.co/Tv9pm53/fog.png"
            height="140px"
            width="140px"
          />
        </center>
      )}
    </div>
  );
};

export default WeatherImages;
