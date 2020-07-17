import React,{useState, useContext, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { AuthContext } from '../../Shared/Context/auth-context'
import { useHttpClient } from '../../Shared/Hooks/http-hook' 
import StudentList from '../Components/StudentList'
import { CircularProgress } from '@material-ui/core'

const Students = () => {

    const [studentsList, setStudentsList] = useState([])
    const  {isLoading, error, sendRequest, clearError} = useHttpClient()
    const auth = useContext(AuthContext)

    useEffect(() => {
        sendRequest('http://localhost:5000/students','GET',null, {Authorization : `Bearer ${auth.token}`}).then((responseData) =>{
            // console.log(responseData)
            setStudentsList(responseData)
        }).catch((e) => console.log(e))
    
    },[sendRequest,auth.token])


    return (
        isLoading
            ?
            <CircularProgress />

            :
            <StudentList studentsList={[]} />
    )
}

export default Students
