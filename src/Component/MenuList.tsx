import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { IconButton, Typography, Button, Hidden } from '@material-ui/core'
import { useHomeStyle } from '../pages/Home/theme'
import TwitterIcon from '@material-ui/icons/Twitter'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ListAltIcon from '@material-ui/icons/ListAlt'
import PersonIcon from '@material-ui/icons/Person'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import CreateIcon from '@material-ui/icons/Create'
import { TweetForm } from './TweetForm'
import ModalBlock from './ModalBlock'
import { getUserData } from '../redux/auth/selectors'
import { UserSideProfile } from './userSideProfile'

interface MenuListProps {
  classes: ReturnType<typeof useHomeStyle>
}

export const MenuList: React.FC<MenuListProps> = ({
  classes,
}: MenuListProps): React.ReactElement => {
  const [openModal, setOpenModal] = React.useState<boolean>(false)
  const userData = useSelector(getUserData)

  const handleClickOpen = () => {
    setOpenModal(true)
  }
  const handleClose = () => {
    setOpenModal(false)
  }

  return (
    <div className={classes.menu}>
      <ul className={classes.menuList}>
        <li>
          <Link to="/home" className={classes.menuListLink}>
            <IconButton>
              <TwitterIcon className={classes.menuLogoIcon} color="primary" />
            </IconButton>
          </Link>
        </li>
        <li className={classes.menulistItem}>
          <div>
            <Link to="/home" className={classes.menuListLink}>
              <HomeIcon className={classes.menulistItemIcon} />
              <Hidden smDown>
                <Typography variant="h6" className={classes.menulistItemLabel}>
                  Главная
                </Typography>
              </Hidden>
            </Link>
          </div>
        </li>
        <li className={classes.menulistItem}>
          <div>
            <Link to="/home" className={classes.menuListLink}>
              <SearchIcon className={classes.menulistItemIcon} />
              <Hidden smDown>
                <Typography variant="h6" className={classes.menulistItemLabel}>
                  Поиск
                </Typography>
              </Hidden>
            </Link>
          </div>
        </li>
        <li className={classes.menulistItem}>
          <div>
            <Link to="/home" className={classes.menuListLink}>
              <NotificationsNoneIcon className={classes.menulistItemIcon} />
              <Hidden smDown>
                <Typography variant="h6" className={classes.menulistItemLabel}>
                  Уведомления
                </Typography>
              </Hidden>
            </Link>
          </div>
        </li>
        <li className={classes.menulistItem}>
          <div>
            <Link to="/home" className={classes.menuListLink}>
              <MailOutlineIcon className={classes.menulistItemIcon} />
              <Hidden smDown>
                <Typography variant="h6" className={classes.menulistItemLabel}>
                  Сообщения
                </Typography>
              </Hidden>
            </Link>
          </div>
        </li>
        <li className={classes.menulistItem}>
          <div>
            <Link to="/home" className={classes.menuListLink}>
              <BookmarkBorderIcon className={classes.menulistItemIcon} />
              <Hidden smDown>
                <Typography variant="h6" className={classes.menulistItemLabel}>
                  Закладки
                </Typography>
              </Hidden>
            </Link>
          </div>
        </li>
        <li className={classes.menulistItem}>
          <div>
            <Link to="/home" className={classes.menuListLink}>
              <ListAltIcon className={classes.menulistItemIcon} />
              <Hidden smDown>
                <Typography variant="h6" className={classes.menulistItemLabel}>
                  Списки
                </Typography>
              </Hidden>
            </Link>
          </div>
        </li>
        <li className={classes.menulistItem}>
          <div>
            <Link to={`/profile/${userData?._id}`} className={classes.menuListLink}>
              <PersonIcon className={classes.menulistItemIcon} />
              <Hidden smDown>
                <Typography variant="h6" className={classes.menulistItemLabel}>
                  Профиль
                </Typography>
              </Hidden>
            </Link>
          </div>
        </li>
        <li className={classes.menulistItem}>
          <div>
            <Link to="/home" className={classes.menuListLink}>
              <MoreHorizIcon className={classes.menulistItemIcon} />
              <Hidden smDown>
                <Typography variant="h6" className={classes.menulistItemLabel}>
                  Еще
                </Typography>
              </Hidden>
            </Link>
          </div>
        </li>
        <li>
          <Button
            className={classes.menuListButton}
            onClick={handleClickOpen}
            variant="contained"
            color="primary"
            fullWidth>
            <Hidden smDown>Твитнуть</Hidden>
            <Hidden mdUp>
              <CreateIcon />
            </Hidden>
          </Button>
          <ModalBlock onClose={handleClose} visible={openModal} withTitle>
            <TweetForm classes={classes} />
          </ModalBlock>
        </li>
      </ul>
      <UserSideProfile classes={classes} />
    </div>
  )
}
