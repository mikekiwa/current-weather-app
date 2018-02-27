import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherList extends Component {
  renderWeather(data) {
    const name = data.name
    const weatherDesc = data.weather[0].description
    const { lat, lon } = data.coord
    const temp = data.main.temp - 273
    const pressure = data.main.pressure
    const humidity = data.main.humidity
    const minTemp = data.main.temp_min - 273
    const maxTemp = data.main.temp_max - 273
    const visibility = data.visibility / 1000
    const windSpeed = data.wind.speed

    return (
      <span key={name}>
        <p>City: {name}, Latitude: {lat}, Longitude: {lon}</p>
        <p>{weatherDesc}</p>
        <p>Temperature: {temp.toFixed(2)}°C (Min: {minTemp.toFixed(2)}°C, Max: {maxTemp.toFixed(2)}°C)</p>
        <p>Atmospheric pressure: {pressure}hPa</p>
        <p>Humidity: {humidity}%</p>
        <p>Visibility: {visibility}km</p>
        <p>Wind Speed: {windSpeed}m/s</p>
      </span>
    );
  }

  render() {
    return (
      <div>
        {this.props.weather.map(this.renderWeather)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
