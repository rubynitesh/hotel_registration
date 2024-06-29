import React from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Input } from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react'
import { useEffect } from 'react';
import { baseUrl } from '../config/api';

const AddStudent = () => {
    const [addStudent,setAddStudent]=useState({});

    const handalForm=(e)=>{
        console.log("this is our server",addStudent)
        addStudentbyserver(addStudent);
        e.preventDefault();
    }
    useEffect(()=>{
        document.title="add-Student"
    },[])
    const addStudentbyserver=(data)=>{
        axios.post(`${baseUrl}/addStudent`,data).then(
            (response )=>{
                console.log(data.response)
                toast.success("Student added")
            },(error)=>{
                console.log(error)
                toast.error("Somthing went wrong")
            }
        );
        setAddStudent(data.response);  
    }
  return (
    <div>
      <h1>Add New Student</h1>
      <Form onSubmit={handalForm} >
        <FormGroup>
            <label >Student Id</label>
            <Input type='text' placeholder='Enter Student id' name='studentId' id='studentId' onChange={(e)=>{setAddStudent({...addStudent,studentId:e.target.value})}}/>
        </FormGroup>
        <FormGroup>
            <label >First Name</label>
            <Input type='text' placeholder='Enter first name'  id='firstName' onChange={(e)=>{setAddStudent({...addStudent,studentFirstName:e.target.value})}}/>
        </FormGroup>
        <FormGroup>
            <label >Last Name</label>
            <Input type='text' placeholder='Enter last name'  id='lastname' onChange={(e)=>{setAddStudent({...addStudent,studentLastName:e.target.value})}}/>
        </FormGroup>
        <FormGroup>
            <label>Email</label>
            <Input type='email' placeholder='Enter email'  id='email' onChange={(e)=>{setAddStudent({...addStudent,studentEmail:e.target.value})}}/>
        </FormGroup>
        <FormGroup>
            <label >Aadhar No</label>
            <Input type='text' placeholder='Enter aadhar no...'  id='aadhar' onChange={(e)=>{setAddStudent({...addStudent,studentAdharNumber:e.target.value})}}/>
        </FormGroup>
        <FormGroup>
            <label >DOB</label>
            <Input type='text' placeholder='Enter dob'  id='dob' onChange={(e)=>{setAddStudent({...addStudent,studentDob:e.target.value})}}/>
        </FormGroup>
        <FormGroup>
            <label>Phone No.</label>
            <Input type='tel' placeholder='Enter phone no..'  id='phone' onChange={(e)=>{setAddStudent({...addStudent,studentMobileNumber:e.target.value})}}/>
        </FormGroup>
        <FormGroup>
            <label >Student Father Name</label>
            <Input type='text' placeholder='Enter father name..'  id='father' onChange={(e)=>{setAddStudent({...addStudent,studentFatherName:e.target.value})}}/>
        </FormGroup>
        <FormGroup>
            <label>Student Father Mob</label>
            <Input type='text' placeholder='Enter father mob no..'  id='Fphone' onChange={(e)=>{setAddStudent({...addStudent,studentFatherMobileNumber:e.target.value})}}/>
        </FormGroup>
        <FormGroup>
            <label >Student Id</label>
            <Input type='text' placeholder='Enter father adhar no.'  id='SFA' onChange={(e)=>{setAddStudent({...addStudent,studentFatherAdharNumber:e.target.value})}}/>
        </FormGroup>
        <FormGroup>
            <label>Entery Date</label>
            <Input type='text' placeholder='Enter entery date'  id='Entery' onChange={(e)=>{setAddStudent({...addStudent,studentEntryDate:e.target.value})}}/>
        </FormGroup>
        <Button color='success' type='submit'>Add Student</Button>
      </Form>
    </div>
  )
}

export default AddStudent
