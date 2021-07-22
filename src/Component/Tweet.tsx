import React from 'react'
import { useHistory } from 'react-router-dom'
import { IconButton, Menu, MenuItem, Paper, Typography, Avatar } from '@material-ui/core'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ReplyIcon from '@material-ui/icons/Reply'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { useHomeStyle } from '../pages/Home/theme'
import { formatDate } from '../utils/formatDate'

interface TweetProps {
  _id: string
  text: string
  classes: ReturnType<typeof useHomeStyle>
  createdAt: string
  user: {
    fullname: string
    username: string
    avatarUrl: string
  }
}

export const Tweet: React.FC<TweetProps> = ({
  classes,
  text,
  user,
  _id,
  createdAt,
}: TweetProps): React.ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl)
  const history = useHistory()


  const handleClickTweet = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault()
    history.push(`/home/tweet/${_id}`)
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
   event.stopPropagation()
    setAnchorEl(null);
  };

  return (
    <a onClick={handleClickTweet} className={classes.tweetWrapper}>
      <Paper variant="outlined" className={classes.tweetBody}>
        <Avatar className={classes.tweetAvatar} alt="Travis Howard" src={user.avatarUrl} />
        <div className={classes.tweetContent}>
          <div className={classes.tweetContentHeader}>
            <Typography>
              <b>{user.fullname}</b>
              <Typography color="textSecondary">
                <span> {user.username}</span>
                &nbsp;
                <span> ‧ </span>&nbsp;
                <span>{formatDate(new Date(createdAt))} назад</span>
              </Typography>
            </Typography>
            <div className={classes.tweetContentHeaderButton}>
              <IconButton color="primary" style={{ padding: '5px' }} onClick={handleClick}>
                <MoreHorizIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}>Редактировать</MenuItem>
                <MenuItem onClick={handleClose}>Удалить</MenuItem>
              </Menu>
            </div>
          </div>

          <Typography variant="body1">{text}</Typography>
          <div className={classes.tweetsFooter}>
            <div>
              <IconButton color="primary">
                <ChatBubbleOutlineIcon style={{ fontSize: 20 }} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton color="primary">
                <RepeatIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton color="primary">
                <FavoriteBorderIcon style={{ fontSize: 20 }} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton color="primary">
                <ReplyIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
          </div>
        </div>
      </Paper>
    </a>
  )
}
