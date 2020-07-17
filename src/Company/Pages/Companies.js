import React,{ useEffect, useState, useContext} from 'react'
import {AuthContext} from '../../Shared/Context/auth-context'

import {useHttpClient} from '../../Shared/Hooks/http-hook'
import CompanyList from '../Components/CompanyList'

const Companies = (props) => {

   const {isLoading, error, sendRequest, clearError} = useHttpClient()
   const [companiesList, setCompanesList] = useState([])
    const auth = useContext(AuthContext)
    
    useEffect(() => {
        
        sendRequest('http://localhost:5000/companies','GET',null, {Authorization : `Bearer ${auth.token}`})
        .then((responseData) => {
            console.log(responseData)
            setCompanesList(responseData)
        }).catch(e => console.log(e))
        return () => {}
             
    }
    ,[sendRequest,auth.token])
          
        
        return (
        <> <CompanyList companiesList= {[]} /></>
    )
}

export default Companies