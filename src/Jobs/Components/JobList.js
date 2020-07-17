import React from 'react'
import JobItem from './JobItem'

const JobList = (props) => {
    
    
    if (props.jobList.length === 0) {
        
       return (
           <h1>No Jobs Found</h1>
       )
   } 
   
   return (
       <div>
           <h1>List of Jobs</h1>
   <ul>{props.jobList.map((job) => <JobItem  key={job._id} {...job} token ={props.token} />)}</ul>
       </div>
   )
}

export default JobList
