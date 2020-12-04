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
                   <h5 className="text-left" style={{color:"DodgerBlue"}}><b> SSGOnline </b></h5>          
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