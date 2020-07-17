import React, {useContext} from 'react'
import Grid from '@material-ui/core/Grid'
import { useHistory } from 'react-router-dom'
import NewJobForm from '../Components/NewJobForm'
import { useHttpClient } from '../../Shared/Hooks/http-hook'
import { AuthContext } from '../../Shared/Context/auth-context'

const NewJob = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const {isLoading, error, sendRequest, clearError} = useHttpClient()

    const postJob = (data) => {
        console.log(data)
        sendRequest('http://localhost:5000/jobs','POST',JSON.stringify(data),{
           'Content-Type': 'application/json',
           Authorization : `Bearer ${auth.token}`
        }).then((responseData) => {
            if(responseData) {
                console.log(responseData)
                history.push('/')
            }
        
        })
        .catch((e) => console.log(e))
    }
    return (
        <>
        {/* Hello */}
            <NewJobForm onSubmit = {postJob} />
        </>
    )
}

export default NewJob
