import React, {Component} from 'react';
import {connect} from 'react-redux';
import WeatherChart from '../components/weather_chart';
import GoogleMap from '../components/google_map_display';

class WeatherList extends Component {
  constructor(props){
    super(props);
  }

  renderWeather(cityData){
    const name = cityData.city.name;
    const {lat, lon} = cityData.city.coord;
    const temp = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <WeatherChart data={temp} color="red" units="&#8457;"/>
        </td>
        <td>
          <WeatherChart data={humidity} color="blue" units="%"/>
        </td>
        <td>
          <WeatherChart data={pressure} color="green" units="hPa"/>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (&#8457;)</th>
            <th>Humidity (%)</th>
            <th>Pressure (hPa)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
