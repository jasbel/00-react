import React, {  useState } from "react";
import ReactApexChart from "react-apexcharts";

const ChartPage = () => {
  const [options, setOption] = useState({
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: [ 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998 ]
    },
  })

  const [series, setSeries] = useState([
    {
      name: "Potencia",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ],)

  // const [newSeries, setNewSeries] = useState([])

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          width="600"
        />
        </div>
      </div>
    </div>
  );
}

export default ChartPage;
