import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useHistory } from 'react-router-dom'
import { SignIn } from './pages/SignIn/index';
import { Home } from './pages/Home/index';
import { initializeUser } from './redux/auth/actions';
import { getLoadingStatusAuth } from './redux/auth/selectors'


function App() {

  const dispatch = useDispatch()
  const loadingStatusAuth = useSelector(getLoadingStatusAuth)
  const history = useHistory()

  useEffect(() => {
    dispatch(initializeUser())
  }, [])

  useEffect(() => {
    if(loadingStatusAuth === 'LOADED'){
      history.push('/home')
    }
  }, [loadingStatusAuth])

  return (
    <div className="App">
      <Switch>
        <Route path='/signin' component={SignIn} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
