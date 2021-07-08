import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useHomeStyle } from '../pages/Home/theme'
import { Preloader } from './Preloader'
import { cleanTweetData, fetchTweet } from '../redux/tweet/actions'
import { getLoadingStatusTweet, getTweet } from '../redux/tweet/selectors'
import { Tweet } from './Tweet'

export const TweetPage: React.FC = (): React.ReactElement | null => {
  const dispatch = useDispatch()
  const tweet = useSelector(getTweet)
  const isLoadingTweet = useSelector(getLoadingStatusTweet)
  const classes = useHomeStyle()
  const params: { id?: string } = useParams()
  const id = params.id

 useEffect(() => {
   if(id) dispatch(fetchTweet(id))
   return () => {
    dispatch(cleanTweetData())
  }
 }, [id])

  if (!tweet) {
    console.log('null')
    return null
  }
  
  return <div>{isLoadingTweet ? <Preloader /> : <Tweet classes={classes} _id={tweet._id} text={tweet.text} user={tweet.user} />}</div>
}
