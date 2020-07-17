import React, { useState, useEffect, useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import Box from '@material-ui/core/Box'
import SimpleDialog from '../../Shared/UIElements/SimpleDialog'
import Students from '../../Student/Pages/Students'
import CompanyForm from '../Components/CompanyForm'

import { useHttpClient } from '../../Shared/Hooks/http-hook'
import { AuthContext } from '../../Shared/Context/auth-context'


const CompanyDashBoardPage = () => {
    //If company is register then rendered students list render CompanyForm
    //registeration role will be defined from user Form
    const {isLoading, error, sendRequest, clearError} = useHttpClient()
    const [isRegistered, setIsRegistered] = useState(false)
    const [isFetching, setisFetching] = useState(false)
    const [open, setOpen] = useState(false)
    const auth = useContext(AuthContext)

    useEffect(() => {
        const getCompany = async () => {
            setisFetching(true)
            const response = await fetch(`http:localhost:5000/company/${auth.userId}`, {
                method: 'GET',
                headers: {

                    Authorization: `Bearer ${auth.token}`
                }
            })
            
           
            if (!response.ok) {
                setisFetching(false)
                setOpen(true)
                return setIsRegistered(false)
            }

            else if (response.ok) {
                setisFetching(false)
                return setIsRegistered(true)
            }



        }
        getCompany()
    }, [auth.userId, auth.token])

    const registerCompany = async (data) => {
        
        try {
            
            const responseData = await sendRequest('http://localhost:5000/companies', 'POST', JSON.stringify(data), {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${auth.token}`
            })
            if (responseData) setIsRegistered(true)
        } catch (e) {

        }
    }

    const handleClose = () => {
        setOpen(false)
        clearError()
    }

    return (
       

        <>
            <SimpleDialog open={open} onClose={handleClose} text={'Could not Get You Registered'} />

            {isLoading ? 
            <Grid align='center' justify='center' container>
                <Grid item align='center' lg={12} sm={12} xs={12}>
                    <Box m={12} ><CircularProgress /></Box>
                </Grid>
            </Grid> :
                <Grid container justify='center' align='center'>
                    { <>
                    { isFetching ? <Box m={12} ><CircularProgress /></Box> : (isRegistered ? <Students /> : <CompanyForm onSubmit={registerCompany} />)}
                    </>
                    }
                </Grid>
            }
        </>
    )

}

export default CompanyDashBoardPage
