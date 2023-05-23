import SearchField from "../components/abstract/searchField.js"
import ForecastSection from "../components/forecastSection.js"
import HistorySection from "../components/historySection.js"
import WeatherSection from "../components/weatherSection.js"

import { useState } from 'react';

export default function WeatherPage() {
  const [location, setLocation] = useState('')
  const { isLoading, hasError, data } = useWeatherApi(location);

  return (
    <div>
      <HistorySection />
      <SearchField placeholder="Search city weather..."/>
      {(isLoading && <p>Loading...</p>) || <WeatherSection data={data} />}
      {(isLoading && <p>Loading...</p>) || <ForecastSection data={data} />}
    </div>
  )
}