import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { SignInType } from '../../../../redux/auth/Types'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useStylesSignIn } from '../../theme'
import { fetchSignInData } from '../../../../redux/auth/actions'
import { Color } from '@material-ui/lab/Alert'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControl from '@material-ui/core/FormControl'
import ModalBlock from '../../../../Component/ModalBlock'
import Button from '@material-ui/core/Button'
import TwitterIcon from '@material-ui/icons/Twitter'
import { getLoadingStatusAuth } from '../../../../redux/auth/selectors'
import { Notification } from '../../../../Component/Notification'

interface EnterModalBlock {
  openModal: boolean
  onClose: () => void
  classes: ReturnType<typeof useStylesSignIn>
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
      openNotificationRef.current('Авторизация прошла успешно', 'success')
      onClose()
    } else if (status === 'ERROR') {
      openNotificationRef.current('Ошибка авторизации', 'error')
    }
  }, [loadingStatusAuth])

  const onSubmit = (data: SignInType) => {
    dispatch(fetchSignInData(data))
  }

  return (
    <Notification>
      {(callback) => {
        openNotificationRef.current = callback
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
                <Button disabled={loadingStatusAuth === "LOADING"} type="submit" color="primary" variant="contained" fullWidth>
                  Войти
                </Button>
              </DialogActions>
            </form>
          </ModalBlock>
        )
      }}
    </Notification>
  )
}
