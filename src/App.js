import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './Shared/Pages/HomePage'
import LoginForm from './Shared/Components/LoginForm'
import SignUpForm from './Shared/Components/SignUpForm'
import CompanyForm from './Company/Components/CompanyForm'
import Students from './Student/Pages/Students';
import NewJobForm from './Jobs/Components/NewJobForm';
import CandidateList from './Jobs/Components/CandidateList';
import StudentForm from './Student/Components/StudentForm'
import CompanyList from './Company/Components/CompanyList'
import JobsList from './Jobs/Components/JobList'
import ApplyJob from './Jobs/Components/ApplyJob'



function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact><HomePage /></Route>
        <Route path='/login' ><LoginForm /></Route>
        <Route path='/signup'><SignUpForm /></Route>
        <Route path='/company' exact><CompanyForm /></Route>
        <Route path='/company/view/students'><Students /></Route>
        <Route path='/company/jobs/new' ><NewJobForm /></Route>
        <Route path='/company/jobs/:jobid/applied'><CandidateList /></Route>
        <Route path='/student' exact><StudentForm /></Route>
        <Route path='/student/view/companies'><CompanyList /></Route>
        <Route path='/student/jobs'><JobsList /></Route>
        <Route path='/student/jobs/:jobid/apply' ><ApplyJob /></Route>
      </Switch>
    </Router>
  );
}

export default App;
