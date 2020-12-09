import { Button, Row, Col } from 'reactstrap';
import React, { useEffect } from 'react';

const Connection = ({ connect, disconnect, connectBtn }) => {

  // Acceso al servidor
  const record = {
    host: 'servidoriot.ml',
    port: 8093,
  };

  const { host, port } = record;
  const url = `ws://${host}:${port}/mqtt`;

  const options = {
    keepalive: 30,
    protocolId: 'MQTT',
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    will: {
      topic: 'WillMsg',
      payload: 'Connection Closed abnormally..!',
      qos: 0,
      retain: false
    },
    rejectUnauthorized: false
  };

  const handleConnect = () => {
    connect(url, options);
  };

  const handleDisconnect = () => {
    disconnect();
  };

  //TODO: conexion directa -  mejorar hook o posicion del evento
  useEffect(() => {
    handleConnect();
  }, [])


  return (
    <>
    <Row gutter={12} style={{ padding: '10px'}}>
      <Col>
        <Button color="primary" onClick={handleConnect}>{connectBtn}</Button>
      </Col>
      <Col>
        <Button color="danger" onClick={handleDisconnect}>Disconnect</Button>
      </Col>
    </Row>
    <hr/>
    </>
  );
}

export default Connection;
