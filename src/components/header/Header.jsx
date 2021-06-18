import React from 'react'
import './header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg" alt="headerimg" className='headerImg'/>
        </div>
    )
}
