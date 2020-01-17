import React from 'react'
import { useForm } from 'react-hook-form'

const NewJobForm = () => {

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <h1>Create New Job</h1>
            <form action="post" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="description">Job Description</label>
                <input type="text" name='description' ref={register} />
                <label htmlFor="pay">Job Pay</label>
                <input type="text" name='pay' ref={register} />
                <label htmlFor="qualification">Qualification</label>
                <select name="qualification" ref={register}>
                    <option value="bsc">B.S.C</option>
                    <option value='bcom'>B.COM</option>
                    <option value='ba'>B.A</option>
                </select>
                <button type='submit'>Create Job</button>
            </form>
        </div>
    )
}

export default NewJobForm
