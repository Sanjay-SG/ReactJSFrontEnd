import React, { useEffect, useState } from "react"
import { Button, Container, Form, FormGroup, Input } from "reactstrap"
import axios from "axios"
import base_url from "../api/Bootapi"
import { toast } from "react-toastify"

const AddCourse = () =>
{
    useEffect(()=>
    {
        document.title = "Add course"
    }, []);

    const[course, setCourse] = useState({});
    //form handler function
    const handleForm=(e)=>
    {
        console.log(course);
        postDataToServer(course);

        e.preventDefault();
    }

    //creating function to POST data to server
    const postDataToServer = (data)=>
    {
        axios.post(`${base_url}/courses`, data).then((response)=>
        //works// axios.post(`https://cors-anywhere.herokuapp.com/{localhost}/courses`, data).then((response)=>
        // axios.post(`courses/`, data).then((response)=>
        {
            console.log(response);
            console.log("success")
            toast.success("Course added successfully");
            setCourse({id:"", title:"", description:""})
        },
        (error)=>
        {
            console.log(error);
            console.log("error");
            toast.error("Something went wrong");
        });
    }

    return(
        <>
        {/* <h1 className="text-center my-3">Add Course Detail</h1> */}
        <h4 className="my-3">Add Course Detail</h4>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course ID</label>
                    <Input type = "text" placeholder="Enter here" name="userId" id = "userId" onChange={(e)=>
                        {
                            setCourse({...course, id:e.target.value})
                        }
                    }></Input>
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter title here" id = "title" onChange={(e)=>
                        {
                            setCourse({...course, title:e.target.value})
                        }
                    }></Input>
                </FormGroup>

                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea" placeholder="Enter description here" id="description"
                    style={{height:200}} onChange={(e)=>
                        {
                            setCourse({...course, description:e.target.value})
                        }
                    }></Input>
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add Course</Button>
                    <Button type="reset" color="warning ml-2" onClick={(e)=>
                    {
                        setCourse({id:"", title:"", description:""})
                    }}>Clear</Button>
                </Container>
            </Form>
        </>
    )
}

export default AddCourse;