import React from 'react'
import {Tweet} from '../Component/Tweet'
import { IconButton, Paper, Typography, Container, Grid, makeStyles, withStyles, Avatar, InputBase  } from '@material-ui/core'

import grey from '@material-ui/core/colors/grey';
import { MenuList } from '../Component/MenuList'


 export const useHomeStyle = makeStyles((theme) => ({
  wrapper: {
    height: '100vh',
  },
  menuList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: 230
  },
  menuLogoIcon: {
    fontSize: 36,
  },
  menulistItem: {
    '& div':{
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
      '& div':{
      backgroundColor: 'rgb(29, 161, 242, 0.1)',
      color: theme.palette.primary.main
      }
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
    borderRadius: 0,
    height: '100%',
    borderTop: '0',
    borderBottom: '0',
  },
  tweetAvatar:{
    large: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
  },
  tweetBody: {
    cursor: 'pointer',
    paddingTop: 15,
    paddingleft: 20,
    '&:hover': {
      backgroundColor: 'rgb(245, 249, 250)'
    }

  },
  tweetsHeader: {
    borderRadius: 0,
    borderLeft: '0',
    borderRight: '0',
    borderTop: '0',
    boxShadow: '0',
    padding: '10px 15px',
    '& h6': {
      fontWeight: 800
    },
  },
  tweetsUserName: {
    color: grey[500]
  },
  tweetsFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    left: -13,
    width: 450,
  }
}))

export const Home: React.FC = (): React.ReactElement => {
  const classes = useHomeStyle()

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
         <MenuList classes={classes}/>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper}>
            <Paper className={classes.tweetsHeader}>
              <Typography variant='h6' >Главная</Typography>
            </Paper>
            <Tweet classes={classes}
             user={{
              fullname: 'Sergio Ramoz',
              username: 'SergioRamoz',
              avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
             }}
             text={"Desde finales del siglo XX, Internet ha cambiado nuestra forma de vivir en muchos aspectos. Uno de ellos, es el modo en que compramos. "}  />
            <Tweet classes={classes}
             user={{
              fullname: 'Sergio Ramoz',
              username: 'SergioRamoz',
              avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
             }}
             text={"Desde finales del siglo XX, Internet ha cambiado nuestra forma de vivir en muchos aspectos. Uno de ellos, es el modo en que compramos. "}  />
            <Tweet classes={classes}
             user={{
              fullname: 'Sergio Ramoz',
              username: 'SergioRamoz',
              avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
             }}
             text={"Desde finales del siglo XX, Internet ha cambiado nuestra forma de vivir en muchos aspectos. Uno de ellos, es el modo en que compramos. "}  />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs</Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
