import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import { blogs } from '../offline/blogs';
import axios from 'axios';
import Loader from './../loader/Loader';
import "./blog.scss";


const Blog = () => {
    let [Blogs, setBlogs] = useState([]);
    let [loader, setLoader] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8000/blogs')
        .then(res => {
            setTimeout(() => {
                setBlogs(res.data);
                setLoader(false);
            }, 1000);
        })
        .catch(err =>{
            console.log(err.message);
        })
    }, []);


  return (
    <div className='blog'>
        <h1>Latest Blogs</h1>
        {loader && <Loader />}
        {!loader && Blogs && Blogs.map(blog =>{
            return <div className="my_blogs" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.content.slice(0,50)}...</p>
                <h5>{blog.author}</h5>
                <Link to={`/blog/${blog.id}`}>Read more!</Link>
            </div>
        })}
    </div>
  )
}

export default Blog