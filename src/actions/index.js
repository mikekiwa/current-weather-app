import axios from 'axios'

const API_KEY = 'ea073b821469e03b1db555d7e6053a75'
const URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`

export const FETCH_WEATHER_DATA = 'FETCH_WEATHER_DATA'

export function fetchWeather(city='san francisco') {
  const url = `${URL}&q=${city}`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER_DATA,
    payload: request
  }
}
