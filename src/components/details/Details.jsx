import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Update from './../update/Update';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import {RiArrowGoBackFill} from 'react-icons/ri'

const Details = () => {
  let {id} = useParams();
  let [blog, setBlog] = useState(null);
  let [show, setShow] = useState(false);
  let redirect = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/blogs/${id}`)
    .then(res => {
      setBlog(res.data);
    })
    .catch(err =>{
      console.log(err.message);
    })
  }, [id]);


  function handleDelete () {
    axios.delete(`http://localhost:8000/blogs/${id}`)
    console.log(`Blog with id of ${id} deleted Successfully`);


    setTimeout(() => {
      redirect('/blog')
    }, 2000);
  }
  return (
    <div className='details_'>
      {
      !show && blog && <div className="details__" key={blog.id}>
      <h1>Blog Details with id of {id}</h1>
      <h2> {blog.title} </h2>
      <p> {blog.content} </p>
      <h5> {blog.author} </h5>
      <div className="btn">
        <button className='del' onClick={() => handleDelete()}title='Delete Blog'><AiFillDelete/></button>
        <Link to={'/blog'} title='Back'><button><RiArrowGoBackFill /> </button></Link>
        <button className='edit' onClick={() => setShow(true)} title='Edit Blog'><AiFillEdit /></button>
      </div>

      </div>
      }

      {
        show && <Update id={id} blog={blog && blog} remove={setShow} />
      }
    </div>
  )
}

export default Details