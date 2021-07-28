import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { Color } from '@material-ui/lab/Alert'
import { getLoadingStatusAuth } from '../../../../redux/auth/selectors'
import { Notification } from '../../../../Component/Notification'
import { useStylesSignIn } from '../../theme'
import TextField from '@material-ui/core/TextField'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import TwitterIcon from '@material-ui/icons/Twitter'
import FormControl from '@material-ui/core/FormControl'
import ModalBlock from '../../../../Component/ModalBlock'
import Button from '@material-ui/core/Button'
import { SignUpType } from '../../../../redux/auth/Types'
import { fetchSignUpData } from '../../../../redux/auth/actions'

interface RegisterModalBlock {
  openModal: boolean
  onClose: () => void
  classes: ReturnType<typeof useStylesSignIn>
}

const LoginFormSchema = yup.object().shape({
  email: yup.string().email('Неверная почта').required('Введите почту'),
  fullname: yup.string().required('Введите имя'),
  username: yup.string().required('Введите логин'),
  password: yup
    .string()
    .min(6, 'Минимальное количество пароля 6 символов')
    .required('Введите пароль'),
  password2: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли не совпадают'),
})

export const RegisterModalBlock: React.FC<RegisterModalBlock> = ({
  openModal,
  onClose,
  classes,
}): React.ReactElement => {
  const dispatch = useDispatch()
  const [status, setStatus] = useState('NEVER')
  const openNotificationRef = useRef<(text: string, type: Color) => void>(() => {})
  const loadingStatusAuth = useSelector(getLoadingStatusAuth)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginFormSchema),
  })

  useEffect(() => {
    setStatus(loadingStatusAuth)
    if (status === 'LOADED') {
      openNotificationRef.current('Регистрация прошла успешно. Мы Вам отправили письмо, подтвердите регистрацию на почте', 'success')
      onClose()
    } else if (status === 'ERROR') {
      openNotificationRef.current('Ошибка регистрации', 'error')
    }
  }, [loadingStatusAuth])

  const onSubmit = (data: SignUpType) => {
    dispatch(fetchSignUpData(data))
  }

  return (
    <Notification>
      {(callback) => {
        openNotificationRef.current = callback
        return (
          <ModalBlock visible={openModal} onClose={onClose}>
            <TwitterIcon color="primary" className={classes.dialogIcon} />
            <DialogTitle id="form-dialog-title">Регистрация</DialogTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl style={{ width: '100%' }}>
                <Controller
                  name="fullname"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      error={!!errors.fullname}
                      helperText={errors.fullname?.message}
                      autoFocus
                      variant="outlined"
                      margin="dense"
                      label="Введите имя"
                      fullWidth
                      style={{ marginBottom: 10 }}
                    />
                  )}
                />

                <Controller
                  name="username"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      error={!!errors.username}
                      helperText={errors.username?.message}
                      autoFocus
                      variant="outlined"
                      margin="dense"
                      label="Введите логин"
                      fullWidth
                      style={{ height: 60 }}
                    />
                  )}
                />

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
                      label="Введите почту"
                      fullWidth
                      style={{ height: 60 }}
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

                <Controller
                  name="password2"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      error={!!errors.password2}
                      helperText={errors.password2?.message}
                      autoFocus
                      variant="outlined"
                      margin="dense"
                      label="Подтвердите пароль"
                      type="password"
                      fullWidth
                      style={{ height: 60 }}
                    />
                  )}
                />
              </FormControl>
              <DialogActions>
                <Button disabled={loadingStatusAuth === "LOADING"} type="submit" color="primary" variant="contained" fullWidth>
                  Зарегистрироваться
                </Button>
              </DialogActions>
            </form>
          </ModalBlock>
        )
      }}
    </Notification>
  )
}
