import React, { Component, useState } from "react";
import Chart from "react-apexcharts";

const CharPageUpdate = () => {
    // const [updateCharts, setUpdateCharts] = useState({});
    const [optionsMixedChart, setOptionsMixedChart] = useState({
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            columnWidth: "50%"
          }
        },
        xaxis: {
          categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        markers: {
          size: 0,
          strokeWidth: 3,
          fillOpacity: 0,
          strokeOpacity: 0,
          hover: {
            size: 8
          }
        },
        yaxis: {
          tickAmount: 5,
          min: 0,
          max: 150
        }
      });
    const [seriesMixedChart, setSeriesMixedChart] = useState([
        {
          name: "series-1",
          type: "line",
          data: [30, 40, 25, 50, 49, 21, 70, 141]
        },
      ])


  const updateCharts = () => {
    const newMixedSeries = [];
    const posLastData = seriesMixedChart[0].data.length ;
    const lastData = seriesMixedChart[0].data[posLastData - 1];    
    const newData =  dataAleatory(lastData);

    seriesMixedChart.forEach((s) => {
        const data = s.data.filter((v, index) =>  index != 0 );
        data.push(newData)
        newMixedSeries.push({ data: data, type: s.type });
    });

    
      setSeriesMixedChart(newMixedSeries);
  }

  //genera nuevo valor en un rango de 0 a 150 con una diferencia de 10 del ultimo dato
  const dataAleatory = (lastData) => {
    const max = 10;
    const min = -10;
    const newData =  Math.floor(Math.random() * (max - min + 1)) + min;
    if (lastData + newData <= 150 && lastData + newData >= 0) {
        return lastData + newData
    } else {
        console.log(lastData - newData);
        return lastData - newData
    }

  }

    return (
      <div className="app">
        <div className="row">
          <div className="col mixed-chart">
            <Chart
              options={optionsMixedChart}
              series={seriesMixedChart}
              type="line"
              width="500"
            />
          </div>
          <p className="col">
            <button onClick={updateCharts}>Update!</button>
          </p>
        </div>
      </div>
    );
}

export default CharPageUpdate;
