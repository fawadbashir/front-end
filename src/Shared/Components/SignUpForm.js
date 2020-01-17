import React from 'react'
import { useForm } from 'react-hook-form'

const SignUpForm = () => {

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <form action="post" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name='firstName' ref={register} />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name='lastName' ref={register} />
            <label htmlFor="email">E-mail</label>
            <input type="text" name='email' ref={register} />
            <label htmlFor="password">Password</label>
            <label htmlFor="age">age</label>
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