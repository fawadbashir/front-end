import React from 'react'
import { NavLink } from 'react-router-dom'


const NavLinks = () => {

    return (
        <ul>
            <li>
                <NavLink exact to='/company/view/students'>Students</NavLink>
                <NavLink to='/company/jobs/new'>New Job</NavLink>
                <NavLink to='/login'>Login</NavLink>

            </li>
        </ul>
    )
}

export default NavLinks
