import React from 'react'
import { useForm } from 'react-hook-form'




const CompanyForm = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <form action="post" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="company">Company Name</label>
            <input type="text" ref={register} name='company' />
            <label htmlFor="address">Company Address</label>
            <input type='text' ref={register} name='address' />

            <button type='submit'>Create Company</button>
        </form>
    )
}
export default CompanyForm