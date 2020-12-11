import React from "react"

import { Container, Row, Col } from 'reactstrap';


  const footerStyle = {
  backgroundColor: "white",
  fontSize: "20px",
  color: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%"
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
};

function BottomNav({ children }) {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>
      {children}
      <Container>
      <Row>
      {/* <Col md="1.5" style={{marginTop:"1em", marginLeft:"1em"}}>                   <h5 className="text-left" style={{paddingLeft:"0.6em", paddingRight:"0.6em", color:"DodgerBlue", borderStyle:"groove", width:"fit-content", textAlign:"center"}}><b> SSG </b>Online </h5>          </Col> */}
      {/* <Col style={{backgroundColor:"light"}}><font style={{fontSize:"0.7em"}}> <a href ="#" onMouseOver="this.style.color='#0F0'" onMouseOut="this.style.color='#00F'">HOME</a> |</font>  <font style={{fontSize:"0.7em"}}> <a href ="#" onMouseOver="this.style.color='#0F0'" onMouseOut="this.style.color='#00F'">ABOUT</a> |</font> <font style={{fontSize:"0.7em"}}> <a href ="#" onMouseOver="this.style.color='#0F0'" onMouseOut="this.style.color='#00F'">CONTACT</a> </font></Col> */}
      <Col md="0.5" style={{backgroundColor:"light", fontWeight:"", color:"black", fontSize:"0.6em"}}>HOME</Col>
      <Col md="0.5" style={{backgroundColor:"light", fontWeight:"", color:"dark", marginLeft:"1em"}}>HOME</Col>
        {/* <Col style={{backgroundColor:"light", fontSize:"0.7em"}}> | ABOUT</Col> */}
      </Row>
    </Container>
      </div>
    </div>
  );
}

export default BottomNav;