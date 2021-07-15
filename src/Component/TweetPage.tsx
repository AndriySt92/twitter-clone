import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useHomeStyle } from '../pages/Home/theme'
import { IconButton, Paper, Typography, Avatar } from '@material-ui/core'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ReplyIcon from '@material-ui/icons/Reply'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { Preloader } from './Preloader'
import { cleanTweetData, fetchTweet } from '../redux/tweet/actions'
import { getLoadingStatusTweet, getTweet } from '../redux/tweet/selectors'
import { Tweet } from './Tweet'
import { TweetForm } from './TweetForm'

export const TweetPage: React.FC = (): React.ReactElement | null => {
  const dispatch = useDispatch()
  const tweet = useSelector(getTweet)
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
    console.log('null')
    return null
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
                src={tweet.user.avatarUrl}
              />
              <div>
                <Typography>
                  <b>{tweet.user.fullname}</b>
                  <div>
                    <span className={classes.tweetsUserName}> {tweet.user.username}</span>
                    &nbsp;
                    <span className={classes.tweetsUserName}>.</span>&nbsp;
                    <span className={classes.tweetsUserName}>1 ч</span>
                  </div>
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
            </div>
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
                  65.4 тыс.
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
                <IconButton>
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
        <div className={classes.tweetFormBottomLine}>
          
        </div>
        </>
        
      )}
    </div>
  )
}
