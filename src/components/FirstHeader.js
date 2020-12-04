import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const FirstHeader = (props) => 
{
  return (
    <Container className="themed-container" fluid={true}>
      <Row>
        <Col style={{backgroundColor:"light"}}><font style={{fontSize:"0.7em"}}> HOME |</font>  <font style={{fontSize:"0.7em"}}> ABOUT |</font> <font style={{fontSize:"0.7em"}}> CONTACT </font></Col>
        {/* <Col style={{backgroundColor:"light", fontSize:"0.7em"}}> | ABOUT</Col> */}
      </Row>
    </Container>
  )
}

export default FirstHeader;