import React, { useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form'
import { AuthContext } from '../Context/auth-context'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
    root: {
        height :100,
        
      '& > *': {
        margin: theme.spacing(1),
        // width: 200,
        
      },
    },
  }));
  
  const LoginForm = (props) => {
      
  const classes = useStyles()    
    const auth = useContext(AuthContext)
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = (data) => {

        auth.login()
        props.onSubmit({ email: data.email, password: data.password })
        console.log(data)

    }

    return (
       
      
        <form  onSubmit={handleSubmit(onSubmit)} className={classes.root} >
        <Grid item md={12}  lg={12}>
            <TextField  margin='normal'  type="text" name='email' placeholder='E-mail' inputRef={register({ required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i })} />
            </Grid>
            {(errors.email && errors.email.type === 'pattern') && <p>Enter an E-mail</p>}
            <Grid item md={12} lg={12}>
            <TextField  margin='normal' type="password"  name='password' inputRef={register} placeholder='Password' />
            </Grid>
            {(errors.password && errors.password.type === 'required') && <p>Enter a password</p>}
            <Grid item md={12} lg={12}>
            <Button  variant='contained' color='primary' type='submit'>Login</Button>
            </Grid>
        </form>
        
        
        


    )
}

export default LoginForm