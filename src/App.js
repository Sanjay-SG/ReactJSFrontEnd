import React from "react"

import {Col, Container, Row} from "reactstrap"
import {ToastContainer, toast} from "react-toastify"
import Home from "./components/Home"

import {BrowserRouter as Router, Route} from "react-router-dom"
import Navigation from "./Navigation"
import TopNav from "./components/TopNav"
import BottomNav from "./components/BottomNav"
import HomeImg from "./components/HomeImg"
// import "./components/TopNav.css"

const App = () =>
{
    return(
        <>
        
        {/* <FirstHeader></FirstHeader> */}
        <Router>
       
           <div className="container">
           <TopNav/>
           </div>
           <Route exact path="/" component={HomeImg} />
        {/* <TopNav/> */}
        {/* <HomeImg/> */}
        {/* <Navigation></Navigation> */}
        <ToastContainer/>
        <Container>
        {/* <Header></Header> */}
        
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/appnav" component={Navigation} />
        
            <Row>
                <Col md={4}>
                        {/* <Menus></Menus> */}
                </Col>
                <Col md={8}>
                        {/* <Home></Home> */}
                        {/* <Route exact path="/" component={Home} /> */}
                        {/* <Route exact path="/add-course" component={AddCourse}/>
                        <Route exact path="/view-courses" component={Allcourses}/> */}
                        
                </Col>

            </Row>

          
        </Container>
        <BottomNav/>
        </Router>
        {/* <Home></Home>
        <Allcourses></Allcourses>
        <AddCourse></AddCourse> */}
        {/* <Course course={{title:"Python", description:"This is Python programming language course."}}>
        </Course>
        <Course course={{title:"Java", description:"This is Java programming language course."}}>
        </Course> */}

        {/* <ToastContainer/>
            <h1>Application</h1>
            <Button color="warning" onClick={btnHandle}>React Button</Button> */}
        </>
    )
}

export default App;