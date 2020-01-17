import React from 'react'

const CompanyItem = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.Address}</p>
        </div>
    )
}

export default CompanyItem