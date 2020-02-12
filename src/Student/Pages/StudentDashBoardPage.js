import React, { useState } from 'react'
import Companies from '../../Company/Pages/Companies'
import StudentForm from '../Components/StudentForm'

const StudentDashBoardPage = () => {
    const [isRegistered, setIsRegistered] = useState(true)
    return (
        <div>
            {!isRegistered ? <Companies /> : <StudentForm />}
            hello
        </div>
    )
}

export default StudentDashBoardPage
