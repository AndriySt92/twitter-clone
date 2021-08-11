import React from 'react'
import { useSelector } from 'react-redux'
import { Typography, Avatar, Menu, MenuItem, IconButton } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { useHomeStyle } from '../pages/Home/theme'
import { getUserData } from '../redux/auth/selectors'

interface UserSideProfilePropsType {
  classes: ReturnType<typeof useHomeStyle>
}

export const UserSideProfile: React.FC<UserSideProfilePropsType> = ({ classes }) => {
  const userData = useSelector(getUserData)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  if (!userData) {
    return null
  }

  return (
    <div className={classes.userSideProfile}>
      <div className={classes.userSideProfileInfo}>
        <Avatar
          className={classes.tweetAvatar}
          alt="Travis Howard"
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        />
        <Typography>
          <b>{userData.fullname}</b>
          <Typography color="textSecondary">
            <span>{userData.username}</span>
          </Typography>
        </Typography>
      </div>
      <div>
        <IconButton onClick={handleClick}>
          <MoreHorizIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          classes={{
              paper: classes.userSideDataPopupMenu
          }}>
          <MenuItem onClick={handleClose}>Профиль</MenuItem>
          <MenuItem onClick={handleClose}>Выйти</MenuItem>
        </Menu>
      </div>
    </div>
  )
}
