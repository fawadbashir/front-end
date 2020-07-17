import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    tabs : {
        marginLeft : 'auto'
    },
    tab : {
        ...theme.typography.tab,
        minWidth: '10px',
    marginLeft: '25px'
    },
    button : {
        borderRadius : '10px',
        margin : '0 25px 0 50px',
        color : 'white',
            backgroundColor : theme.palette.success.main,
        fontSize : '1rem',
        
        
    }
}))





const CompanyLinks = ({ auth }) => {

    
    
    const [value,setValue] = useState(0)
    const classes = useStyles()
    const logout = () => auth.logout(auth.token)
    
    
    useEffect(() => {
        switch(window.location.pathname) {
            case '/' :
            setValue(0)
            break
            case '/newjob' : 
            setValue(1)
            break
            case '/jobs/:jobid/applied' : 
            setValue(2)
            break
            default :
            setValue(0)
             break
        }
    },[value])


    return (
        <>
        <Tabs indicatorColor='primary' className={classes.tabs} value={value} onChange={(e,newValue) => setValue(newValue)}>
            <Tab className={classes.tab} component={Link} value={0} to='/' label='Home' />
            <Tab className={classes.tab} component={Link} value={1} to='/newjob' label='Create New Job'/>
            <Tab className={classes.tab} component={Link} value={2} to ='/jobs/:jobid/applied' label='Students List' />


        </Tabs>
            <Button className={classes.button} onClick={logout} variant='contained' color='secondary'>Log Out</Button>
        </>
    )
}

export default CompanyLinks
