import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  IconButton,
  Avatar,
  TextareaAutosize,
  CircularProgress,
  Button,
  Snackbar,
} from '@material-ui/core'
import PublicIcon from '@material-ui/icons/Public'
import CloseIcon from '@material-ui/icons/Close'
import GifIcon from '@material-ui/icons/Gif'
import EventAvailableIcon from '@material-ui/icons/EventAvailable'
import BarChartIcon from '@material-ui/icons/BarChart'
import MoodIcon from '@material-ui/icons/Mood'
import ControlPointIcon from '@material-ui/icons/ControlPoint'
import { useHomeStyle } from '../pages/Home/theme'
import { addTweet } from '../redux/tweets/actions'
import { getLoadingStatusAddTweet } from '../redux/tweets/selectors'
import { LoadingStatus } from '../redux/Types'
import { UploadImg } from '../Component/UploadImg'

interface TweetFormProps {
  classes: ReturnType<typeof useHomeStyle>
}

export interface ImagesFileType {
  image: Blob
  url: string
}
export const TweetForm: React.FC<TweetFormProps> = ({
  classes,
}: TweetFormProps): React.ReactElement => {
  const [text, setText] = useState<string>('')
  const [images, setImages] = useState<ImagesFileType[]>([])
  const [visibleSnackbar, setVisibleSnackbar] = useState<boolean>(false)
  const dispatch = useDispatch()
  const isLoadingAddTweet = useSelector(getLoadingStatusAddTweet)
  const textPercent = Math.round((text.length / 280) * 100)
  const maxLength = 280 - text.length

  useEffect(() => {
    if (isLoadingAddTweet === 'ERROR') {
      setVisibleSnackbar(true)
    }
  }, [isLoadingAddTweet])

  const handlerCloseSnackbar = () => {
    setVisibleSnackbar(false)
  }

  const handlerChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value)
    }
  }

  const handlerClickAddTweet = () => {
    
    dispatch(addTweet(text))
    setText('')
  }

  return (
    <div className={classes.tweetForm}>
      <Avatar
        className={classes.tweetAvatar}
        alt="Travis Howard"
        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      />
      <div className={classes.tweetFormTextarea}>
        <TextareaAutosize
          value={text}
          onChange={(e) => handlerChangeTextarea(e)}
          rowsMax={4}
          placeholder="Что происходит?"
        />
        {text && (
          <div className={classes.tweetFormPublic}>
            <div>
              <PublicIcon className={classes.tweetFormPublicIcon} />
              <span>Отвечать могут все пользыватели</span>
            </div>
          </div>
        )}

        <div className={classes.tweetFormFooter}>
          <div>
            <UploadImg classes={classes} images={images} onChangeImages={setImages} />
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
            {text && <span>{text.length > 280 ? maxLength : text.length}</span>}
            {text && (
              <>
                <div className={classes.tweetFormCircleProgress}>
                  <CircularProgress
                    variant="static"
                    value={textPercent >= 100 ? 100 : textPercent}
                    thickness={4}
                    // color="primary"
                    size={20}
                    style={text.length > 280 ? { color: 'red' } : {}}
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
                <div style={{ width: 1, height: 33, backgroundColor: '#dedede' }}></div>
                <IconButton className={classes.tweetFormFooterIcon}>
                  <ControlPointIcon />
                </IconButton>
              </>
            )}
          </div>
          <Button
            onClick={handlerClickAddTweet}
            disabled={text.length < 1 || text.length > 280}
            className={classes.tweetFormFooterButton}
            variant="contained"
            color="primary">
            {isLoadingAddTweet === LoadingStatus.LOADING ? (
              <CircularProgress size={16} color="inherit" />
            ) : (
              'Твитнуть'
            )}
          </Button>
          <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            autoHideDuration={6000}
            open={visibleSnackbar}
            onClose={handlerCloseSnackbar}
            message="Ошибка! Твит не добавился"
            action={
              <React.Fragment>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handlerCloseSnackbar}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
        </div>
      </div>
    </div>
  )
}
