import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const SignUpForm = (props) => {
  const { register, handleSubmit, errors, control } = useForm({
    defaultValues: 'student',
  })

  const onSubmit = (data) => {
    props.onSubmit({
      name: data.name,
      email: data.email,
      password: data.password,
      age: data.age,
      role: data.role,
    })
    console.log(data)
  }

  return (
    <form action='post' onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} direction='column' justify='center'>
        <Grid item>
          <TextField
            autoFocus
            type='text'
            name='name'
            label={errors.name ? 'Min : 7 Max :25' : 'Name'}
            error={errors.name ? true : false}
            inputRef={register({ required: true, maxLength: 25, minLength: 7 })}
          />
        </Grid>
        <Grid item>
          <TextField
            type='text'
            name='email'
            label='E-mail'
            id='filled-basic'
            error={errors.email && true}
            inputRef={register({
              required: true,
              pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i,
            })}
          />{' '}
        </Grid>

        <Grid item>
          <TextField
            type='password'
            label='Password'
            name='password'
            error={errors.password && true}
            inputRef={register({ required: true })}
          />
        </Grid>
        <Grid item>
          <TextField
            type='number'
            label='Age 18-50'
            name='age'
            error={errors.age && true}
            inputRef={register({ required: true, min: 18, max: 50 })}
            min='18'
            max='50'
          />
        </Grid>

        <Grid item style={{ width: 'auto' }}>
          <FormControl style={{ width: '100%' }}>
            <InputLabel id='demo-simple-select-helper-label'>
              User Type
            </InputLabel>
            <Controller
              name='role'
              inputRef={register}
              defaultValue=''
              control={control}
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              as={
                <Select>
                  <MenuItem value='student'>Student</MenuItem>
                  <MenuItem value='company'>Company</MenuItem>
                  <MenuItem value='Admin'>Admin</MenuItem>
                </Select>
              }
            />
          </FormControl>
        </Grid>
        <Grid item style={{ textAlign: 'center' }}>
          <Button variant='contained' color='primary' type='submit'>
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
export default SignUpForm
