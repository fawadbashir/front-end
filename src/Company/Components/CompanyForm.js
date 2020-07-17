import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

const CompanyForm = (props) => {
    const { register, handleSubmit } = useForm()
    const classes = useStyles();

    const onSubmit = (data) => {
      props.onSubmit({name : data.company,address : data.address})
        console.log(data)
    }
    return (
        <form className={classes.root} action="post" onSubmit={handleSubmit(onSubmit)}>
            {/* <Grid item lg= {12} md={6}> */}
            
            <TextField margin='normal' type="text" label='Company Name' inputRef={register} name='company' />
            {/* </Grid> */}
            {/* <Grid item lg={12} md={6}> */}
            <TextField margin='normal' type='text' label='Company Address' inputRef={register} name='address' />
            {/* </Grid> */}
            <Grid item lg={12}>
            <Button  variant='contained' color='primary' type='submit'>Create Company</Button>
            </Grid>
        </form>
    )
}
export default CompanyForm