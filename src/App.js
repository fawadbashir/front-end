import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
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

  
  const [userState, setUserState] = useState({ isLoggedIn: false, userType: '' })

  

  const login = useCallback((userType) => setUserState({ isLoggedIn: true, userType }), [])
  const logout = useCallback(() => setUserState({ isLoggedIn: false, userType: '' }), [])

  let routes


  if (userState.isLoggedIn && userState.userType === 'company') {
    routes = (
      <>

        <Route path='/' exact><CompanyDashBoardPage /></Route>
        <Route path='/company/jobs/new' ><NewJob /></Route>
        <Route path='/company/jobs/:jobid/applied'><CandidateList /></Route>
        <Redirect to='/' />

      </>
    )
  }
  else if (userState.isLoggedIn && userState.userType === 'student') {
    routes = (
      <>

        <Route path='/' exact><StudentDashBoardPage /></Route>
        <Route path='/student/jobs' exact><Jobs /></Route>
        <Route path='/student/jobs/:jobid/apply' ><ApplyJobPage /></Route>
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
    <AuthContext.Provider value={{ isLoggedIn: userState.isLoggedIn, login, logout, userType: userState.userType }}>

      <Router>
        {userState.isLoggedIn && <Navigation />}
        <Switch>
          
              
                {routes}
              
            
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
