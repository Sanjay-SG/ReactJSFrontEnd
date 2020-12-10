import { TableRow } from "@material-ui/core";
import React, { useState } from "react"
import { Button, Input } from "reactstrap"

import { ListGroup, ListGroupItem } from 'reactstrap';
import TodoList from "./TodoList";


const Todo = () =>
{

    const[inputList, setInputList] = useState("Buy fruits");
    const[items, setItems] = useState([]);

    const itemEvent = (event) =>
    {
        setInputList(event.target.value)
    }

    const listOfItems = () =>
    {
        setItems((existingItems) => 
        {
            return [...existingItems, inputList]
        })
        setInputList("");
    };

    const deleteItems = (id) =>
    {
        console.log("Deleted");
        setItems((existingItems) =>
        {
            return existingItems.filter((arrElem, index) =>
            {
                return index != id;
            })
        })
    }

    var myColorArray = [
        "success",
        "info",
        "warning",
        "danger"
      ];
      
      var randomItem = myColorArray[Math.floor(Math.random()*myColorArray.length)];


    return(
    <>
        <h4> ToDo </h4>
        <Input type="text" placeholder="Add items" onChange={itemEvent} value={inputList} className="my-2"></Input>
        <Button color="primary" onClick={listOfItems} className="my-2">+</Button>
        

        <ListGroup>
            {/* <ListGroupItem>{inputList}</ListGroupItem> */}

            {
                items.map((itemval, index) =>
                {
                    return <TodoList key={index} id={index} text={itemval} onSelect={deleteItems}></TodoList>
                   {/* return <ListGroupItem color={randomItem}>{itemval}</ListGroupItem> */}

                   {/* const alternatingColor = ['#d5d5d5', '#a9a9a9']; // because this is a static array, you can move it out of the component */}

                })
            }
        </ListGroup>
    </>
    )
}

export default Todo;