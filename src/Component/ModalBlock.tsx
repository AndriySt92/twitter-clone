import React from 'react'
import { IconButton, Dialog, DialogContent, DialogTitle } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

export interface DialogProps {
  children: React.ReactNode
  visible?: boolean
  onClose?: () => void
  withTitle?: boolean
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
    <Dialog open={visible} aria-labelledby="form-dialog-title">
      {withTitle && (
        <DialogTitle id="form-dialog-title">
          <IconButton aria-label="close" onClick={onClose} style={{ marginRight: 10 }}>
            <CloseIcon style={{ display: 'block', width: 32, height: 32 }} />
          </IconButton>
          {title}
        </DialogTitle>
      )}
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}

export default ModalBlock
