import React, {useContext, useEffect, useState} from 'react'
import { useLocation, Link } from 'react-router-dom';
import './singlePost.css'
import axios from 'axios';
import { Context } from '../../contex/Context';

export default function SinglePost() {
  const [post,setPost] = useState({})
  const location = useLocation();
  const path = location.pathname.split('/')[2]
  const {user} = useContext(Context)
  const PF = 'http://localhost:5000/images/'

  const [title,setTitle] = useState('')
  const [desc,setDesc] = useState('')
  const [updateMode, setUpdateMode] = useState(false);

  const getPost = async ()=> {
    const res = await axios.get(`/posts/${path}`)
    setPost(res.data)
    setTitle(res.data.title)
    setDesc(res.data.desc)
  }

  const handleUpdate = async () => {
    try{
      await axios.put(`/posts/${path}`, {
          username: user.username, title,desc
      })
      setUpdateMode(false)
    } catch(err) {
      console.log(err)
    }
  }

  const handleDelete = async ()=> {
    try{
      await axios.delete(`/posts/${path}`, {
        data: {
          username: user.username //ONLY DELETE NEED THIS KIND OF 'DATA'
        }
      })
      window.location.replace('/')
    } catch(err) {
      console.log(err)
    }
  }
  useEffect(()=> {
   getPost()
  }, [path])
    return (
      <div className="singlePost">
        <div className="singlePostWrapper">
          {post.photo && (
             <img
             className="singlePostImg"
             src={PF + post.photo}
             alt=""
           />
          )}
          {updateMode ? <input type='text' value={title} onChange={(e)=> setTitle(e.target.value)}className='singlePostTitleInput'/> : (
                <h1 className="singlePostTitle">
                {title}
                {post.username === user?.username && 
                <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit" onClick={()=> setUpdateMode(true)}></i>
                <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
              </div>}
              </h1>
          )}
        
          <div className="singlePostInfo">
            <span className='singlePostAuthor'>
                Author : <Link to={`/?user=${post.username}`} className='link'> <b>{post.username}</b></Link>
            </span>
            <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
          </div>
          {updateMode ? (
            <>
          <textarea className='singlePostDescInput' value={desc} onChange={(e)=> setDesc(e.target.value)}/>
          <button className="singlePostButton" onClick={handleUpdate}>Update</button>
          </>
          ) : (
          <p className="singlePostDesc">{desc}</p>
          )}
        </div>
      </div>
    );
  }
