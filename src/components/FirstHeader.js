import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const FirstHeader = (props) => 
{
  return (
    <Container className="themed-container" fluid={true}>
      <Row>
        <Col style={{backgroundColor:"light"}}><font style={{fontSize:"0.7em"}}> <a href ="#" onMouseOver="this.style.color='#0F0'" onMouseOut="this.style.color='#00F'">HOME</a> |</font>  <font style={{fontSize:"0.7em"}}> <a href ="#" onMouseOver="this.style.color='#0F0'" onMouseOut="this.style.color='#00F'">ABOUT</a> |</font> <font style={{fontSize:"0.7em"}}> <a href ="#" onMouseOver="this.style.color='#0F0'" onMouseOut="this.style.color='#00F'">CONTACT</a> </font></Col>
        {/* <Col style={{backgroundColor:"light", fontSize:"0.7em"}}> | ABOUT</Col> */}
      </Row>
    </Container>
  )
}

export default FirstHeader;