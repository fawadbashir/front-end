import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles(theme => ({
    root: {
      
      
    '& > *': {
      margin: theme.spacing(1),
      // width: 200,
      
    }},
      formControl: {
        margin: theme.spacing(1),
        minWidth: 500,
        textAlign:'center'
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    }));

const NewJobForm = (props) => {

    const classes = useStyles()
    const { register, handleSubmit, control} = useForm()

    const onSubmit = (data) => {
        props.onSubmit({
            description : data.description,
            pay : data.pay,
            requirement : data.qualification
        })
        console.log(data)
    }

    return (
        // <div>
            
            <form action="post" onSubmit={handleSubmit(onSubmit)} className={classes.root}>
                <Grid item >
                <TextField margin='normal' label='Job Description' type="text" name='description' inputRef={register} />

                </Grid>
                <Grid item lg={12}>
                <TextField margin='normal' label='Job Pay' type="text" name='pay' inputRef={register} />
                </Grid>
                <Grid item lg={12}>
                <FormControl className={classes.formControl}>
                    <InputLabel id='qualification-label'>Qualification</InputLabel>
                    <Controller
                        name='qualification'
                        inputRef={register}
                        defaultValue=''
                        control={control}
                        labelId="qualification-label"
                        type='outline'
                        id="demo-simple-select"
                        as={
                            
                            <Select >
                                <MenuItem value='ba'>B.A</MenuItem>
                                <MenuItem value='bsc' >B.S.C</MenuItem>
                                <MenuItem valu='bcom'>B.COM</MenuItem>
                            </Select>
                        }
                    />
                </FormControl>
                </Grid>

                <Button variant='contained' type='submit'>Create Job</Button>
            </form>
        // </div>
    )
}

export default NewJobForm
