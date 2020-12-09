import './App.css';
import StrapPage from './Components/StrapPage';
import ChartPage from './Components/ChartPage';
import HookMqtt from './mqtt-connect/MqttConnect';

function App() {

  return (
    <div>
      <ChartPage />
      {/* <StrapPage /> */}
      <hr/>
      <HookMqtt />
    </div>
  );
}

export default App;
