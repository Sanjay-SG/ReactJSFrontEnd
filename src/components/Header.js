import React from "react"
import { Card, CardBody, Col, Row } from "reactstrap"
import Navbars from "./Navbars"

const Header = () =>
{
    return(
        <>
        {/* <Row>
        <Col> */}
            <Card className="my-2 bg-warning">
                <CardBody>
                   <h1 className="text-center my-3"> Welcome </h1>
                   {/* <Navbars></Navbars> */}
                </CardBody>
                <CardBody>
                <Navbars></Navbars>
                </CardBody>
            </Card>
            {/* <Navbars></Navbars> */}
            {/* </Col>
            </Row> */}
        </>
    )
}

export default Header;