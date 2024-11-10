import axios from "axios";
import React, { useState } from "react"

const Weather = () => {

    // const [city, setCity] = useState();
    const [weatherData, setWeatherData] = useState();

    // const handleCityChange = (e) => {
    //     setCity(e.target.value);
    // }

    const fetchWeather = async () => {
        try {
            const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
            // console.log(response.data);
            setWeatherData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleClick = () => {
        fetchWeather();
    }

    return (
        <>
            <div>
                {/* <input type="text" placeholder="Enter City Name" value={city} onChange={handleCityChange} /> */}
                <button onClick={handleClick}>Get weather data</button>
            </div>
            <div>
                {weatherData &&
                    <>
                        <h4>Latiitude :- {weatherData.latitude}</h4>
                        <h4>Longitude :- {weatherData.longitude}</h4>
                    </>
                }
            </div>
        </>
    )
}

export default Weather