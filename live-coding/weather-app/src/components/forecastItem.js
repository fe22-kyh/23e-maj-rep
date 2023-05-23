import TimeLabel from "./abstract/timeLabel";
import WeatherIcon from "./abstract/weatherIcon";
import WeatherTemp from "./abstract/weatherTemp";

export default function ForecastItem({iconId, temp, time}) {

  return (
    <li className="forecast-item">
      <WeatherIcon id={iconId} />
      <WeatherTemp temp={temp} />
      <TimeLabel content={time} />
    </li>
  )
}