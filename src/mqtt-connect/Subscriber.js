import React, { useState } from 'react';
import { Card, Button} from 'reactstrap';

const Subscriber = ({ sub, unSub, showUnsub }) => {
  
  const [subscribe, setSubscribe] = useState('Suscribirse')

  const record = {
    topic: 'testtopic/react',
    qos: 0,
  };

  const handleUnsub = () => {
    unSub(record);
  };

  const handleSubscribe = () => {
    sub(record);
    setSubscribe('Suscrito')
  }

  return (
    <Card
      title="Subscripcion"
    >
      <Button color="primary" onClick={handleSubscribe}>
      {subscribe}
      </Button>
      {
        showUnsub ?
          <Button color="danger" onClick={handleUnsub}>
            Desuscribirme
          </Button>
          : null
      }
      <hr/>
    </Card>
  );
}

export default Subscriber;
