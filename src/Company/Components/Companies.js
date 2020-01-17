import React from 'react'
import CompanyList from '../Components/CompanyList'

const Companies = () => {
    const companyList = [{ id: 'uid3', name: 'Toyota', address: 'tokyo,Japan' }]
    return (
        <div>
            <CompanyList companyList={companyList} />
        </div>
    )
}

export default Companies
