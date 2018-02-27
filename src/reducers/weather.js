import { FETCH_WEATHER_DATA } from '../actions'

const initialState = {
  name: '',
  weatherDesc: '',
  latitude: '',
  longitude: '',
  temp: '',
  minTemp: '',
  maxTemp: '',
  humidity: '',
  pressure: '',
  visibility: '',
  windSpeed: ''

}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_WEATHER_DATA':
      const fetchData = action.payload.data
      return Object.assign({}, state, {
        name: fetchData.name,
        weatherDesc: fetchData.weather[0].description,
        latitude: fetchData.coord.lat,
        longitude: fetchData.coord.lon,
        temp: fetchData.main.temp,
        minTemp: fetchData.main.temp_min - 273,
        maxTemp: fetchData.main.temp_max - 273,
        humidity: fetchData.main.humidity,
        pressure: fetchData.main.pressure,
        visibility: fetchData.visibility,
        windSpeed: fetchData.wind.speed
      })
    default:
      return state
  }
}
