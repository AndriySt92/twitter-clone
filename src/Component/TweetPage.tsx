import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import format from 'date-fns/format'
import ruLand from 'date-fns/locale/ru'
import { useHomeStyle } from '../pages/Home/theme'
import { IconButton, Paper, Typography, Avatar } from '@material-ui/core'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ReplyIcon from '@material-ui/icons/Reply'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { Preloader } from './Preloader'
import { cleanTweetData, fetchTweet, setTweet } from '../redux/tweet/actions'
import { getLoadingStatusTweet, getTweet } from '../redux/tweet/selectors'
import { TweetForm } from './TweetForm'
import { ImageList } from './ImageList'
import { getUserData } from '../redux/auth/selectors'
import { setTweetLike } from '../redux/tweets/actions'

export const TweetPage: React.FC = (): React.ReactElement | null => {
  const dispatch = useDispatch()
  const tweet = useSelector(getTweet)
  const authUser = useSelector(getUserData)
  const isLoadingTweet = useSelector(getLoadingStatusTweet)
  const classes = useHomeStyle()
  const params: { id?: string } = useParams()
  const id = params.id

  useEffect(() => {
    if (id) dispatch(fetchTweet(id))
    return () => {
      dispatch(cleanTweetData())
    }
  }, [id])

  if (!tweet) {
    return null
  }

  const onTweetLike = () => {
    if (authUser) {
      const payload = {
        userId: authUser._id,
        tweetId: tweet._id,
      }
      dispatch(setTweetLike(payload))
    }
  }

  return (
    <div>
      {isLoadingTweet ? (
        <Preloader />
      ) : (
        <>
          <Paper elevation={0} className={classes.tweetPage} variant="outlined">
            <div className={classes.tweetPageHeader}>
              <div className={classes.tweetPageUser}>
                <Avatar
                  className={classes.tweetAvatar}
                  alt="Travis Howard"
                  src={tweet.user.avatar}
                />
                <div>
                  <Typography>
                    <b>{tweet.user.fullname}</b>
                    <Typography color="textSecondary">
                      <span> {tweet.user.username}</span>
                    </Typography>
                  </Typography>
                </div>
              </div>
              <IconButton color="primary">
                <MoreHorizIcon />
              </IconButton>
            </div>
            <div className={classes.tweetPageTweetBody}>
              <div className={classes.tweetPageText}>
                <Typography variant="body1">{tweet.text}</Typography>
                {tweet.images && <ImageList classes={classes} images={tweet.images} />}
              </div>
              <Typography color="textSecondary" style={{ margin: '13px 0px' }}>
                <span>{format(new Date(tweet.createdAt), 'H:mm ', { locale: ruLand })} ‧ </span>
                <span>
                  {format(new Date(tweet.createdAt), 'dd MMM. yyyy г.', { locale: ruLand })}
                </span>
              </Typography>
              <div className={classes.tweetPageMark}>
                <div>
                  <Typography component="span" variant="h6">
                    131234
                  </Typography>
                  <Typography component="span" variant="body1">
                    {' '}
                    ретвитов
                  </Typography>
                </div>
                <div>
                  <Typography component="span" variant="h6">
                    385
                  </Typography>
                  <Typography component="span" variant="body1">
                    {' '}
                    твитов с цитатами
                  </Typography>
                </div>
                <div>
                  <Typography component="span" variant="h6">
                    {tweet.likeCount}
                  </Typography>
                  <Typography component="span" variant="body1">
                    {' '}
                    отметки «Нравится»
                  </Typography>
                </div>
              </div>
              <div className={classes.tweetPageIconButton}>
                <div>
                  <IconButton>
                    <ChatBubbleOutlineIcon />
                  </IconButton>
                </div>
                <div>
                  <IconButton>
                    <RepeatIcon />
                  </IconButton>
                </div>
                <div>
                  <IconButton onClick={onTweetLike}>
                    <FavoriteBorderIcon />
                  </IconButton>
                </div>
                <div>
                  <IconButton>
                    <ReplyIcon />
                  </IconButton>
                </div>
              </div>
              <div className={classes.tweetPageTextarea}>
                <TweetForm classes={classes} />
              </div>
            </div>
          </Paper>
          <div className={classes.tweetFormBottomLine}></div>
        </>
      )}
    </div>
  )
}
