import React from 'react'
import {
  IconButton,
  Paper,
  Typography,
  Container,
  Grid,
  makeStyles,
  withStyles,
  Avatar,
  InputBase,
  Button,
} from '@material-ui/core'
import { useHomeStyle } from '../pages/Home'
import TwitterIcon from '@material-ui/icons/Twitter'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ListAltIcon from '@material-ui/icons/ListAlt'
import PersonIcon from '@material-ui/icons/Person'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

interface MenuListProps {
  classes: ReturnType<typeof useHomeStyle>
}

export const MenuList: React.FC<MenuListProps> = ({
  classes,
}: MenuListProps): React.ReactElement => {
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
            <Typography variant="h6" className={classes.menulistItemLabel}>
              Главная
            </Typography>
          </div>
        </li>
        <li className={classes.menulistItem}>
          <div>
            <SearchIcon className={classes.menulistItemIcon} />
            <Typography variant="h6" className={classes.menulistItemLabel}>
              Поиск
            </Typography>
          </div>
        </li>
        <li className={classes.menulistItem}>
          <div>
            <NotificationsNoneIcon className={classes.menulistItemIcon} />
            <Typography variant="h6" className={classes.menulistItemLabel}>
              Уведомления
            </Typography>
          </div>
        </li>
        <li className={classes.menulistItem}>
          <div>
            <MailOutlineIcon className={classes.menulistItemIcon} />
            <Typography variant="h6" className={classes.menulistItemLabel}>
              Сообщения
            </Typography>
          </div>
        </li>
        <li className={classes.menulistItem}>
          <div>
            <BookmarkBorderIcon className={classes.menulistItemIcon} />
            <Typography variant="h6" className={classes.menulistItemLabel}>
              Закладки
            </Typography>
          </div>
        </li>
        <li className={classes.menulistItem}>
          <div>
            <ListAltIcon className={classes.menulistItemIcon} />
            <Typography variant="h6" className={classes.menulistItemLabel}>
              Списки
            </Typography>
          </div>
        </li>
        <li className={classes.menulistItem}>
          <div>
            <PersonIcon className={classes.menulistItemIcon} />
            <Typography variant="h6" className={classes.menulistItemLabel}>
              Профиль
            </Typography>
          </div>
        </li>
        <li className={classes.menulistItem}>
          <div>
            <MoreHorizIcon className={classes.menulistItemIcon} />
            <Typography variant="h6" className={classes.menulistItemLabel}>
              Еще
            </Typography>
          </div>
        </li>
        <li>
          <Button
            className={classes.menuListButton}
            variant="contained"
            color="primary"
            fullWidth>Твитнуть</Button>
        </li>
      </ul>
    </div>
  )
}
