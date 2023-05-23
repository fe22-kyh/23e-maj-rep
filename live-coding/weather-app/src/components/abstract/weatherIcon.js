export default function WeatherIcon({id}) {
  const iconUrl = `https://openweathermap.org/img/wn/${id}@2x.png`;
  return <img src={iconUrl} alt="icon of current weather"/>
}