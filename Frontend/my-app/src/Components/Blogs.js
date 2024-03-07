import React, {useState, useEffect} from 'react'
import Navbar from './Navbar';
import axios from "axios"
import Card from './Card';
import { useLocation } from 'react-router-dom';
function Blogs() {
    const location = useLocation()
    const [blogs, setBlogs] = useState([]);
    const image = location.state?.myimage
    console.log(image)
    const getBlogs = async()=>{
        try{
            const {data} = await axios.get("http://localhost:8001/api/v1/blog/all-blog")
            if(data?.success)
            {
                console.log(blogs.length);
                setBlogs(data?.blogs)
            }
            else
            {
              alert("Please Enter the Title and description")

            }
        }
        catch(err)
        {
          alert("Please Enter the Title and description")
            console.log(err);
        }
    }
    useEffect(()=>{
        getBlogs() 
    }, [])
  return (
    <div>
      <Navbar image = {image}></Navbar>
      { 
        blogs.length > 0 && blogs.map((blog, index)=>{
            return <Card blog = {blog}></Card>
        })
      }
    </div>
  )
}

export default Blogs
