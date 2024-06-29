import axios from 'axios'
import React from 'react'
import { baseUrl } from '../config/api'
import { useEffect } from 'react'
import { useState } from 'react'
import Student from './Student'
import { toast } from 'react-toastify'

const AllStudent = () => {
    const[student,setStudent]=useState([]);
    const useEffect=(()=>{
        getAllStudent();
    })
    const getAllStudent=()=>{
        axios.get(`${baseUrl}/getAllStudent`).then(
            (res)=>{
                    console.log(res.data);
                    toast.success("This is all student")

            },(error)=>{
               console.log(error);
               toast.error("Somthing went wrong")
            }
        );
    }
  return (
    <div>
      <h1>List Of All Student</h1>

      {
        student.length>0?student.map((item)=>{
            return <Student key={item.id} students={item}/>
            
        }):"Not found"
      }
      
    </div>
  )
}

export default AllStudent
