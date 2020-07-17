import React from 'react'

const CompanyItem = (props) => {
    return (
        <div>
            <p>{props.name} {props.address}</p>
            
        </div>
    )
}

export default CompanyItem