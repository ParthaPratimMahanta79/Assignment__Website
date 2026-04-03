import { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const getWeather = async () => {
    if (!city) return;

    const apiKey = "13d5afc4aac9c9014e98cedcd3f10f45"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const result = await response.json();

      if (result.cod === 200) {
        setData(result);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
   

      <div className="weather-container">
        <h2>Weather Page</h2>

        <input
          type="text"
          placeholder="Enter city"
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={getWeather}>Search</button>

        {data && (
          <div className="weather-result">
            <h3>{data.name}</h3>
            <p>Temperature: {data.main.temp} °C</p>
            <p>Weather: {data.weather[0].description}</p>
            <p>Humidity: {data.main.humidity}%</p>
          </div>
        )}
      </div>

     
    </>
  );
}

export default Weather;