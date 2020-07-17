import React from 'react'
import StudentList from '../Components/StudentList'

const Students = () => {
    const studentsList = [{
        firstName: 'Fawad',
        lastName: 'Bashir',
        age: '22',
        email: 'bikerz.bashir@gmail.com',
        id: 'uid3'
    }]
    return (
        <StudentList studentsList={studentsList} />
    )
}

export default Students
