import React, { useEffect, useState } from "react"
import { Button, Input, Label } from "reactstrap";

const CounterApp = () =>
{
    useEffect(()=>
    {
        document.title = "Counter App";
    }, []);

    const[counter, incrCount] = useState(0);

    const count = () =>
    {
        incrCount(counter + 1)
    }

    return(
        <>
            <h4>Counter</h4>

            <Label>{counter}</Label>
            <Input type="number" className="my-2"></Input>
            <Button color="primary" onClick={count}>Count</Button>
        </>
    )
}

export default CounterApp;