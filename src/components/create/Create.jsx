import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './create.scss';


const Create = () => {
    // console.log(blog);
    let [title, setTitle] = useState('');
    let [author, setAuthor] = useState('');
    let [content, setContent] = useState('');
    let [disable, setDisable] = useState(false);
    let redirect = useNavigate();

    const notify = () => toast.success("Blog Created successfully!",{
        theme: "dark",
        position: "top-center",
        autoClose: 2000,
      });

    let toUpt ={
        title,
        author,
        content
    }

    function handleSubmit (e) {
        e.preventDefault(e);
        setDisable(true);
        // console.log(toUpt);
        axios.post(`http://localhost:8000/blogs`, toUpt)
            .then(res => {
                console.log(`Blog Created Successfully!`)

                notify();
                
                setTimeout(() => {
                    redirect('/blog');
                }, 2000);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    function cancel() {
        redirect('/blog');
    }


  return (
    <div className='update'>
        <h1>Create a New Blog</h1>
        <div className="form">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="">Title</label>
                <div></div>
                <input required
                type="text" 
                name='title'
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                />
                <div></div>
                <label htmlFor="">Content</label>
                <div></div>
                <textarea required
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
                    <button className='cancel' onClick={() => cancel()}>Cancel</button>
                    <Link to={'/blog'}>back to blog</Link>
                    <button className='blog' disabled={disable}>Create Blog</button>
                </div>
            </form>
        </div>
        {/* (e)currentTaget.disable = true */}


        <ToastContainer />

    </div>
  )
}

export default Create