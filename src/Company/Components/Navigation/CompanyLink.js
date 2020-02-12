import React from 'react'
import { NavLink } from 'react-router-dom'




const CompanyLinks = ({ auth }) => {

    const logOut = () => auth.logout()
    return (
        <ul>
            <li>
                <NavLink exact to='/company/view/students'>Students</NavLink>
                <NavLink to='/company/jobs/new'>New Job</NavLink>
                <NavLink to='/' onClick={logOut}>Logout</NavLink>

            </li>
        </ul>
    )
}

export default CompanyLinks
