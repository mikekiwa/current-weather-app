import React, { Component } from 'react'
import SearchBar from '../utils/searchbar'
import WeatherList from '../utils/weatherlist'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="heading">City based Weather Report</h1>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
