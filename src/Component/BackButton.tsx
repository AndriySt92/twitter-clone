import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { useHistory } from 'react-router-dom'

export const BackButton = () => {
    const history = useHistory()
    const clickHandler = () => {
        history.goBack()
    }
  return (
    <IconButton onClick={clickHandler} style={{ marginRight: 15 }} color='primary'>
      <ArrowBackIcon />
    </IconButton>
  )
}

export default BackButton
