import React from 'react'
import { useForm } from 'react-hook-form'


const StudentForm = () => {

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
            <label htmlFor="age">age</label>

            <input type="file" name='resume'>Upload Your Resume</input>>
            <button type='submit'>Sign Up</button>
        </form>
    )
}

export default StudentForm