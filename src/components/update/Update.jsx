import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// step 1
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// end of step 1

import './update.scss';


const Update = ({id,blog,remove}) => {
    // console.log(blog);
    let [title, setTitle] = useState(blog.title);
    let [author, setAuthor] = useState(blog.author);
    let [content, setContent] = useState(blog.content);
    let redirect = useNavigate();


    let toUpt ={
        title,
        author,
        content
    }

    // step 2
    const notify = () => toast.success("Blog Created successfully!",{
        theme: "dark",
        position: "top-center",
        autoClose: 2000,
      });
    // end of step 2
    

    function handleSubmit (e) {
        e.preventDefault(e);
        // console.log(toUpt);
        axios.patch(`http://localhost:8000/blogs/${id}`, toUpt)
            .then(res => {
                console.log(`Blog with id of ${id} was updated Successfully!`)

                // step 3
                notify();  
                // end of step 3

                setTimeout(() => {
                    redirect('/blog');
                }, 2000);
            })
            .catch(err => {
                console.log(err.message);
            })
    }


  return (
    <div className='update'>
        <h1>Blog Update for Blog No. {id}</h1>
        <div className="form">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="">Title</label>
                <div></div>
                <input className='title'
                type="text" 
                name='title'
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                />
                <div></div>
                <label htmlFor="">Content</label>
                <div></div>
                <textarea 
                className='area'
                name="content" 
                value={content} onChange={(e)=> setContent(e.target.value)} 
                cols="60" 
                rows="10"></textarea>
                <div></div>
                <label htmlFor="">Author</label>
                <select 
                name="author" 
                value={author} onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="Mrs Chinwe">Mrs Chinwe</option>
                    <option value="Miss Afome">Miss Afome</option>
                    <option value="Mr. James">Mr. James</option>
                    <option value="Miss Chichi">Miss Chichi</option>
                    <option value="Mr Emmanuel">Mr Emmanuel</option>
                </select>


                <div className="btn">
                    <button className='cancel' onClick={() => remove(false)}>Cancel</button>
                    <Link to={'/blog/'}>Cancel</Link>
                    <button className='blog'>Update Blog</button>
                </div>
            </form>
        </div>


        {/* step 4 */}
        <ToastContainer />
        {/* end of step 4 */}
    </div>
  )
}

export default Update