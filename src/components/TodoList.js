// import { Button } from "@material-ui/core";
import React from "react"
import { ListGroupItem, Button } from "reactstrap";

const TodoList = (props) =>
{
  
    return(
        <>
            {/* <ListGroupItem color={randomItem}>{proops.text}</ListGroupItem> */}
            <ListGroupItem>{props.text} <Button onClick={() =>
            {
                props.onSelect(props.id);
            }}>Done</Button></ListGroupItem>
            {/* <Button>Done</Button> */}
        </>
    )
}

export default TodoList;