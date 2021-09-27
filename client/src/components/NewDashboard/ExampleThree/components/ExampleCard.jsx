import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Services from '../../Pages/Services';

const ExampleCard = () => (
  
  <Col md={12}>
    <Card className="p-2">
      <CardBody>
        <div className="card__title">
          {/* <h5 className="bold-text">Example 3 title...</h5> */}
        <Services/>
          {/* <h5 className="subhead">Example subhead</h5> */}
        </div>
        {/* <p>Your content here</p> */}
      </CardBody>
    </Card>
  </Col>
);

export default ExampleCard;
