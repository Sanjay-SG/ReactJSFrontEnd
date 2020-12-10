import React from "react"
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap"

const Menus = () =>
{
    return(
    <>
        <ListGroup>

        {/*page reloads with href */}
            {/* <ListGroupItem tag="a" href="/" action>Home</ListGroupItem>
            <ListGroupItem tag="a" href="/add-course" action>Add Course</ListGroupItem>
            <ListGroupItem tag="a" href="/view-courses" action>View Courses</ListGroupItem>
            <ListGroupItem tag="a" href="#!" action>About</ListGroupItem>
            <ListGroupItem tag="a" href="#!" action>Contact</ListGroupItem> */}

            {/*without page reload*/}
            {/* <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link> */}
            <Link className="list-group-item list-group-item-action" tag="a" to="/appnav/add_course" action>Add Course</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/appnav/view_courses" action>View Courses</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/appnav/counter_app" action>Counter</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/appnav/gallery_app" action>Gallery</Link>
            {/* <Link className="list-group-item list-group-item-action" tag="a" to="/appnav/items_app" action>Items</Link> */}
            <Link className="list-group-item list-group-item-action" tag="a" to="/appnav/tasks_app" action>Tasks</Link>

            {/* <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>About</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>Contact</Link> */}
        </ListGroup>

    </>
    )
}

export default Menus;