import React from 'react'
import {
  IconButton,
  Typography,
  Button,
  Hidden,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@material-ui/core'
import { useStylesSignIn } from '../pages/SignIn'
import CloseIcon from '@material-ui/icons/Close'

export interface DialogProps {
  children: React.ReactNode
  classes?: ReturnType<typeof useStylesSignIn>
  visible?: boolean
  onClose: () => void
  withTitle?:boolean
  title?: string | null
}
export const ModalBlock: React.FC<DialogProps> = ({
  children,
  title = null,
  withTitle = false,
  visible = false,
  onClose,
}: DialogProps): React.ReactElement | null => {
  if (!visible) return null
  return (
    <Dialog open={visible} onClose={onClose} aria-labelledby="form-dialog-title">
      {withTitle && (
        <DialogTitle id="form-dialog-title">
          <IconButton aria-label="close" onClick={onClose}>
            <CloseIcon />
          </IconButton>
          {title}
        </DialogTitle>
      )}
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}

export default ModalBlock
