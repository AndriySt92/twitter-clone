import React from 'react'
import { useHistory } from 'react-router-dom'
import { Avatar, Button, Divider, ListItem, ListItemAvatar, Typography } from '@material-ui/core'
import { useHomeStyle } from '../pages/Home/theme'
import { UserDataType } from '../redux/auth/Types'

interface UserPropsType {
  classes: ReturnType<typeof useHomeStyle>
  user: UserDataType
}
export const User: React.FC<UserPropsType> = ({ classes, user }) => {
  const history = useHistory()

  const handleClickName = (e: React.MouseEvent<HTMLTextAreaElement>) => {
    e.stopPropagation()
    history.push(`/profile/${user._id}`)
  }

  return (
    <>
      <ListItem className={classes.readUserItem}>
        <div className={classes.readUserItemInfo}>
          <ListItemAvatar>
            <Avatar src={user.avatar} />
          </ListItemAvatar>
          <div className={classes.readUserItemName}>
            <Typography>
              <b onClick={handleClickName}>{user.fullname}</b>
            </Typography>
            <Typography color="textSecondary">{user.username}</Typography>
          </div>
        </div>
        <Button className={classes.readUserItemButton}>Читать</Button>
      </ListItem>
      <Divider component="li" />
    </>
  )
}
