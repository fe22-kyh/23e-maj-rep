import {useState} from 'react';

const API_KEY = "638df43929148df653121b2bc82d9691";


export default function useWeatherApi(location) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState([]);
  const [data, setData] = useState();
}