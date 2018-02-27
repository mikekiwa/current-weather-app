import React, { Component } from 'react'
import SearchBar from '../utils/searchbar'
import WeatherList from '../utils/weatherlist'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="header">Current Weather Report</h1>
        <div className="main-app">
          <SearchBar />
          <WeatherList />
        </div>
      </div>
    );
  }
}
