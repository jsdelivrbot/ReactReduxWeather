import React, {Component} from 'react';
import _ from 'lodash';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

export default class WeatherChart extends Component {
  render() {
    return (
      <div>
        <Sparklines height={120} width={120} data={this.props.data}>
          <SparklinesLine color={this.props.color} />
          <SparklinesReferenceLine type="avg"/>
        </Sparklines>
        <div><strong>Average:</strong> {average(this.props.data)}{this.props.units}</div>
      </div>
    );
  }
}

function average(data) {
  return _.round(_.sum(data)/data.length);
}
