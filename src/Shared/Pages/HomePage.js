import React, { useState, useContext, useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box'

import { AuthContext } from '../Context/auth-context'
import { useHttpClient } from '../Hooks/http-hook'
import LoginForm from '../Components/LoginForm'
import SignUpFrom from '../Components/SignUpForm'



const HomePage = () => {

    const auth = useContext(AuthContext)

    const [isLoginMode, setIsLoginMode] = useState(true)
    const [isLoading, error, sendRequest, clearError] = useHttpClient()
    const [token, setToken] = useState('Bearer ')

    
    const setMode = () => {
        setIsLoginMode(prevMode => !prevMode)
    }

    useEffect(() => {
        const json = JSON.stringify(token)
        localStorage.setItem('token',json)
    },[token])

    const authSubmit = (data) => {
        if (isLoginMode) {
            sendRequest('http://localhost:5000/users/login', 'POST', JSON.stringify(data), {
                'Content-Type': 'application/json'
            }).then((responseData) => {
                
                setToken(token => token.concat(responseData.token))

                auth.login(responseData.user.role)

            }).catch((e) => {
                console.log(e)

            })

        } else {

            sendRequest('http://localhost:5000/users', 'POST', JSON.stringify(data), {
                'Content-Type': 'application/json'
            }).then((responseData) => {

                auth.login(responseData.user.role)
            }).catch((e) => {
                console.log(e)

            })


        }


    }
    const useStyles = makeStyles(theme => ({
        root: {

            // flexGrow: 1,
            textAlign: 'center',
            // height: '100vh',
            marginTop : '50px',
            


            // width: '75%',
            '& > * + *': {
                marginLeft: theme.spacing(2),
            }

        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid justify='center' container>
                <Grid item lg={12} xs={12} align='center'>
                    <Typography variant='h2'>Welcome to Campus Recruitment</Typography>
                </Grid>
            </Grid>

            {isLoading ? <CircularProgress /> :
                <>



                 <Grid container justify='center' align='center' style={{marginTop : '20px'}} >
                    {isLoginMode ?
                        <LoginForm onSubmit={authSubmit} />
                        :

                        <SignUpFrom onSubmit={authSubmit} />
                    }   </Grid>
                    
                                    <Grid container align='center' justify='center'>
                        <Grid item xs={12} lg={12} style={{marginRight : '20px'}}>
                            <Box m={13}>
                    </Box>
                    <Button variant='contained' color='secondary' onClick={setMode}>Switch To {isLoginMode ? 'Sign Up' : 'Login'} </Button>
                    </Grid>
                    </Grid>
                    



                </>

            }

        </div>

    )
}

export default HomePage