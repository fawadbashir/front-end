import React, { useEffect,useState, useContext } from 'react'
import { useHttpClient } from '../../Shared/Hooks/http-hook'
import JobList from '../Components/JobList'
import { AuthContext } from '../../Shared/Context/auth-context'


const Jobs = () => {

    const [jobList, setJobList] = useState([])
    
    const {isLoading, error, sendRequest, clearError} = useHttpClient()
    const auth = useContext(AuthContext)

    useEffect(() => {
      sendRequest('http://localhost:5000/jobs','GET',null,{Authorization : `Bearer ${auth.token}`})
     .then((responseData) => {
         console.log(responseData)
        setJobList(responseData.jobs)
        
     } ).catch((e) => console.log(e))
    },[])
    return (
        <JobList jobList={jobList} token={auth.token} />
    )
}

export default Jobs
