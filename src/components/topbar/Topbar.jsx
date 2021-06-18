import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../contex/Context'
import './topbar.css'

export default function Topbar() {
    const {user, dispatch} = useContext(Context)

    const handleLogout = () => {
        dispatch({type:'LOGOUT'})
    }
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem'>
                        <Link to='/' className='link'>Home</Link>
                    </li>
                     <li className="topListItem">
                         <Link to='/' className='link'>About</Link>
                         </li>
                     <li className="topListItem">
                     <Link to='/' className='link'>Contact</Link>
                     </li>
                     <li className="topListItem">
                         <Link to='/write' className='link'>Write</Link>
                         </li>
                     <li className="topListItem" onClick={handleLogout}>
                         {user && "LOGOUT"}
                     </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? ( <Link className='link' to='/settings'><img className='topImg' src={user.profilePic} alt="image" /></Link>)
                : (
                    <ul className='topList'>
                        <li className="topListItem"><Link className='link' to='/login'>Login</Link></li>
                        <li className="topListItem"><Link className='link' to='/register'>Register</Link></li>  
                    </ul>
                )}
                <i className=' topSearchIcon fas fa-search'></i>
            </div>
        </div>
    )
}

