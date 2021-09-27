import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import AddConnections from '../../Pages/AddConnections';
const ExampleCard = () => (
  <Col md={12}>
    <Card>
      <CardBody className="p-2">
        <div className="card__title">
         
          <AddConnections/>
         
        </div>
       
      </CardBody>
    </Card>
  </Col>
);

export default ExampleCard;
