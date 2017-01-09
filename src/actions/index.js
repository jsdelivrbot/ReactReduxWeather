import axios from 'axios';

const API_KEY = "4fc3e7ad011955f255210667cb508191";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  var encodedCity = encodeURI(city);
  const url = `${ROOT_URL}&q=${encodedCity},us&units=imperial`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
