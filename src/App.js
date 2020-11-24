import React from "react"

import {Button} from "reactstrap"
import {ToastContainer, toast} from "react-toastify"
const App = () =>
{
    const btnHandle = () =>
    {
        toast("This a message..")
        toast.success("done",
        {position:"top-center"})
    }
    return(
        <>
        <ToastContainer/>
            <h1>Application</h1>
            <Button color="warning" onClick={btnHandle}>React Button</Button>
        </>
    )
}

export default App;