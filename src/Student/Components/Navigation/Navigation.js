import React from 'react'
import { Link } from 'react-router-dom'

import Header from './Header'
import NavLinks from './NavLinks'

const Navigation = () => {
    return (
        <Header>
            <h1>
                <Link to='/'>Campus Placement</Link>
            </h1>
            <nav>
                <NavLinks />
            </nav>
        </Header>
    )
}

export default Navigation
