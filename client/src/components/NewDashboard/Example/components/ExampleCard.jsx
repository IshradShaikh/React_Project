import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
//import TableFile from './TableFile';
import TableFile from '../../Pages/TableFile';



const ExampleCard = () => (
  <Col md={12}>
    <Card >
      <CardBody className="p-2">
        <div className="card__title">
          {/* <h5 className="bold-text">Example title...</h5> */}
        <TableFile/>
          {/* <h5 className="subhead">Example subhead</h5> */}
        </div>
        {/* <p>Your content here</p> */}
      </CardBody>
    </Card>
  </Col>
);

export default ExampleCard;
