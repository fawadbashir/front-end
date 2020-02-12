import React from 'react'
import { useForm } from 'react-hook-form'

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
            <input type="text" name='name' ref={register({ required: true, maxLength: 25, minLength: 7 })} />
            {(errors.name && errors.name.type === 'required') && <p>This is Required</p>}
            {(errors.name && errors.name.type === ('minLength' || 'maxLength')) && <p>The min, max Length for this Field are 7 and 25 . </p>}
            <label htmlFor="email">E-mail</label>
            <input type="text" name='email' ref={register({ required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i })} />
            {(errors.email && errors.email.type === 'pattern') && <p>Enter an E-mail</p>}
            <label htmlFor="password">Password</label>
            <input type="text" name='password' ref={register({ required: true })} />
            {(errors.password && errors.password.type === 'required') && <p>Enter a password</p>}
            <label htmlFor="age">age</label>
            <input type="number" name='age' ref={register({ required: true, min: 18, max: 50 })} min='18' max='50' />
            <select name="role" ref={register}>Select Your Role
                <option value="student">Student</option>
                <option value="company">Company</option>
                <option value="admin">Admin</option>
            </select>
            <button type='submit'>Sign Up</button>
        </form>
    )
}
export default SignUpForm