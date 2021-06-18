import React, {useState, useEffect} from 'react'
import './sidebar.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Sidebar() {
    const [cats, setCats] = useState([])

    const getCats = async ()=> {
        const res = await axios.get('/categories')
        setCats(res.data)
    }
    useEffect(()=> {
        getCats()
    }, [])
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://images.pexels.com/photos/4755029/pexels-photo-4755029.jpeg" alt="IMAGE" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam perferendis quod accusamus molestias est eaque nobis laudantium. Accusantium non </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c,index) => (
                        <Link to={`/?cat=${c.name}`} className='link' key={index}>
                            <li className="sidebarListItem" key={index}>{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
