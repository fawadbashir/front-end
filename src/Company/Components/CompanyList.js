import React from 'react'
import CompanyItem from './CompanyItem'

const CompanyList = (props) => {
    if (props.companiesList.length === 0) {
        return (
            <h1>No Companies Found</h1>
        )
    }
    return (
        <div>
            <h1>List Of Companies</h1>
            <ul>{props.companiesList.map((company) => <CompanyItem key={company.id} {...company} />)}</ul>
        </div>
    )
}

export default CompanyList
