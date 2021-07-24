import React from 'react'
import { useStylesSignIn } from '../../theme'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControl from '@material-ui/core/FormControl'
import ModalBlock from '../../../../Component/ModalBlock'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TwitterIcon from '@material-ui/icons/Twitter'

interface RegisterModalBlock {
  openModal: boolean
  onClose: () => void
  classes: ReturnType<typeof useStylesSignIn>
}

export const RegisterModalBlock: React.FC<RegisterModalBlock> = ({
  openModal,
  onClose,
  classes,
}): React.ReactElement => {
  return (
    <ModalBlock visible={openModal} onClose={onClose}>
      <TwitterIcon color="primary" className={classes.dialogIcon} />
      <DialogTitle id="form-dialog-title">Создайте учетную запись</DialogTitle>
      <FormControl>
        <TextField
          autoFocus
          variant="outlined"
          margin="dense"
          id="name"
          label="Имя"
          fullWidth
          style={{ marginBottom: 10 }}
        />
        <TextField
          autoFocus
          variant="outlined"
          margin="dense"
          id="number"
          label="Телефон"
          fullWidth
          style={{ height: 60 }}
        />
        <Typography style={{ fontSize: 14 }} color="primary">
          Использовать эл. почту
        </Typography>
        <Typography variant="h6" className={classes.dialogTitleBirthday}>
          Дата рождения
        </Typography>
        <Typography style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.54)' }}>
          Эта информация не будет общедоступной. Подтвердите свой возраст, даже если эта учетная
          запись предназначена для компании, домашнего животного и т. д.
        </Typography>
        <TextField
          autoFocus
          variant="outlined"
          margin="dense"
          id="mounth"
          label="Мясяц"
          fullWidth
          style={{ marginBottom: 10 }}
        />
        <TextField
          autoFocus
          variant="outlined"
          margin="dense"
          id="day"
          label="День"
          fullWidth
          style={{ marginBottom: 10 }}
        />
        <TextField
          autoFocus
          variant="outlined"
          margin="dense"
          id="year"
          label="Год"
          fullWidth
          style={{ marginBottom: 10 }}
        />
      </FormControl>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="contained" fullWidth>
          Зарегистрироваться
        </Button>
      </DialogActions>
    </ModalBlock>
  )
}
