import React from 'react'
import Rectangle72 from "../img/Rectangle72.png";
import pharm from "../img/pharm.jpg";
import payrool from "../img/payrool.jpg";
import ecommerce from "../img/ecommerce.jpg";
import {Container, Card, Button, Row, Col,} from 'react-bootstrap';

const Services: React.FC = () => {
  return (
    <>
    <div>
      <main role="main" className="container">
        <div className="mt-5">
          <Row>
            <Col sm={6}><img src={Rectangle72} alt="Rectangle72" width="500" height="300" className="rounded"/>
            </Col>
            <Col>
              <h2 className=" text-left text-success ">An  Overview of </h2>
              <h2 className=" text-left text-success "> what we do</h2>
              <p><span></span></p>
              <div> We are an IT outfit with experienced technical and business
                 professionals dedicated to developing technologically driven
                solutions to help organisations scale their businesses.
              </div>
            </Col>
          </Row>
          <div className="my-3 p-3 rounded shadow-sm">
            <h3 className="text-center text-success  mb-3">Our Digital Products</h3>
            <div className="text-center">We utilize the latest innovations, digital technologies and methodologies,</div>
            <div className="text-center">to create a valuable experience and improve your digital experience.</div>
            <p><span></span></p>
            <Container>
            <Row className="mb-5 text-center">
            <Col>
            <Card style={{ width: '18rem' }} className="mb-3">
            <img src={pharm} alt="pharm"  className="rounded"/>
              <Card.Body>
                <Card.Title>Pharm Solution</Card.Title>
                <Card.Text>
                <p>
                Our pharm solution affords patients easy access
                to prescription medications from our online retail pharmacy
                </p>
                </Card.Text>
                <Button variant="success">Read More</Button>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }} className="mb-3">
            <img src={payrool} alt="payrool"  className="rounded"/>
              <Card.Body>
                <Card.Title>Payroll Solution</Card.Title>
                <Card.Text> 
                <p>
                The Doyenify payroll solution is a simple-to-use software that allows 
                organisations to integrate performance measurement, 
                </p>
                </Card.Text>
                <Button variant="success">Read More</Button>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }} className="mb-3">
            <img src={ecommerce} alt="ecommerce"  className="rounded"/>
              <Card.Body>
                <Card.Title>E-Commerce</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="success">Read More</Button>
              </Card.Body>
            </Card>
            </Col>
            </Row>
            </Container>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};
export default Services;