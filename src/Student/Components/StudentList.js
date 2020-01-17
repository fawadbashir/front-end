import React from 'react'
import StudentItem from './StudentItem'

const StudentsList = (props) => {

    if (props.studentsList.length === 0) {
        return (<h1>No Users Found</h1>)
    }


    return (
        props.studentsList.map((student) => <StudentItem key={student.id} {...student} />)
    )

}

export default StudentsList


