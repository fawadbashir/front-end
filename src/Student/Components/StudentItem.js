import React from 'react'

const StudentItem = (props) => {
    return (
        <div>
            <p>{props.firstName} {props.lastName}</p>
            <p>{props.age}</p>
            <p>{props.email}</p>
        </div>
    )
}

export default StudentItem
