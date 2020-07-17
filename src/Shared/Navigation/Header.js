import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';



function ElevationScroll(props) {
    const { children} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const useStyles = makeStyles((theme) => ({
      toolbarMargin : {
          ...theme.mixins.toolbar
      }
  }))

const Header = (props) => {
    
    const classes = useStyles()

    return (
    <>
    <ElevationScroll>
        <AppBar position='fixed' color='primary'>
            <Toolbar>
            <Typography variant = 'h6'>Campus Recruitment</Typography>
            {props.children}
            </Toolbar>
        </AppBar>
        </ElevationScroll>
        <div className = {classes.toolbarMargin}/>
        </>
        
    )
}

export default Header
