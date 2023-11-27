import React from "react";

const WeatherDataTable = ({ weatherData, units }) => {
  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };
  return (
    <div>
            <table>
          <tbody>
            {weatherData?.name && (
              <tr>
                <th>City:</th>
                <td>{weatherData.name}</td>
              </tr>
            )}

            {weatherData?.description && (
              <tr>
                <th>Description:</th>
                <td>{capitalizeFirstLetter(weatherData.description)}</td>
              </tr>
            )}
            {weatherData?.temperature && (
              <tr>
                <th>Temperature:</th>
                <td>
                  {units === "metric"
                    ? `${weatherData.temperature} C`
                    : `${((9 / 5) * weatherData.temperature + 32).toFixed(
                        2,
                      )} F`}
                </td>
              </tr>
            )}
            {weatherData?.pressure && (
              <tr>
                <th>Pressure:</th>
                <td>{weatherData.pressure} hPa</td>
              </tr>
            )}
            {weatherData?.wind && (
              <tr>
                <th>Wind Speed:</th>
                <td>
                  {units === "metric"
                    ? // Display in kilometers per hour for metric units
                      `${weatherData.wind.toFixed(2)} kmh`
                    : // Display in meters per second for imperial units
                      `${(weatherData.wind * 0.6213711922).toFixed(2)} mph`}
                </td>
              </tr>
            )}
            {weatherData?.humidity && (
              <tr>
                <th>Humidity:</th>
                <td>{weatherData.humidity} %</td>
              </tr>
            )}
            {weatherData?.coord && (
              <tr>
                <th>Coords:</th>
                <td>
                  {weatherData.coord.lat} Lat, {weatherData.coord.lon} Lon
                </td>
              </tr>
            )}
            {!weatherData?.exists && (
              <tr>
                <td colSpan="2">This city does not exist!</td>
              </tr>
            )}
          </tbody>
        </table>
    </div>
  )
};

export default WeatherDataTable;
