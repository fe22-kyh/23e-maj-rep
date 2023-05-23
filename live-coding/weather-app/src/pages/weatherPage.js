import SearchField from "../components/abstract/searchField.js"
import ForecastSection from "../components/forecastSection.js"
import HistorySection from "../components/historySection.js"
import WeatherSection from "../components/weatherSection.js"

import useWeatherApi from "../hooks/weatherHook.js"

import { useState } from 'react';

export default function WeatherPage() {
  const [location, setLocation] = useState('');
  const { isLoading, hasError, data } = useWeatherApi(location);

  const initialRender = !isLoading && data.current.length === 0 && data.forecast.length === 0;

  return (
    <div className="weather-page">
      <HistorySection lastLocation={isLoading ? location : ''} />
      <SearchField placeholder="Search city weather..." onChange={event => setLocation(event.target.value)} />
      {((isLoading || !initialRender) && <p>Loading...</p>) || <WeatherSection data={data.current} />}
      {((isLoading || !initialRender) && <p>Loading...</p>) || <ForecastSection data={data.forecast} />}
    </div>
  )
}