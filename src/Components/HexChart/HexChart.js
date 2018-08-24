import React, { Component } from 'react'
import { scaleLinear, scaleSequential } from 'd3-scale';
import { range } from 'd3-array'
import { select } from 'd3-selection'
import { randomNormal } from 'd3-random';
import { axisBottom, axisLeft } from 'd3-axis';
import { interpolateLab } from 'd3-interpolate';
import HexbinPlot from 'react-d3-hexbin';
import './HexChart.css';

class HexChart extends Component {

    render() {
        const randomX = randomNormal(0, 1);
        const randomY = randomNormal(0, 1);
        const data = range(50000).map(() => [randomX(), randomY()] );

        return <HexbinPlot points={ data }
                           width={ this.props.size[0] }
                           height={ this.props.size[1] }
                           radius={ 10 }
                           title={{
                               text: "Title",
                               font: 30,
                               color: '#fff',
                           }}
                           xLabel={{
                               text: "",
                               font: 20,
                               color: '#fff',
                           }}
                           yLabel={{
                               text: "",
                               font: 20,
                               color: '#fff',
                           }}
                           defaultColor="steelblue"
                           colorFilters={{
                               "darkblue": (x, y) => y > x*x,
                               "blue": (x, y) => y > 1/x,
                           }}/>
    }
}
export default HexChart;