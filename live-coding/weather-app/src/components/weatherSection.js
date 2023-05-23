import WeatherIcon from "./abstract/weatherIcon";
import WeatherTemp from "./abstract/weatherTemp";

export default function WeatherSection({data}) {

  return (
    <section>
      <h2>Weather section</h2>
      <p>Weather: {data.weather[0].main}</p>
      <p>Temperature: <WeatherTemp temp={data.main.temp} /></p>
      <WeatherIcon id={data.weather[0].icon} />
    </section>
  )
}