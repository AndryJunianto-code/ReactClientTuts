import React, {useState, useEffect} from 'react'
import './home.css';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import axios from 'axios'
import { useLocation } from 'react-router-dom';
export default function Home() {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();
    const fetchPosts = async () => {
        const res = await axios.get(`/posts/${search}`)
        setPosts(res.data)
    }
    useEffect(()=> {
        fetchPosts()
    }, [search])
    
    return (
        <>
        <Header/>
        <div className='home'>
            <Posts posts={posts}/>
            <Sidebar/>
        </div>
        </>
    )
}
