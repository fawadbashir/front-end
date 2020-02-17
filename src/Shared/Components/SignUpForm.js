import React from 'react'
import { useForm } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'

const SignUpForm = (props) => {

    const { register, handleSubmit, errors } = useForm()

    const onSubmit = (data) => {

        props.onSubmit({
            name: data.name,
            email: data.email,
            password: data.password,
            age: data.age,
            role: data.role
        })
        console.log(data.age)
    }
    return (
        <form action="post" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name</label>
            <TextField type="text" name='name' inputRef={register({ required: true, maxLength: 25, minLength: 7 })} />
            {(errors.name && errors.name.type === 'required') && <p>This is Required</p>}
            {(errors.name && errors.name.type === ('minLength' || 'maxLength')) && <p>The min, max Length for this Field are 7 and 25 . </p>}
            <label htmlFor="email">E-mail</label>
            <TextField type="text" name='email' inputRef={register({ required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i })} />
            {(errors.email && errors.email.type === 'pattern') && <p>Enter an E-mail</p>}
            <label htmlFor="password">Password</label>
            <TextField type="text" name='password' inputRef={register({ required: true })} />
            {(errors.password && errors.password.type === 'required') && <p>Enter a password</p>}
            <label htmlFor="age">age</label>
            <TextField type="number" name='age' inputRef={register({ required: true, min: 18, max: 50 })} min='18' max='50' />
            <select name="role" inputRef={register}>Select Your Role
                <option value="student">Student</option>
                <option value="company">Company</option>
                <option value="admin">Admin</option>
            </select>
            <button type='submit'>Sign Up</button>
        </form>
    )
}
export default SignUpForm