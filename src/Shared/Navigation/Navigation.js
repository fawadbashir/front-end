import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'

import { AuthContext } from '../Context/auth-context'
import Header from './Header'
import StudentLinks from '../../Student/Components/Navigation/StudentLinks'
import CompanyLinks from '../../Company/Components/Navigation/CompanyLink'

const Navigation = () => {

    const auth = useContext(AuthContext)

    let userNavigation = () => {
        if (auth.isLoggedIn && auth.userType === 'student') {
            return <StudentLinks auth={auth} />
        }
        else if (auth.isLoggedIn && auth.userType === 'company') {
            return <CompanyLinks auth={auth} />
        }
    }
    return (
        <Header>
            <h1>
                <Link to='/'>Campus Placement</Link>
            </h1>
            <nav>
                {userNavigation()}
                {!auth.isLoggedIn && <NavLink to='/'>Authenticate</NavLink>}
            </nav>

        </Header>
    )
}

export default Navigation
