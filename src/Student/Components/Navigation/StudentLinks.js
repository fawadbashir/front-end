import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'




const StudentLinks = ({ auth }) => {


    const logOut = () => auth.logout()
    return (
        <ul>
            <li>
                <NavLink exact to='/student/view/companies'>View Companies</NavLink>
                <NavLink to='/student/jobs'>View Jobs</NavLink>
                <NavLink to='/'><button onClick={logOut}>Log Out</button></NavLink>

            </li>
        </ul>
    )
}

export default StudentLinks
