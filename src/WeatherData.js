import { useState, useEffect } from "react";
import FetchGoogleMap from "./Components/FetchGoogleMap";
import WeatherSearch from "./Components/WeatherSearch";
import WeatherImages from "./Components/WeatherImages";
import WeatherDataTable from "./Components/WeatherDataTable";
import Units from "./Components/Units";

const API_KEY = "ecbf544d3ed7faa04df194def75c9c05";

const fetchWeatherData = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();
  return data;
};

const fetchWeatherCoords = async (lat, lon) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  const coordData = await response.json();
  return coordData;
};

const weatherData = {
  exists: true,
  coord: null,
  description: null,
  name: null,
  temperature: null,
  wind: null,
};

const parseWeatherData = (data) => {
  if (data === undefined) {
    weatherData.exists = false;
    return;
  }

  // coords
  if (data.coord) {
    weatherData.coord = data.coord;
  }

  // description
  if (data.weather[0].description) {
    weatherData.description = data.weather[0].description;
  }

  // weather main desc
  if (data.weather[0].main) {
    weatherData.main = data.weather[0].main;
  }

  // temperature
  if (data.main?.temp) {
    weatherData.temperature = data.main?.temp;
  }

  // pressure
  if (data.main?.pressure) {
    weatherData.pressure = data.main?.pressure;
  }

  // humidity
  if (data.main?.humidity) {
    weatherData.humidity = data.main?.humidity;
  }

  // wind speed
  if (data?.wind.speed) {
    weatherData.wind = data.wind.speed;
  }

  // name
  if (data?.name) {
    weatherData.name = data.name;
  }

  return weatherData;
};

const WeatherData = () => {
  const [isLoading, setLoading] = useState(false);
  const [searchedCity, setSearchedCity] = useState("Oradea");
  const [weatherData, setWeatherData] = useState(null);
  const [units, setUnits] = useState("metric");

  const onSearchInput = (e) => {
    setSearchedCity(e.target.value);
  };

  const onSearchClick = async () => {
    setLoading(true);
    setWeatherData(null);

    const data = await fetchWeatherData(searchedCity);

    if (data.cod !== 200) {
      setWeatherData({ error: "City not found" });
    } else {
      const parsedWeatherData = parseWeatherData(data);
      setWeatherData(parsedWeatherData);
    }
    setLoading(false);
  };

  useEffect(() => {
    onSearchClick();
  }, []);

  if (isLoading) {
    return <div>Is Loading...</div>;
  }

  const parseCoords = (e) => {
    const { name, value } = e.target;
    setWeatherData((prevData) => ({
      ...prevData,
      coord: {
        ...prevData?.coord,
        [name]: value,
      },
    }));
  };

  const searchCoords = async (lat, lon) => {
    setLoading(true);
    setWeatherData(null);

    if (lat && lon) {
      const data = await fetchWeatherCoords(lat, lon);
      if (data.cod !== 200) {
        console.error("There was an error while fetching");
      } else {
        const parsedWeatherDataCoords = parseWeatherData(data);
        setWeatherData(parsedWeatherDataCoords);
      }
    } else {
      console.error("One or both of the coordinates are missing");
    }
    setLoading(false);
  };

  const handleUnitsChange = (e) => {
    setUnits(e.target.value);
  };

  return (
    <div className="main-container">
      <div className="weather-container">
        <WeatherSearch
          weatherData={weatherData}
          searchedCity={searchedCity}
          onSearchInput={onSearchInput}
          onSearchClick={onSearchClick}
          parseCoords={parseCoords}
          searchCoords={searchCoords}
        />
        <FetchGoogleMap
          lat={weatherData?.coord?.lat}
          lon={weatherData?.coord?.lon}
        />
        <WeatherImages weatherData={weatherData} />
        <Units handleUnitsChange={handleUnitsChange} units={units} />
        <WeatherDataTable weatherData={weatherData} units={units} />
      </div>
    </div>
  );
};

export default WeatherData;
