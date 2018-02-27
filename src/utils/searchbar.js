import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions'

class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = { cityName: '' }

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({
      cityName: e.target.value
    })
  }

  onFormSubmit(e) {
    e.preventDefault();

    this.props.fetchWeather(this.state.cityName);
    this.setState({ cityName: '' })
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Find the city you want..."
          className="form-control"
          value={this.state.cityName}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

const mapDispatchToProps = (disptach) => {
  return bindActionCreators({ fetchWeather }, disptach);
}

export default connect(null, mapDispatchToProps)(SearchBar);
