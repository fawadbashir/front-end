import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'




import { AuthContext } from '../Context/auth-context'
import Header from './Header'
import StudentLinks from '../../Student/Components/Navigation/StudentLinks'
import CompanyLinks from '../../Company/Components/Navigation/CompanyLink'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: 'none',
        color: 'inherit',
        font: 'inherit'
    }
}))

const Navigation = () => {

    const auth = useContext(AuthContext)
    const classes = useStyles()



    let userNavigation = () => {
        if (auth.userId && auth.userType === 'student') {
            return <StudentLinks auth={auth} />
        }
        else if (auth.userId && auth.userType === 'company') {
            return <CompanyLinks auth={auth} />
        }
    }
    return (

        <Header>
            {userNavigation()}
        </Header>
    )
}

export default Navigation

