export default function WeatherTemp({temp}) {

  const celciusTemp = (Number.parseFloat(temp) - 273.15).toFixed(2); // 2 decimals
  return <label>{celciusTemp}&#176;</label>
}