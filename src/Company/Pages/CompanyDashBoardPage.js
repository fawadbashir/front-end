import React, { useState } from 'react'
import Students from '../../Student/Pages/Students'
import CompanyForm from '../Components/CompanyForm'

const CompanyDashBoardPage = () => {
    //If company is register then rendered students list render CompanyForm
    //registeration role will be defined from user Form
    const [isRegistered, setIsRegistered] = useState(false)

    return (
        <div>
            {isRegistered ? <Students /> : <CompanyForm />}
        </div>
    )

}

export default CompanyDashBoardPage
