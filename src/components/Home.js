import React from "react"
import {Jumbotron, Container, Button} from "reactstrap"

const Home = () =>
{
    return(
        <>
            <Jumbotron className="text-center">
                <h1 className="display-3">Sanjay G</h1>
                <p>
                Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses Babel and webpack, but you don’t need to know anything about them.
                </p>
                <Container>
                    <Button color="primary" outline>Get Started</Button>
                </Container>
            </Jumbotron>
        </>
    )
}

export default Home;