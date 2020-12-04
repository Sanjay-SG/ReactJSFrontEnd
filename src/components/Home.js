import React, { useEffect } from "react"
import {Jumbotron, Container, Button, Row, Col} from "reactstrap"

const Home = () =>
{
    useEffect(()=>
    {
        document.title = "Home"
    }, [])
    return(
        <>
        <Row>
            <Col md={12}>
            {/* <Jumbotron className="text-center"> */}
            <Jumbotron className="text-center bg-light">
                <h2 classN3me="display-3" style={{fontFamily:"Comic Sans MS"}}><b>WELCOME</b></h2>
                <p>
                Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses Babel and webpack, but you don’t need to know anything about them.
                </p>
                <Container>
                    <Button color="primary" outline>Get Started</Button>
                </Container>
            </Jumbotron>
            </Col>
        </Row>
          
        </>
    )
}

export default Home;