import React from 'react'
import { useForm } from 'react-hook-form'



const LoginForm = () => {

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {

        console.log(data)

    }

    return (
        <form action="post" onSubmit={handleSubmit(onSubmit)} >
            <input type="text" name='email' placeholder='E-mail' />
            <input type="password" name='password' ref={register} placeholder='Password' />
            <select ref={register} name="userType">Select a User Type
            <option value="Company">Company</option>
                <option value="Student">Student</option>
            </select>
            <button type='submit'>Login</button>
        </form>
    )
}

export default LoginForm