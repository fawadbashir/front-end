import React, { useState, useEffect, useContext } from 'react'
import Button from '@material-ui/core/Button'



const JobItem = (props) => {   
    
        
    return (
        <div>
           <p>{props.description} {props.pay} {props.requirement} 
           <Button variant='contained' color='primary' >Apply</Button> 
            </p>
            
           
        </div>
    )
}

export default JobItem
