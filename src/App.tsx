import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route, useHistory } from 'react-router-dom'
import { SignIn } from './pages/SignIn/index'
import { Home } from './pages/Home/index'
import { initializeUser } from './redux/auth/actions'
import { getLoadingStatusAuth, getUserData } from './redux/auth/selectors'
import TwitterIcon from '@material-ui/icons/Twitter'
import { useHomeStyle } from './pages/Home/theme'
import { LoadingStatus } from './redux/Types'

function App() {
  const classes = useHomeStyle()
  const dispatch = useDispatch()
  const history = useHistory()
  const loadingStatusAuth = useSelector(getLoadingStatusAuth)
  const userData = useSelector(getUserData)

  useEffect(() => {
    dispatch(initializeUser())
  }, [])

  useEffect(() => {
    if (loadingStatusAuth === LoadingStatus.LOADED && userData) {
      history.push('/home')
    } else if (loadingStatusAuth !== LoadingStatus.LOADED && !userData) {
      history.push('/signin')
    }
  }, [loadingStatusAuth])

  if (loadingStatusAuth === LoadingStatus.LOADING) {
    return (
      <div className={classes.centered}>
        <TwitterIcon color="primary" fontSize="large" />
      </div>
    )
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  )
}

export default App
