import React, {  useState } from "react";
import ReactApexChart from "react-apexcharts";
import {dataAleatory, dataGenerate, generateTimes} from '../api/Generate';


const ChartPage = () => {
  const totalTimes = generateTimes();
  const totalPowers = dataGenerate();


  const [dataTimes, setDataTimes] = useState(totalTimes);

  const [dataPowers, setDataPowers] = useState(totalPowers);

  const [second, setSeconds] = useState(0);

  const [options, setOptions] = useState({
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      tickAmount: 12,
      categories: dataTimes,
      title: {
        text: 'Time',
      }
    },
    yaxis: {
      tickAmount: 10,
      min: 0,
      max: 155,
    }
  })

  const [powers, setPowers] = useState([
    {
      name: "Potencia",
      data: dataPowers ,
    },
  ],)

  //Actualizar Grafico
  const updateCharts = () => {

    const newPowers = [];
    const posLastData = powers[0].data.length ;
    const lastData = powers[0].data[posLastData - 1];
    const newData =  dataAleatory(lastData);

    powers.forEach((s) => {
        const data = s.data.filter((v, index) =>  index != 0 );
        data.push(newData)
        newPowers.push({ data: data, type: s.type });
    });

    console.log(newPowers[0].data);
    setPowers(newPowers);
  }

  // setInterval(() => {
  //    updateCharts();
  //  }, 1000);

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
