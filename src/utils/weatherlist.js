import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherList extends Component {

  render() {
    const { currentWeatherData } = this.props
    if (currentWeatherData.name !== '') {
      return (
        <span key={currentWeatherData.name}>
          <p>City: {currentWeatherData.name}, Latitude: {currentWeatherData.latitude}, Longitude: {currentWeatherData.longitude}</p>
          <p>{currentWeatherData.weatherDesc}</p>
          <p>Temperature: {currentWeatherData.temp} (Min: {currentWeatherData.minTemp}, Max: {currentWeatherData.maxTemp})</p>
          <p>Atmospheric pressure: {currentWeatherData.pressure}</p>
          <p>Humidity: {currentWeatherData.humidity}</p>
          <p>Visibility: {currentWeatherData.visibility}</p>
          <p>Wind Speed: {currentWeatherData.windSpeed}</p>
        </span>
      );
    } else {
      return (
        <div>Enter a city name in the above field to get the weather results.</div>
      );
    }
  }
}

function mapStateToProps(state) {
  return { currentWeatherData: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
