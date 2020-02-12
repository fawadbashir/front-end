import React, { useState, useContext } from 'react'
import { AuthContext } from '../Context/auth-context'
import { useHttpClient } from '../Hooks/http-hook'
import LoginForm from '../Components/LoginForm'
import SignUpFrom from '../Components/SignUpForm'

// import Button from '@material-ui/core/Button'

const HomePage = () => {

    const auth = useContext(AuthContext)

    const [isLoginMode, setIsLoginMode] = useState(true)
    const [isLoading, error, sendRequest, clearError] = useHttpClient()

    const setMode = () => {
        setIsLoginMode(prevMode => !prevMode)
    }

    const authSubmit = (data) => {



        if (isLoginMode) {
            sendRequest('http://localhost:5000/users/login', 'POST', JSON.stringify(data), {
                'Content-Type': 'application/json'
            }).then((data) => console.log(data)).catch((e) => console.log(e))

            //         try {
            //             const response = await fetch('http://localhost:5000/users/login', {
            //                 method: 'POST',
            //                 headers: {
            //                     'Content-Type': 'application/json'
            //                 },
            //                 body: JSON.stringify(data)
            //             })
            //             const responseData = await response.json()
            //             console.log(responseData)
            //             // setIsLoading(false)
            //             auth.login()

            //         } catch (e) {
            //             console.log(e)
            //             setIsError(true)
            //         }
            //         // setIsLoading(false)


        } else {
            sendRequest('http://localhost:5000/users', 'POST', JSON.stringify(data), {
                'Content-Type': 'application/json'
            }).then((data) => console.log(data))
            //         try {
            //             setIsLoading(true)
            //             const response = await fetch('http://localhost:5000/users', {
            // method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            // body: JSON.stringify(data)
            //             })
            //             const responseData = await response.json()
            //             console.log(responseData)

            auth.login()
            // console.log(responseData)
            //         } catch (e) {
            //             setIsLoading(false)
            //             setIsError(true)
            //         }
            //         setIsLoading(false)
        }


    }


    return (
        <>
            <h1>Welcome to Campus Recruitment</h1>
            {isLoginMode ? <LoginForm onSubmit={authSubmit} /> : <SignUpFrom onSubmit={authSubmit} />}
            {/* {isLoading && <p>Hello</p>} */}

            <button onClick={setMode}>Switch To {isLoginMode ? 'Sign Up' : 'Login'} </button>
        </>

    )
}

export default HomePage