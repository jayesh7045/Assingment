import React, { useEffect, useState } from 'react'
import Card from './Card';
import axios from "axios"
import Navbar from './Navbar';
function UserBlogs() {
    const [blogs, setBlogs] = useState([]);
    const getB = async() =>{
        try{
            const id = localStorage.getItem("userId");
            console.log(id);
            const {data} = await axios.get(`http://localhost:8001/api/v1/blog/user-blog/${id}`)
            console.log(data.userBlog.blogs);
            if(data?.userBlog.blogs)
            {
                setBlogs(data.userBlog.blogs);
            }
        }
        catch(error)
        {
            console.log("Some Technical Error has occured");
        }
    }
    useEffect(()=>{
        getB();
    }, [])
  return (
    <div>
        <Navbar></Navbar>
        {blogs.length == 0 ? <h1 className='font-bold mt-5 text-xl'>You have not created any blog</h1> : ""}
        {blogs.map((b, index)=>{
        return (<Card blog = {b}/>)

      })}
    </div>
  )
}

export default UserBlogs
