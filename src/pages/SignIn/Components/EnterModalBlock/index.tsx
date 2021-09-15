import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { SignInType } from '../../../../redux/auth/Types'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useStylesSignIn } from '../../theme'
import { fetchSignInData } from '../../../../redux/auth/actions'
import Alert from '@material-ui/lab/Alert'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControl from '@material-ui/core/FormControl'
import ModalBlock from '../../../../Component/ModalBlock'
import Button from '@material-ui/core/Button'
import TwitterIcon from '@material-ui/icons/Twitter'
import { getLoadingStatusAuth } from '../../../../redux/auth/selectors'
import { LoadingStatus } from '../../../../redux/Types'

interface EnterModalBlock {
  openModal: boolean
  onClose: () => void
  classes: ReturnType<typeof useStylesSignIn>
}

const LoginFormSchema = yup.object().shape({
  email: yup.string().email('Неверная почта').required('Введите почту'),
  password: yup
    .string()
    .min(6, 'Минимальное количество символов пароля 6 символов')
    .required('Введите пароль'),
})

export const EnterModalBlock: React.FC<EnterModalBlock> = ({
  openModal,
  onClose,
  classes,
}): React.ReactElement => {
  const dispatch = useDispatch()
  const loadingStatusAuth = useSelector(getLoadingStatusAuth)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginFormSchema),
  })

  const onSubmit = (data: SignInType) => {
    dispatch(fetchSignInData(data))
    onClose()
  }

  return (
    <ModalBlock visible={openModal}>
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
        {loadingStatusAuth === LoadingStatus.ERROR && (
          <Alert severity="error">Ошибка... Неправельний логин или пароль!</Alert>
        )}
        <DialogActions>
          <Button
            disabled={loadingStatusAuth === 'LOADING'}
            type="submit"
            color="primary"
            variant="contained"
            fullWidth>
            Войти
          </Button>
        </DialogActions>
      </form>
    </ModalBlock>
  )
}
