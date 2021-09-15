import React from 'react'
import { useSelector } from 'react-redux'
import { useStylesSignIn } from './theme'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search'
import GroupIcon from '@material-ui/icons/Group'
import MessageIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import { RegisterModalBlock } from './Components/RegisterModalBlock'
import { EnterModalBlock } from './Components/EnterModalBlock'
import { Link } from '@material-ui/core'
import { getLoadingStatusAuth } from '../../redux/auth/selectors'
import { LoadingStatus } from '../../redux/Types'

export const SignIn: React.FC = (): React.ReactElement => {
  const classes = useStylesSignIn()
  const loadingStatusAuth = useSelector(getLoadingStatusAuth)
  const [openRegisterModalBlock, setOpenRegisterModalBlock] = React.useState<boolean>(false)
  const [openEnterModalBlock, setOpenEnterModalBlock] = React.useState<boolean>(false)

  const handleClickRegister = () => {
    setOpenRegisterModalBlock(true)
  }

  const handleClickEnter = () => {
    setOpenEnterModalBlock(true)
  }

  const handleCloseRegister = () => {
    setOpenRegisterModalBlock(false)
  }

  const handleCloseEnter = () => {
    if (loadingStatusAuth === LoadingStatus.LOADED) {
      setOpenEnterModalBlock(false)
    }
  }

  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault()

  return (
    <div>
      <div className={classes.wrapper}>
        <section className={classes.blueSide}>
          <TwitterIcon color="secondary" className={classes.blueSideBigIcon} />
          <ul className={classes.blueSideListInfo}>
            <li className={classes.blueSideListInfoItem}>
              <Typography variant="h6">
                <SearchIcon className={classes.blueSideListInfoIcon} />
                Читайте о том, что вам интересно
              </Typography>
            </li>
            <li className={classes.blueSideListInfoItem}>
              <Typography variant="h6">
                <GroupIcon className={classes.blueSideListInfoIcon} />
                Узнайте о том, что говорят в мире
              </Typography>
            </li>
            <li className={classes.blueSideListInfoItem}>
              <Typography variant="h6">
                <MessageIcon className={classes.blueSideListInfoIcon} />
                Присоединяйтесь к общению
              </Typography>
            </li>
          </ul>
        </section>
        <section className={classes.loginSide}>
          <div className={classes.loginSideWrapper}>
            <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
            <Typography variant="h4" className={classes.loginSideTitle}>
              В курсе происходящего
            </Typography>
            <Typography>
              <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
            </Typography>
            <br />
            <Button
              onClick={handleClickRegister}
              style={{ marginBottom: 20 }}
              variant="contained"
              color="primary">
              Зарегистрироваться
            </Button>
            <Button variant="outlined" color="primary" onClick={handleClickEnter}>
              Войти
            </Button>
            <RegisterModalBlock
              classes={classes}
              onClose={handleCloseRegister}
              openModal={openRegisterModalBlock}
            />
            <EnterModalBlock
              classes={classes}
              onClose={handleCloseEnter}
              openModal={openEnterModalBlock}
            />
          </div>
        </section>
      </div>
      <footer>
        <Typography className={classes.footer} color="textSecondary">
          <Link href="#" onClick={preventDefault} color="inherit">
            О нас
          </Link>
          <Link href="#" onClick={preventDefault} color="inherit">
            Справочный центр
          </Link>
          <Link href="#" onClick={preventDefault} color="inherit">
            Условия предоставления услуг
          </Link>
          <Link href="#" onClick={preventDefault} color="inherit">
            Политика конфиденциальности
          </Link>
          <Link href="#" onClick={preventDefault} color="inherit">
            Политика в отношении файлов cookie
          </Link>
          <Link href="#" onClick={preventDefault} color="inherit">
            Информация о рекламе
          </Link>
          <Link href="#" onClick={preventDefault} color="inherit">
            Блог
          </Link>
          <Link href="#" onClick={preventDefault} color="inherit">
            Статус
          </Link>
          <Link href="#" onClick={preventDefault} color="inherit">
            Работа
          </Link>
          <Link href="#" onClick={preventDefault} color="inherit">
            Ресурсы бренда
          </Link>
          <Link href="#" onClick={preventDefault} color="inherit">
            Реклама
          </Link>
          <Link href="#" onClick={preventDefault} color="inherit">
            Маркетинг
          </Link>
          <Link href="#" onClick={preventDefault} color="inherit">
            Твиттер для бизнеса
          </Link>
          <Link href="#" onClick={preventDefault} color="inherit">
            Разработчикам
          </Link>
          <Link href="#" onClick={preventDefault} color="inherit">
            Каталог
          </Link>
          <Link href="#" onClick={preventDefault} color="inherit">
            Настройки
          </Link>
        </Typography>
        <div className={classes.copywriting}>
          <Typography color="textSecondary">© Twitter, Inc., 2021.</Typography>{' '}
        </div>
      </footer>
    </div>
  )
}

export default SignIn
