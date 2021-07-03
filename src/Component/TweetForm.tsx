import React, { useState } from 'react'
import { IconButton, Avatar, TextareaAutosize, CircularProgress, Button } from '@material-ui/core'
import PublicIcon from '@material-ui/icons/Public'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import GifIcon from '@material-ui/icons/Gif'
import EventAvailableIcon from '@material-ui/icons/EventAvailable'
import BarChartIcon from '@material-ui/icons/BarChart'
import MoodIcon from '@material-ui/icons/Mood'
import ControlPointIcon from '@material-ui/icons/ControlPoint'
import { useHomeStyle } from '../pages/Home/theme'

interface TweetFormProps {
  classes: ReturnType<typeof useHomeStyle>
}

export const TweetForm: React.FC<TweetFormProps> = ({
  classes,
}: TweetFormProps): React.ReactElement => {
  const [text, setText] = useState<string>('')
  const textPercent = Math.round((text.length / 280) * 100)
  const maxLength = 280 - text.length

  const handlerChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value)
    }
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
            <IconButton aria-label="delete" className={classes.tweetFormFooterIcon}>
              <ImageOutlinedIcon />
            </IconButton>
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
                <p></p>
                <IconButton className={classes.tweetFormFooterIcon}>
                  <ControlPointIcon />
                </IconButton>
              </>
            )}
          </div>
          <Button
            disabled={text.length < 1 || text.length > 280}
            className={classes.tweetFormFooterButton}
            variant="contained"
            color="primary">
            Твитнуть
          </Button>
        </div>
      </div>
    </div>
  )
}
