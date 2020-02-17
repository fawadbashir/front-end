import React,{ useEffect, useState} from 'react'
import {useHttpClient} from '../../Shared/Hooks/http-hook'
import CompanyList from '../Components/CompanyList'

const Companies = (props) => {

   const [isLoading, error, sendRequest, clearError] = useHttpClient()

    const [tokenState, setToken] = useState('')

    
    useEffect(() => {
        const json = localStorage.getItem('token')
        const token =  JSON.parse(json)
        setToken(token) 
    
},[sendRequest])
    console.count(tokenState)
    useEffect(() => {

        sendRequest('http://localhost:5000/companies','GET',null, {Authorization : tokenState})
        .then((responseData) => console.log(responseData)).
        catch(e => console.log(e))
    }
    
    ,[tokenState,sendRequest])
        
        
        
        
        return (
        <> <CompanyList companiesList={[]} /></>
    )
}

export default Companies