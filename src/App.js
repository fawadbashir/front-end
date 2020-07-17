import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles';
import { companyTheme } from './Shared/UIElements/theme'
import HomePage from './Shared/Pages/HomePage'
import CompanyDashBoardPage from './Company/Pages/CompanyDashBoardPage'
import StudentDashBoardPage from './Student/Pages/StudentDashBoardPage';
import NewJob from './Jobs/Pages/NewJob';
import CandidateList from './Jobs/Components/CandidateList';
import Jobs from './Jobs/Pages/Jobs'
import ApplyJobPage from './Jobs/Pages/ApplyJobPage'
import { AuthContext } from './Shared/Context/auth-context'
import Navigation from './Shared/Navigation/Navigation';

function App() {

  
  const [userState, setUserState] = useState({ userId : '', userType: '', token : '' })
  

  const login = useCallback((userId, userType, token) => {
    localStorage.setItem('userData', JSON.stringify({userId, userType,token}))
    setUserState({ userId, userType, token })
  }, [])


  const logout = useCallback((token) => {
    
    fetch('http://localhost:5000/users/logout',{
      method : 'POST',
      headers : {Authorization : `Bearer ${token}`}
    }).then((data) => {
      localStorage.removeItem('userData')
      setUserState({ userId: '', userType: '',token : '' })  
    console.log(data)})
    .catch((e) => console.log(e))
   }, [])
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'))
    if( userData && userData.token) {
      login(userData.userId,userData.userType,userData.token)
    }
  },[login])
  
  

  let routes


  if (userState.userId && userState.userType === 'company') {
    routes = (
      <>
      
        <Route path='/' exact><CompanyDashBoardPage /></Route>
        <Route path='/newjob' ><NewJob /></Route>
        <Route path='/jobs/:jobid/applied'><CandidateList /></Route>
        <Redirect to='/' />
        
      </>
    )
  }
  else if (userState.userId && userState.userType === 'student') {
    routes = (
      <>

        <Route path='/' exact><StudentDashBoardPage /></Route>
        <Route path='/student/jobs' exact><Jobs /></Route>
        <Route path='/student/jobs/:jobid/apply' ><ApplyJobPage /></Route>
        <Route path= '/appliedJobs'>Applied Jobs</Route>
        <Redirect to='/' />

      </>
    )
  } else {

    routes = (
      <>
        <Route path='/' exact ><HomePage /></Route>
        <Redirect to='/' />


      </>
    )
  }



  return (
    <AuthContext.Provider value={{ userId: userState.userId, token :userState.token, login, logout, userType: userState.userType }}>
      <ThemeProvider theme={companyTheme}>
      <Router>
        {userState.userId && <Navigation />}
          {/* <Paper  style={{width : '100vw'}} > */}
        <Switch>
          {routes}
            
        </Switch>
          {/* </Paper>           */}
      </Router>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
