import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../Context/auth-context'



const LoginForm = (props) => {

    const auth = useContext(AuthContext)
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = (data) => {

        auth.login()
        props.onSubmit({ email: data.email, password: data.password })
        console.log(data)

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <input type="text" name='email' placeholder='E-mail' ref={register({ required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i })} />
            {(errors.email && errors.email.type === 'pattern') && <p>Enter an E-mail</p>}
            <input type="password" name='password' ref={register} placeholder='Password' />
            {(errors.password && errors.password.type === 'required') && <p>Enter a password</p>}
            <button type='submit'>Login</button>
        </form>
    )
}

export default LoginForm