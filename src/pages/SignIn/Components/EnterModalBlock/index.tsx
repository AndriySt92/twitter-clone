import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useStylesSignIn } from '../../theme'
import { fetchUserData } from '../../../../redux/auth/actions'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControl from '@material-ui/core/FormControl'
import ModalBlock from '../../../../Component/ModalBlock'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TwitterIcon from '@material-ui/icons/Twitter'

interface EnterModalBlock {
  openModal: boolean
  onClose: () => void
  classes: ReturnType<typeof useStylesSignIn>
}
interface LoginForm {
  email: string
  password: string
}

const LoginFormSchema = yup.object().shape({
  email: yup.string().email('Неверная почта').required('Введите почту'),
  password: yup
    .string()
    .min(6, 'Минимальное количество пароля 6 символов')
    .required('Введите пароль'),
})

export const EnterModalBlock: React.FC<EnterModalBlock> = ({
  openModal,
  onClose,
  classes,
}): React.ReactElement => {
  const dispatch = useDispatch()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginFormSchema),
  })

  const onSubmit = (data: LoginForm) => {
    onClose()
    console.log(data)
    dispatch(fetchUserData(data))
  }

  console.log(errors)
  return (
    <ModalBlock visible={openModal} onClose={onClose}>
      <TwitterIcon color="primary" className={classes.dialogIcon} />
      <DialogTitle id="form-dialog-title">Войти</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl style={{ width: '100%' }}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.email}
                helperText={errors.email?.message}
                autoFocus
                variant="outlined"
                margin="dense"
                label="Введите логин"
                fullWidth
                style={{ marginBottom: 10 }}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.password}
                helperText={errors.password?.message}
                autoFocus
                variant="outlined"
                margin="dense"
                label="Введите пароль"
                type="password"
                fullWidth
                style={{ height: 60 }}
              />
            )}
          />
        </FormControl>
        <DialogActions>
          <Button type="submit" color="primary" variant="contained" fullWidth>
            Войти
          </Button>
        </DialogActions>
      </form>
    </ModalBlock>
  )
}
