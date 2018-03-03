import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);

class App extends Component {
  
  componentDidMount() {
    Highcharts.chart('container', {
      chart: {
          type: 'areaspline'
      },
      title: {
          text:'URL Blocked'
      },
      legend: {
         visible: false
      },
      xAxis: {
          categories: [
              'M',
              'T',
              'W',
              'T',
              'F',
              'S',
              'S'
          ]        
      },
      yAxis: {
          visible:false
      },
      tooltip: {
      backgroundColor: '#000000',
      color: '#ffffff',
      formatter: function() {
          return '<span style="color:#ffffff">'+this.y+'</span>';
      }
  },
  
      credits: {
          enabled: false
      },
      plotOptions: {
          series: {
              fillColor: {
      allowPointSelect: true,
                  linearGradient: [0, 0, 0, 300],
                  stops: [
                      [0, 'rgb(249, 77, 43)'],
                      [1, 'rgb(239, 178, 0)']
                  ]
              },
              lineColor: 'rgba(255, 255, 255, 0.50)',
        marker: {
                  fillColor: '#FFFFFF',
                  lineWidth: 1,
                  lineColor: 'gray'
              }
          }
      },
      series: [{
          name: 'URL Blocked',
          data: [0, 12, 12, 8, 8, 2, 1]
      }]
  });
  }
  
  render() {
    return (
      <div className="App">
        <div id="container"></div>
      </div>
    );
  }
}

export default App;
