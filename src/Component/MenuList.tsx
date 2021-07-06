import React from 'react'
import { IconButton, Typography, Button, Hidden, Dialog, DialogContent} from '@material-ui/core'
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
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { TweetForm } from './TweetForm'
import ModalBlock from './ModalBlock'



interface MenuListProps {
  classes: ReturnType<typeof useHomeStyle>
}

export const MenuList: React.FC<MenuListProps> = ({
  classes,
}: MenuListProps): React.ReactElement => {
  const [openModal, setOpenModal] = React.useState<boolean>(false)

  const handleClickOpen = () => {
    setOpenModal(true)
  }
  const handleClose = () => {
    setOpenModal(false)
  }

  return (
    <div>
      <ul className={classes.menuList}>
        <li>
          <IconButton aria-label="delete">
            <TwitterIcon className={classes.menuLogoIcon} color="primary" />
          </IconButton>
        </li>
        <li className={classes.menulistItem}>
          <div>
            <HomeIcon className={classes.menulistItemIcon} />
            <Hidden smDown>
              <Typography variant="h6" className={classes.menulistItemLabel}>
                Главная
              </Typography>
            </Hidden>
          </div>
        </li>
        <li className={classes.menulistItem}>
          <div>
            <SearchIcon className={classes.menulistItemIcon} />
            <Hidden smDown>
              <Typography variant="h6" className={classes.menulistItemLabel}>
                Поиск
              </Typography>
            </Hidden>
          </div>
        </li>
        <li className={classes.menulistItem}>
          <div>
            <NotificationsNoneIcon className={classes.menulistItemIcon} />
            <Hidden smDown>
              <Typography variant="h6" className={classes.menulistItemLabel}>
                Уведомления
              </Typography>
            </Hidden>
          </div>
        </li>
        <li className={classes.menulistItem}>
          <div>
            <MailOutlineIcon className={classes.menulistItemIcon} />
            <Hidden smDown>
              <Typography variant="h6" className={classes.menulistItemLabel}>
                Сообщения
              </Typography>
            </Hidden>
          </div>
        </li>
        <li className={classes.menulistItem}>
          <div>
            <BookmarkBorderIcon className={classes.menulistItemIcon} />
            <Hidden smDown>
              <Typography variant="h6" className={classes.menulistItemLabel}>
                Закладки
              </Typography>
            </Hidden>
          </div>
        </li>
        <li className={classes.menulistItem}>
          <div>
            <ListAltIcon className={classes.menulistItemIcon} />
            <Hidden smDown>
              <Typography variant="h6" className={classes.menulistItemLabel}>
                Списки
              </Typography>
            </Hidden>
          </div>
        </li>
        <li className={classes.menulistItem}>
          <div>
            <PersonIcon className={classes.menulistItemIcon} />
            <Hidden smDown>
              <Typography variant="h6" className={classes.menulistItemLabel}>
                Профиль
              </Typography>
            </Hidden>
          </div>
        </li>
        <li className={classes.menulistItem}>
          <div>
            <MoreHorizIcon className={classes.menulistItemIcon} />
            <Hidden smDown>
              <Typography variant="h6" className={classes.menulistItemLabel}>
                Еще
              </Typography>
            </Hidden>
          </div>
        </li>
        <li>
          <Button className={classes.menuListButton} onClick={handleClickOpen} variant="contained" color="primary" fullWidth>
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
    </div>
  )
}
