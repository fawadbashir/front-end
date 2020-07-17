import React, { useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form'
import { AuthContext } from '../Context/auth-context'



  
  const LoginForm = (props) => {
      
  
    const auth = useContext(AuthContext)
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = (data) => {

        
        props.onSubmit({ email: data.email, password: data.password })
        console.log(data)

    }

    return (
        <form  onSubmit={handleSubmit(onSubmit)}  >
      <Grid container direction='column' spacing={1} justify='center' alignItems='center' >
          <Grid item>
            <TextField   autoFocus  margin='normal'  type="text" name='email' label='E-mail' error={errors.email}  inputRef={register({ required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i })} />     
          </Grid>
          <Grid item>
            <TextField   margin='normal' label='Password' error={errors.password} type="password"  name='password' inputRef={register({required : true})}  />
            </Grid>
        <Grid item>
            <Button disableElevation color='primary' variant='contained'  type='submit'>Login</Button>
            </Grid>
        </Grid>
        </form> 
        
        


    )
}

export default LoginForm