import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class ChartPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };

    const newSeries = [];
  }

  this.state.series.map((s) => {
    const data = s.data.map(() => {
      return Math.floor(Math.random() * (180 - min + 1)) + min
    })
    newSeries.push({ data, name: s.name })
  })

  this.setState({
    series: newSeries
  })

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}
// const ChartPage = () => {
//     return (
//         <>
//             ChartPage
//         </>
//     )
// }

export default ChartPage;
