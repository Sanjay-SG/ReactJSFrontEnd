import React, { useState, useEffect } from "react"
import { Button } from "reactstrap"

import Course from  "./Course"
import base_url from "../api/Bootapi"
import axios from "axios"
import { toast } from "react-toastify"

const Allcourses = () =>
{
    {/* similar to componentDidMount and componentDidUpdate in class components */}
    // useEffect(()=>
    // {
    //     alert("test")
    // })

    {/* call only componentDidMount */}
    useEffect(()=>
    {
        // alert("test")
        document.title = "All courses"
    }, []);

    //function to call server
    const getAllCoursesFromServer = () =>
    {
        axios.get(`${base_url}/courses`).then(
            (response)=>
            {
                // console.log(response)
                console.log(response.data)
                toast.success("Courses have been loaded",
                {
                    position:"bottom-center"
                })
                setCourses(response.data)
            },
            (error)=>
            {
                console.log(error)
                toast.error("Something went wrong",
                {
                    position:"bottom-center"
                })
            }
        )
    }

    //calling loading course function
    useEffect(()=>
    {
        getAllCoursesFromServer();
    }, []);

// static data
// const [courses, setCourses] = useState([
//     {title:"Java Course", description:"This is Java programming language course."},
//     {title:"Python Course", description:"This is Python programming language course."},
//     {title:"JS Course", description:"This is JS programming language course."},
//     {title:"C Course", description:"This is C programming language course."},
//     {title:"ReactJS Course", description:"This is ReactJS course."},
// ])


//dynamic data
    const [courses, setCourses] = useState([]);


    return(
        <>
        {/* For testing hook */}
            {/* <Button onClick={()=>{
                console.log("Testing")
                setCourses([
                    ...courses,
                    {
                        title:"ReactJS Course", description:"This is ReactJS course."
                    },
                ])
            }}>Test</Button> */}

            <h1>All Courses</h1>
            <p>List of courses</p>
            {
                courses.length > 0 ? courses.map((item)=>(
                    <Course key={item.id} course = {item} />
                )) : "No courses available"
            }
        </>
    )
}

export default Allcourses;