import { combineReducers } from 'redux'
import WeatherReducer from './weather'

const reducer = combineReducers({
  weather: WeatherReducer
});

export default reducer;
