import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherList extends Component {

  render() {
    const { currentWeatherData } = this.props
    if (currentWeatherData.name !== '') {
      return (
        <div className="card weather-forecast" key={currentWeatherData.name}>
          <p className="location">City: {currentWeatherData.name}</p>
          <p className="description">{currentWeatherData.weatherDesc}</p>
          <p>Latitude: {currentWeatherData.latitude}</p>
          <p>Longitude: {currentWeatherData.longitude}</p>
          <p>Temperature: {currentWeatherData.temp} (Min: {currentWeatherData.minTemp}, Max: {currentWeatherData.maxTemp})</p>
          <p>Atmospheric pressure: {currentWeatherData.pressure}</p>
          <p>Humidity: {currentWeatherData.humidity}</p>
          <p>Visibility: {currentWeatherData.visibility}</p>
          <p>Wind Speed: {currentWeatherData.windSpeed}</p>
        </div>
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
