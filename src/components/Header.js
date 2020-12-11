import React from "react"
import { Card, CardBody, Col, Row } from "reactstrap"
import Navbars from "./Navbars"

const Header = () =>
{
    return(
        <>
        {/* <Row>
        <Col> */}
            {/* <Card className="my-2 bg-warning">  */}
          
          
          
            <Card className="my-2 bg-light"> 
                <CardBody>
                   {/* <h5 className="text-left" style={{paddingLeft:"0.6em", paddingRight:"0.6em", color:"DodgerBlue", borderStyle:"groove", width:"fit-content", textAlign:"center"}}><b> SSG </b>Online </h5>           */}
                </CardBody>
                <CardBody>
                <Navbars></Navbars>
                </CardBody>
            </Card>


            {/* </Col>
            </Row> */}
            {/* <Navbars></Navbars> */}
        </>
    )
}

export default Header;