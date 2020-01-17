import React from 'react'
import { NavLink } from 'react-router-dom'


const NavLinks = () => {

    return (
        <ul>
            <li>
                <NavLink exact to='/student/view/companies'>View Companies</NavLink>
                <NavLink to='/student/jobs'></NavLink>
                <NavLink to='/login'>Login</NavLink>

            </li>
        </ul>
    )
}

export default NavLinks
