import { combineReducers } from 'redux'
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

function weather(state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER_DATA:
      const fetchData = action.payload.data
      if (typeof fetchData !== 'undefined') {
        return Object.assign({}, state, {
          name: fetchData.name,
          weatherDesc: fetchData.weather[0].description ? fetchData.weather[0].description : 'No description available',
          latitude: fetchData.coord.lat ? `${fetchData.coord.lat} degrees` : 'No latitude info available',
          longitude: fetchData.coord.lon ? `${fetchData.coord.lon} degrees` : 'No longitude info available',
          temp: fetchData.main.temp ? `${(fetchData.main.temp - 273).toFixed(2)}°C` : 'No temperature info available',
          minTemp: fetchData.main.temp_min ? `${(fetchData.main.temp_min - 273).toFixed(2)}°C` : 'No minimum temperature info available',
          maxTemp: fetchData.main.temp_max ? `${(fetchData.main.temp_max - 273).toFixed(2)}°C` : 'No maximum temperature info available',
          humidity: fetchData.main.humidity ? `${fetchData.main.humidity}%` : 'No humidity info available',
          pressure: fetchData.main.pressure ? `${fetchData.main.pressure} hPa` : 'No pressure info available',
          visibility: fetchData.visibility ? `${fetchData.visibility / 1000} km` : 'No visibility info available',
          windSpeed: fetchData.wind.speed ? `${fetchData.wind.speed} m/s` : 'No wind speed info available'
        })
      } else {
        alert('City name entered is not correct. Please try again.')
        return Object.assign({}, state, {
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
        })
      }
  }
  return state
}

export default combineReducers({
  weather
});
