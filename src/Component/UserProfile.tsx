import React from 'react'
import { Avatar, Typography, Tabs, Tab, Button } from '@material-ui/core'
import DateRangeIcon from '@material-ui/icons/DateRange'
import { useHomeStyle } from '../pages/Home/theme'

interface UserProfilePropsType {
  classes: ReturnType<typeof useHomeStyle>
}

export const UserProfile: React.FC<UserProfilePropsType> = ({ classes }) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={classes.profile}>
      <div className={classes.profileHeader}></div>
      <div className={classes.profileInfo}>
        <div className={classes.profileInfoHeader}>
          <Avatar className={classes.profileAvatar} />
          <Button variant="outlined" className={classes.profileButton}>
            Настороить профиль
          </Button>
        </div>
        <Typography variant="h6" style={{ lineHeight: '16px' }}>
          Archakov Anton
        </Typography>
        <Typography variant="body1" color="textSecondary">
          @archakovAnton
        </Typography>
        <Typography variant="subtitle1" style={{ lineHeight: '40px' }}>
          Frontent developer / UI Designer / React / Javascript developer
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" style={{ display: 'flex' }}>
          <DateRangeIcon /> Регистрация на сайте ноябрь 2021 г.
        </Typography>
        <div style={{display:'flex'}}>
        <Typography variant="body1" color="textSecondary" style={{ display: 'flex',marginRight:'10px' }}>
          33 в читаемых
        </Typography>
        <Typography variant="body1" color="textSecondary" style={{ display: 'flex' }}>
          12 читателей
        </Typography>
        </div>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered>
          <Tab label="Твиты" />
          <Tab label="Твиты и ответы" />
          <Tab label="Медиа" />
          <Tab label="Нравиться" />
        </Tabs>
      </div>
    </div>
  )
}
