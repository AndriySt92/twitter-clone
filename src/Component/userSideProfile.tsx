import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Avatar, Menu, MenuItem, IconButton } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { useHomeStyle } from '../pages/Home/theme'
import { getUserData } from '../redux/auth/selectors'
import { logout } from '../redux/auth/actions'
import { Link } from 'react-router-dom'

interface UserSideProfilePropsType {
  classes: ReturnType<typeof useHomeStyle>
}

export const UserSideProfile: React.FC<UserSideProfilePropsType> = ({ classes }) => {
  const dispatch = useDispatch()
  const userData = useSelector(getUserData)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    dispatch(logout())
    setAnchorEl(null)
  }

  if (!userData) {
    return null
  }

  return (
    <div className={classes.userSideProfile}>
      <div className={classes.userSideProfileInfo}>
        <Avatar className={classes.tweetAvatar} alt="Travis Howard" src={userData?.avatar} />
        <div>
          <b>{userData.fullname}</b>
          <Typography color="textSecondary">
            <span>{userData.username}</span>
          </Typography>
        </div>
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
            paper: classes.userSideDataPopupMenu,
          }}>
          <Link
            to={`/profile/${userData._id}`}
            style={{ color: '#14171a', textDecoration: 'none' }}>
            <MenuItem onClick={handleClose}>Профиль</MenuItem>
          </Link>
          <MenuItem onClick={handleLogout}>Выйти</MenuItem>
        </Menu>
      </div>
    </div>
  )
}
