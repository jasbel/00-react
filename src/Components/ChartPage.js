import React, {  useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import {dataAleatory, dataGenerate, generateTimes} from '../api/Generate';


const ChartPage = () => {
  const totalTimes = generateTimes();
  const totalPowers = dataGenerate();


  const [dataTimes, setDataTimes] = useState(totalTimes);

  const [dataPowers, setDataPowers] = useState(totalPowers);

  const [options, setOptions] = useState({
    fill: {
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100]
      }
    },
    stroke: {
      curve: 'smooth',
    },
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      tickAmount: 12,
      categories: dataTimes,
      title: {
        text: 'Time',
      },
    },
    yaxis: {
      tickAmount: 10,
      min: 0,
      max: 155,
    },
    events: {
      click: (event, chartContext, config) => {
        // The last parameter config contains additional information like `seriesIndex` and `dataPointIndex` for cartesian charts
        console.log("event click");
      },
      mouseMove: (event, chartContext, config) => {
        console.log("event mouserMove");
        // The last parameter config contains additional information like `seriesIndex` and `dataPointIndex` for cartesian charts.
      },
      zoomed: function(chartContext, { xaxis, yaxis }) {
         console.log();
      }
    }
  })

  const [powers, setPowers] = useState([
    {
      data: dataPowers ,
    },
  ],)

  /* TODO: Verificar Buenas practicas */
  //Actualizar Grafico
  const updateCharts = () => {

    const newPowers = [];
    const posLastData = powers[0].data.length ;
    const lastData = powers[0].data[posLastData - 1];
    const newData =  dataAleatory(lastData);

    let datas = [...powers[0].data , newData];
    datas=datas.filter((v, index) =>  index !== 0 );
    newPowers.push({ data: datas });

    // const newTimes = {};
    // let datasTimes = options.xaxis.categories ;
    // datasTimes=datasTimes.filter((v, index) =>  index !== 0 );
    // datasTimes.push(newData)
    // newTimes.push({ xaxis: {
    //   categories: datasTimes,
    // } });
 
    setPowers(newPowers);
  }

  useEffect(() => {
    const id = setInterval(() => {
      updateCharts();
    }, 1000);
    return () => {
      clearInterval(id)
    }
  }, [powers])

  return (
    <div className="app">
      <div className="row">
        <div className="col mixed-chart">
        <ReactApexChart
          options={options}
          series={powers}
          type="line"
          width="600"
        />
        </div>
        <p className="col">
            <button onClick={updateCharts}>Update!</button>
        </p>
      </div>
    </div>
  );
}

export default ChartPage;
