import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) =>({
    contained : {
        backgroundColor: '#00897B',
         color: 'white',
        // width : theme.spacing(12)
    }
}))

//`Failed to ${isLoginMode ? 'Login' : 'Sign Up'}. Please try Again.`
const SimpleDialog = (props) => {
    const classes = useStyles()
    return (
        <Dialog  onClose={props.onClose} aria-labelledby="simple-dialog-title" open={props.open} >
                <DialogTitle id="simple-dialog-title">{props.text}</DialogTitle>
                <DialogActions>
                    <Button classesName={classes.contained} size='large' variant='contained'  onClick={props.onClose}>Okay</Button>
                </DialogActions>
            </Dialog>
    )
}

export default SimpleDialog