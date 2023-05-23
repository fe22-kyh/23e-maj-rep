import ForecastItem from "./forecastItem";

export default function ForecastSection({data}) {

  const forecastItems = data.map(entry => {
    return <ForecastItem temp={entry.main.temp} time={entry.dt} iconId={entry.weather[0].icon} />
  });
  
  return (
    <section>
      <h2>Hourly forecast</h2>
      <ul>
        { forecastItems }
      </ul>
    </section>
  )
}