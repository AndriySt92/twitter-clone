import React from 'react'
import { Tweet } from '../Component/Tweet'
import {
  IconButton,
  Paper,
  Typography,
  Container,
  Grid,
  makeStyles,
  withStyles,
  Avatar,
  InputBase,
  TextareaAutosize,
  CircularProgress,
  ListItemAvatar,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  TextField,
  InputAdornment,
} from '@material-ui/core'
import classnames from 'classnames'
import grey from '@material-ui/core/colors/grey'
import { MenuList } from '../Component/MenuList'
import PublicIcon from '@material-ui/icons/Public'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import SearchIcon from '@material-ui/icons/Search'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import GifIcon from '@material-ui/icons/Gif'
import EventAvailableIcon from '@material-ui/icons/EventAvailable'
import BarChartIcon from '@material-ui/icons/BarChart'
import MoodIcon from '@material-ui/icons/Mood'
import ControlPointIcon from '@material-ui/icons/ControlPoint'
import { theme } from '../theme'

export const useHomeStyle = makeStyles((theme) => ({
  wrapper: {
    height: '100vh',
  },
  menuList: {
    position: 'sticky',
    top: 0,
    listStyle: 'none',
    padding: 0,
    margin: 0,
    maxWidth: 230,
  },
  menuLogoIcon: {
    fontSize: 36,
  },
  menulistItem: {
    '& div': {
      display: 'inline-flex',
      alignItems: 'center',
      position: 'relative',
      padding: '0 25px 0 20px',
      borderRadius: 30,
      height: 50,
      marginBottom: 15,
      transition: 'background-color 0.15s ease',
    },
    '&:hover': {
      '& div': {
        backgroundColor: 'rgb(29, 161, 242, 0.1)',
        color: theme.palette.primary.main,
      },
    },
  },
  menuListButton: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
  },
  menulistItemLabel: {
    fontSize: 20,
    fontWeight: 700,
    marginLeft: 15,
  },
  menulistItemIcon: {
    fontSize: 32,
    marginLeft: -5,
  },
  tweetsWrapper: {
    height: '100%',
  },
  tweetsHeader: {
    display: 'flex',
    flexDirection: 'row',
    position: 'sticky',
    zIndex: 2,
    top: 0,
    padding: '10px 15px',
    borderLeft: '0',
    borderRight: '0',
    '& h6': {
      fontWeight: 800,
    },
  },
  tweetAvatar: {
    marginRight: 15,
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  tweetBody: {
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer',
    padding: '10px 15px',
    borderLeft: '0',
    borderRight: '0',
    borderBottom: '0',
    '&:hover': {
      backgroundColor: 'rgb(245, 249, 250)',
    },
  },
  tweetForm: {
    display: 'flex',
    paddingTop: 15,
    paddingLeft: 20,
  },
  tweetFormTextarea: {
    width: '100%',
    '& textarea': {
      border: '0',
      fontSize: 20,
      color: grey[600],
      width: '90%',
      outline: '0',
      resize: 'none',
      padding: '5px 0px',
    },
  },
  tweetFormPublic: {
    paddingTop: '10px',
    width: '98%',
    borderBottom: '1px solid #eff3f4',
    '& div': {
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: 14,
      fontWeight: 700,
      color: theme.palette.primary.main,
      padding: '0 15px 0 10px',
      borderRadius: 30,
      height: 30,
      marginBottom: 15,
      transition: 'background-color 0.15s ease',
      '&:hover': {
        backgroundColor: 'rgb(29, 161, 242, 0.1)',
      },
      '& span': {
        marginLeft: 10,
      },
    },
  },
  tweetFormPublicIcon: {
    fontSize: 16,
  },
  tweetFormFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    width: '98%',
  },
  tweetFormFooterIcon: {
    fontSize: 22,
    color: theme.palette.primary.main,
    padding: 8,
    '&:hover': {
      backgroundColor: 'rgb(29, 161, 242, 0.1)',
    },
  },
  tweetFormFooterRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& p': {
      width: 1,
      height: 33,
      backgroundColor: '#dedede',
    },
  },
  tweetFormCircleProgress: {
    position: 'relative',
    width: 20,
    height: 20,
    margin: '0 10px',
    '& .MuiCircularProgress-root': {
      position: 'absolute',
      left: 0,
    },
  },
  tweetFormFooterButton: {
    width: 100,
    height: 40,
  },

  tweetsUserName: {
    color: grey[500],
  },
  tweetsFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    left: -13,
    width: 450,
  },
  rightSide: {
    paddingTop: 20,
    position: 'sticky',
    top: 0,
  },
  rightSideBlock: {
    backgroundColor: '#F5F8FA',
    borderRadius: 15,
    marginTop: 20,
    '& .MuiList-root': {
      paddingTop: 0,
    },
  },
  rightSideBlockHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    backgroundColor: 'transparent',
    padding: '13px 18px',
    '& b': {
      fontSize: 20,
      fontWeight: 800,
    },
  },
  rightSideBlockItem: {
    cursor: 'pointer',
    '& .MuiTypography-body1': {
      '& span': {
        fontWeight: 200,
      },
    },
    '& .MuiTypography-body2': {
      '& span': {
        fontWeight: 700,
        color: '#505457',
      },
    },
    '& .MuiListItemAvatar-root': {
      minWidth: 50,
    },
    '& .MuiListItemText-root': {
      margin: 0,
    },
    '&:hover': {
      backgroundColor: '#edf3f6',
    },
  },
}))

const CssTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 30,

      backgroundColor: '#E6ECF0',
      padding: 0,
      paddingLeft: 15,
      '&.Mui-focused': {
        backgroundColor: '#fff',
        '& fiedlset': {
          borderWidth: 1,
          borderColor: theme.palette.primary.main,
        },
        '& svg path': {
          fill: 'theme.palette.primary.main',
        },
      },
      '&:hover': {
        '& fieldset': {
          borderColor: 'transparent',
        },
      },
      '& fieldset': {
        borderColor: 'transparent',
        borderWidth: 1,
      },
    },
    '& .MuiOutlinedInput-input': {
      // padding: '12px 14px 14px 5px',
    },
  },
})(TextField)

export const Home: React.FC = (): React.ReactElement => {
  const classes = useHomeStyle()

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
            <div className={classes.tweetForm}>
              <Avatar
                className={classes.tweetAvatar}
                alt="Travis Howard"
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              />
              <div className={classes.tweetFormTextarea}>
                <TextareaAutosize
                  aria-label="minimum height"
                  rowsMax={4}
                  placeholder="Что происходит?"
                />
                <div className={classes.tweetFormPublic}>
                  <div>
                    <PublicIcon className={classes.tweetFormPublicIcon} />
                    <span>Отвечать могут все пользыватели</span>
                  </div>
                </div>
                <div className={classes.tweetFormFooter}>
                  <div>
                    <IconButton aria-label="delete" className={classes.tweetFormFooterIcon}>
                      <ImageOutlinedIcon />
                    </IconButton>
                    <IconButton aria-label="delete" className={classes.tweetFormFooterIcon}>
                      <GifIcon />
                    </IconButton>
                    <IconButton aria-label="delete" className={classes.tweetFormFooterIcon}>
                      <BarChartIcon />
                    </IconButton>
                    <IconButton aria-label="delete" className={classes.tweetFormFooterIcon}>
                      <MoodIcon />
                    </IconButton>
                    <IconButton aria-label="delete" className={classes.tweetFormFooterIcon}>
                      <EventAvailableIcon />
                    </IconButton>
                  </div>
                  <div className={classes.tweetFormFooterRight}>
                    <div className={classes.tweetFormCircleProgress}>
                      <CircularProgress
                        variant="static"
                        value={25}
                        thickness={4}
                        // color="primary"
                        size={20}
                      />
                      <CircularProgress
                        variant="static"
                        value={100}
                        thickness={4}
                        // color="primary"
                        size={20}
                        style={{ color: 'rgba(0,0,0,0.1)' }}
                      />
                    </div>
                    <p></p>
                    <IconButton className={classes.tweetFormFooterIcon}>
                      <ControlPointIcon />
                    </IconButton>
                    <Button
                      className={classes.tweetFormFooterButton}
                      variant="contained"
                      color="primary">
                      Твитнуть
                    </Button>
                  </div>
                </div>
              </div>
            </div>
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
            <CssTextField
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
