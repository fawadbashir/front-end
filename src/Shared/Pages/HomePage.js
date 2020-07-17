import React, { useState, useContext } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'


import { AuthContext } from '../Context/auth-context'
import { useHttpClient } from '../Hooks/http-hook'
import LoginForm from '../Components/LoginForm'
import SignUpFrom from '../Components/SignUpForm'
import road from '../../Assets/road-nature-trees-branches-38537.jpg'



const useStyles = makeStyles((theme) => ({
    content: {
        marginTop: '2rem'

    },
    
    modeButton: {
        [theme.breakpoints.down('md')]: {
            marginTop: '2em'
        },
        
    },
    card: {
        width : '20rem'
    },
    imageBackground : {
        backgroundImage : `url(${road})`,
        position : 'absolute',
        height :'100%',
        width : '100vw',
        backgroundSize : 'cover',
        backgroundPosition : 'center',
        top : 0,
        zIndex : -1
    }
    
}))

const HomePage = () => {

    const auth = useContext(AuthContext)
    const classes = useStyles()
    const [isLoginMode, setIsLoginMode] = useState(true)
    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    const setMode = () => {
        setIsLoginMode(prevMode => !prevMode)
    }



    const authSubmit = (data) => {
        if (isLoginMode) {
            sendRequest('http://localhost:5000/users/login', 'POST', JSON.stringify(data), {
                'Content-Type': 'application/json'
            }).then((responseData) => {
                console.log(responseData)

                auth.login(responseData.user._id, responseData.user.role, responseData.token)

            }).catch((e) => {
                console.log(e)

            })

        } else {

            sendRequest('http://localhost:5000/users', 'POST', JSON.stringify(data), {
                'Content-Type': 'application/json'
            }).then((responseData) => {

                auth.login(responseData.user._id, responseData.user.role, responseData.token)
            }).catch((e) => {
                console.log(e)

            })


        }


    }


    return (
        <>
        <Grid container  alignItems='center' justify='center' direction='column'  className={classes.content}>
            <Grid item >
                <Typography variant='h3' align='center'>Campus Recruitment</Typography>
            </Grid>

            <Grid item>
            
                <Grid container style={{minHeight : '22rem'}} direction='row' alignItems='center' justify='center'>
                    <Grid item  >

                        {isLoginMode ? <LoginForm onSubmit={authSubmit} /> : <SignUpFrom onSubmit={authSubmit} />}

                    </Grid> 
                    <Grid item
                        style={{marginTop : '1.8rem'}}
                    >                     
                        
                        <Button disableElevation
                            className={classes.modeButton}
                            variant='contained'
                            color='secondary'
                            onClick={setMode}>Switch To {isLoginMode ? 'Sign Up' : 'Login'} </Button>
                    </Grid>

                </Grid>
                 
            </Grid>

                    </Grid>
                    <div className= {classes.imageBackground}/>
    </>
        
    )
}

export default HomePage