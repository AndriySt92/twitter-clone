import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Preloader } from '../../Component/Preloader'
import { Tweet } from '../../Component/Tweet'
import {
  Paper,
  Typography,
  Container,
  Grid,
  Avatar,
  ListItemAvatar,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  InputAdornment,
  IconButton,
} from '@material-ui/core'
import { MenuList } from '../../Component/MenuList'
import SearchIcon from '@material-ui/icons/Search'
import { useHomeStyle } from './theme'
import { SearchTextField } from '../../Component/SearchTextForm'
import { TweetForm } from '../../Component/TweetForm'
import { TweetPage } from '../../Component/TweetPage'
import { fetchTweets } from '../../redux/tweets/actions'
import { getLoadingStatusFetchTweets, getTweets, getUserTweets } from '../../redux/tweets/selectors'
import { fetchTopics } from '../../redux/topics/actions'
import { Topics } from '../../Component/Topics'
import BackButton from '../../Component/BackButton'
import { UserSideProfile } from '../../Component/userSideProfile'
import { UserProfile } from '../../Component/UserProfile'
import { fetchUsers } from '../../redux/users/actions'
import { ReadUser } from '../../Component/ReadUser'

export const Home: React.FC = (): React.ReactElement => {
  const classes = useHomeStyle()
  const dispatch = useDispatch()
  const tweets = useSelector(getTweets)
  const userTweets = useSelector(getUserTweets)
  const isLoadingTweets = useSelector(getLoadingStatusFetchTweets)

  useEffect(() => {
    dispatch(fetchTweets())
    dispatch(fetchUsers())
    dispatch(fetchTopics())
  }, [])

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item sm={1} md={2} >
          <MenuList classes={classes} />
        </Grid>
        <UserSideProfile classes={classes} />
        <Grid item sm={8} md={6}>
          <Paper variant="outlined" className={classes.tweetsWrapper}>
            <Paper variant="outlined" className={classes.tweetsHeader}>
              <Route path="/home/:any">
                <BackButton />
              </Route>
              <Route path="/profile/:any" exact>
                <BackButton />
              </Route>
              <Route path="/home" exact>
                <Typography variant="h6">Главная</Typography>
              </Route>
              <Route path="/home/tweet/:id">
                <Typography variant="h6">Твит</Typography>
              </Route>
              <Route path="/profile/:any" >
                <div>
                  <Typography variant="h6">Профиль</Typography>
                  <Typography variant="body2">{userTweets.length} твитов</Typography>
                </div>
              </Route>
              <Route path="/home/search">
                <SearchTextField
                  variant="outlined"
                  id="custom-css-outlined-input"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                />
              </Route>
            </Paper>
            <Route path={['/home', '/home/search']} exact>
              <Paper style={{ borderBottom: '1px solid #e0e0e0' }}>
                <TweetForm classes={classes} />
              </Paper>
              <div className={classes.tweetFormBottomLine}></div>
            </Route>
            <Route path="/home/tweet/:id">
              <TweetPage />
            </Route>
            <Route path="/home" exact>
              {isLoadingTweets ? (
                <Preloader />
              ) : (
                tweets.map((tweet) => <Tweet key={tweet._id} classes={classes} {...tweet} />)
              )}
            </Route>
            <Route path="/profile/:id" component={UserProfile} />
          </Paper>
        </Grid>
        <Grid item sm={3} md={4}>
          <div className={classes.rightSide}>
            <SearchTextField
              variant="outlined"
              id="custom-css-outlined-input"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <Topics classes={classes} />
            <ReadUser classes={classes} />
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
