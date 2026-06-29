import { useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try{
     console.log(city);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4095ce77e85a742165b14f46df09e6b1&units=metric`
      );

      setWeather(response.data);
    } catch (error) {
      console.log(error);
      console.log(error.response?.data)
      ;
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Search</button>

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;