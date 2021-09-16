import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Typography,
  Avatar,
  TextareaAutosize,
  Button,
} from '@material-ui/core'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ReplyIcon from '@material-ui/icons/Reply'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { useHomeStyle } from '../pages/Home/theme'
import { formatDate } from '../utils/formatDate'
import { ImageList } from './ImageList'
import { removeTweet, likeTweet, updateTweet } from '../redux/tweets/actions'
import { getUserData } from '../redux/auth/selectors'

interface TweetProps {
  _id: string
  text: string
  classes: ReturnType<typeof useHomeStyle>
  createdAt: string
  images?: string[]
  likeCount: string | number
  user: {
    fullname: string
    username: string
    _id?: string
    avatar?: string
  }
}

export const Tweet: React.FC<TweetProps> = ({
  classes,
  text,
  user,
  _id,
  likeCount,
  createdAt,
  images,
}: TweetProps) => {
  const dispatch = useDispatch()
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [tweetText, setTweetText] = useState<string>(text)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const authUser = useSelector(getUserData)
  const open = Boolean(anchorEl)
  const history = useHistory()
  if (!user) {
    return null
  }

  const handleClickTweet = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault()
    history.push(`/home/tweet/${_id}`)
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setAnchorEl(null)
  }

  const handleRemoveTweet = (event: React.MouseEvent<HTMLElement>) => {
    handleClose(event)
    if (window.confirm('Вы действительно хотите удалить твит?')) {
      dispatch(removeTweet(_id))
    }
  }

  const handleEditTweet = (event: React.MouseEvent<HTMLElement>) => {
    handleClose(event)
    setIsEdit(true)
  }

  const handleUpdateTweet = (event: React.MouseEvent<HTMLElement>) => {
    handleClose(event)
    const payload = { tweetId: _id, text: tweetText }
    dispatch(updateTweet(payload))
    setIsEdit(false)
  }

  const handlerChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    if (e.currentTarget) {
      setTweetText(e.currentTarget.value)
    }
  }

  const handleClickName = (e: React.MouseEvent<HTMLTextAreaElement>) => {
    e.stopPropagation()
    history.push(`/profile/${user._id}`)
  }

  const onTweetLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (authUser?._id) {
      const payload = {
        userId: authUser?._id,
        tweetId: _id,
      }
      dispatch(likeTweet(payload))
    }
  }

  return (
    <a onClick={handleClickTweet} className={classes.tweetWrapper}>
      <Paper variant="outlined" className={classes.tweetBody}>
        <Avatar className={classes.tweetAvatar} src={user?.avatar} />
        <div className={classes.tweetContent}>
          <div className={classes.tweetContentHeader}>
            <div>
              <b onClick={handleClickName} className={classes.tweetUserFullname}>
                {user.fullname}
              </b>
              <div style={{ display: 'flex' }}>
                <Typography color="textSecondary"> {user.username}</Typography>
                &nbsp;
                <span> ‧ </span>&nbsp;
                <Typography color="textSecondary">
                  {formatDate(new Date(createdAt))} назад
                </Typography>
              </div>
            </div>
            <div className={classes.tweetContentHeaderButton}>
              <IconButton color="primary" style={{ padding: '5px' }} onClick={handleClick}>
                <MoreHorizIcon />
              </IconButton>
              <Menu anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
                <MenuItem onClick={handleEditTweet}>Редактировать</MenuItem>
                <MenuItem onClick={handleRemoveTweet}>Удалить</MenuItem>
              </Menu>
            </div>
          </div>

          {!isEdit ? (
            <Typography variant="body1" style={{ wordWrap: 'break-word' }}>
              {' '}
              {text}
            </Typography>
          ) : (
            <div className={classes.tweetFormEdit}>
              <div className={classes.tweetFormTextarea}>
                <TextareaAutosize
                  value={tweetText}
                  onChange={(e) => handlerChangeTextarea(e)}
                  rowsMax={4}
                  placeholder="Что происходит?"
                  onClick={(e) => e.stopPropagation()}
                  autoFocus
                  style={{ backgroundColor: 'transparent' }}
                />
              </div>
              <Button
                onClick={handleUpdateTweet}
                className={classes.tweetFormFooterButton}
                variant="contained"
                color="primary">
                Твитнуть
              </Button>
            </div>
          )}
          {images && <ImageList classes={classes} images={images} />}
          <div className={classes.tweetsFooter}>
            <div>
              <IconButton color="primary">
                <ChatBubbleOutlineIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton color="primary">
                <RepeatIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton color="primary" onClick={(e) => onTweetLike(e)}>
                <FavoriteBorderIcon style={{ fontSize: 20 }} />
              </IconButton>
              <b>{likeCount}</b>
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
