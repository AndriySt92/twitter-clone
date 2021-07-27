import React, { useState } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import Alert, { Color } from '@material-ui/lab/Alert'

interface NotificationProps {
  children: (callback: (text: string, type: Color) => void) => React.ReactElement
}

export const Notification: React.FC<NotificationProps> = ({ children }): React.ReactElement => {
  const [open, setOpen] = useState(false)
  const [notificationObj, setNotificationObj] = useState<{ text: string; type: Color }>()

  const openNotification = (text: string, type: Color) => {
    setNotificationObj({
      text,
      type,
    })
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      {children(openNotification)}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={notificationObj?.type}>
          {notificationObj?.text}
        </Alert>
      </Snackbar>
    </>
  )
}
