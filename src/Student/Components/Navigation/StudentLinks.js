import React from 'react'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'




const StudentLinks = ({ auth }) => {


    const logOut = () => auth.logout()
    return (
        <>
               <Button color="secondary" component = {NavLink} to='/'>View Companies</Button> 
                <Button  component = {NavLink} to='/student/jobs'>View Jobs</Button>
                
                <Button variant='contained' color="primary" onClick={logOut}>Log Out</Button>
</>
            
    )
}

export default StudentLinks
