import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
} from '@material-ui/core'
import { MenuList } from '../../Component/MenuList'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import SearchIcon from '@material-ui/icons/Search'
import { useHomeStyle } from './theme'
import { SearchTextField } from '../../Component/SearchTextForm'
import { TweetForm } from '../../Component/TweetForm'
import { fetchTweets } from '../../redux/tweets/actions'

export const Home: React.FC = (): React.ReactElement => {
  const classes = useHomeStyle()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTweets())
  }, [])

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item sm={1} md={2}>
          <MenuList classes={classes} />
        </Grid>
        <Grid item sm={8} md={6}>
          <Paper variant="outlined" className={classes.tweetsWrapper}>
            <Paper variant="outlined" className={classes.tweetsHeader}>
              <Typography variant="h6">Главная</Typography>
            </Paper>
            <Paper style={{ borderBottom: '1px solid #e0e0e0' }}>
              <TweetForm classes={classes} />
            </Paper>
            <div className={classes.tweetFormBottomLine}></div>
            {Array(20)
              .fill(0)
              .map((item) => (
                <Tweet
                  classes={classes}
                  user={{
                    fullname: 'Sergio Ramoz',
                    username: 'SergioRamoz',
                    avatarUrl:
                      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                  }}
                  text={
                    'Desde finales del siglo XX, Internet ha cambiado nuestra forma de vivir en muchos aspectos. Uno de ellos, es el modo en que compramos. '
                  }
                />
              ))}
          </Paper>
        </Grid>
        <Grid item sm={4} md={4}>
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
            <Paper className={classes.rightSideBlock} elevation={0}>
              <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Актуальные темы</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Актуальные темы: Украина"
                    secondary={
                      <>
                        <Typography component="span" variant="body1">
                          Telegram
                        </Typography>
                        <Typography component="div" variant="body1">
                          Твитов: 154 132
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Актуальные темы: Украина"
                    secondary={
                      <>
                        <Typography component="span" variant="body1">
                          #teen
                        </Typography>
                        <Typography component="div" variant="body1">
                          Твитов: 154 132
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Актуальные темы: Украина"
                    secondary={
                      <>
                        <Typography component="span" variant="body1">
                          #Ukrain
                        </Typography>
                        <Typography component="div" variant="body1">
                          Твитов: 154 132
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
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
