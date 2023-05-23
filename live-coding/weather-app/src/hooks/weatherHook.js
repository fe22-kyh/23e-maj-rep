import { useState, useEffect } from 'react';

const API_KEY = "638df43929148df653121b2bc82d9691";
const initialDataState = {current: {}, forecast: []}


const geoCoodingUrl = (location, appid) => {
  return `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${appid}`
}

const currentWeatherUrl = (lon, lat, appid) => {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`;
}

const forecastUrl = (lon, lat, appid) => {
  return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${appid}`;
}

export default function useWeatherApi(location) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState([]);
  const [data, setData] = useState(initialDataState);

  useEffect(() => {

    const fetchData = async () => {
      if(location === '') return false;
      setIsLoading(true);

      const geoUrl = geoCoodingUrl(location, API_KEY);
      const data = await fetch(geoUrl).then(resp => resp.json());
      const {lat, lon} = data[0];

      const fetchPromises = [
        fetch(currentWeatherUrl(lon, lat, API_KEY)).then(resp => resp.json()), // placed in result[0]
        fetch(forecastUrl(lon, lat, API_KEY)).then(resp => resp.json()) // placed in result[1]
      ];

      const result = await Promise.all(fetchPromises);
      setData({ current: result[0], forecast: result[1].list });
      setIsLoading(false);
    }

    const timeoutId = setTimeout(fetchData, 2000);

    return () => clearTimeout(timeoutId);
  }, [location]);


  return {isLoading, hasError, data};
}