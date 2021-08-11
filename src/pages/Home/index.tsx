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
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import SearchIcon from '@material-ui/icons/Search'
import { useHomeStyle } from './theme'
import { SearchTextField } from '../../Component/SearchTextForm'
import { TweetForm } from '../../Component/TweetForm'
import { TweetPage } from '../../Component/TweetPage'
import { fetchTweets } from '../../redux/tweets/actions'
import { getLoadingStatusFetchTweets, getTweets } from '../../redux/tweets/selectors'
import { fetchTopics } from '../../redux/topics/actions'
import { Topics } from '../../Component/Topics'
import BackButton from '../../Component/BackButton'
import { UserSideProfile } from '../../Component/userSideProfile'

export const Home: React.FC = (): React.ReactElement => {
  const classes = useHomeStyle()
  const dispatch = useDispatch()
  const tweets = useSelector(getTweets)
  const isLoadingTweets = useSelector(getLoadingStatusFetchTweets)

  useEffect(() => {
    dispatch(fetchTweets())
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
              <Route path="/home" exact>
                <Typography variant="h6">Главная</Typography>
              </Route>
              <Route path="/home/tweet/:id">
                <Typography variant="h6">Твит</Typography>
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
            <Paper className={classes.rightSideBlock} elevation={0}>
              <Paper variant="outlined" className={classes.rightSideBlockHeader}>
                <b>Кого читать</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemAvatar>
                    <Avatar src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1047&q=80" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Актуальные темы: Украина"
                    secondary={
                      <>
                        <Typography component="span" variant="body1">
                          Твитов: 154 132
                        </Typography>
                        <Typography component="div" variant="body1">
                          Твитов: 154 132
                        </Typography>
                      </>
                    }
                  />
                  <Button color="primary">
                    <PersonAddIcon />
                  </Button>
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
