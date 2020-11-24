import React from "react"
import { Button, Container, Form, FormGroup, Input } from "reactstrap"

const AddCourse = () =>
{
    return(
        <>
        <h1 className="text-center my-3">Add Course Detail</h1>
            <Form>
                <FormGroup>
                    <label for="userId">Course ID</label>
                    <Input type = "text" placeholder="Enter here" name="userId" id = "userId"></Input>
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter title here" id = "title"></Input>
                </FormGroup>

                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea" placeholder="Enter description here" id="description"
                    style={{height:200}}></Input>
                </FormGroup>
                <Container className="text-center">
                    <Button color="success">Add Course</Button>
                    <Button color="warning ml-2">Clear</Button>
                </Container>
            </Form>
        </>
    )
}

export default AddCourse;