import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { Avatar, Typography, Tabs, Tab, Button, Box } from '@material-ui/core'
import DateRangeIcon from '@material-ui/icons/DateRange'
import { useHomeStyle } from '../pages/Home/theme'
import { formatDateMonthYear } from '../utils/formatDate'
import { userApi } from '../API/userApi'
import { UserDataType } from '../redux/auth/Types'
import { fetchUserTweets } from '../redux/tweets/actions'
import { getUserTweets } from '../redux/tweets/selectors'
import { Tweet } from './Tweet'

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const UserProfile: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const classes = useHomeStyle()
  const dispatch = useDispatch()
  const [value, setValue] = useState(0)
  const [userData, setUserData] = useState<UserDataType | null>(null)
  const userTweets = useSelector(getUserTweets)

  useEffect(() => {
    const userId = match.params.id
    userApi.getUserInfo(userId).then((res) => {
      setUserData(res.data)
    })
    dispatch(fetchUserTweets(userId))
  }, [match.params.id])

  if (!userData) {
    return null
  }

  const formatDateCreateProfile = formatDateMonthYear(userData.createdAt)

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
          {userData.fullname}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {userData.username}
        </Typography>
        <Typography variant="subtitle1" style={{ lineHeight: '40px' }}>
          Frontent developer / UI Designer / React / Javascript developer
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" style={{ display: 'flex' }}>
          <DateRangeIcon /> Регистрация на сайте c {formatDateCreateProfile[1]}{' '}
          {formatDateCreateProfile[0]} г.
        </Typography>
        <div style={{ display: 'flex' }}>
          <Typography
            variant="body1"
            color="textSecondary"
            style={{ display: 'flex', marginRight: '10px' }}>
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
          <Tab label="Твиты" {...a11yProps(0)} />
          <Tab label="Твиты и ответы" {...a11yProps(1)} />
          <Tab label="Медиа" {...a11yProps(2)} />
          <Tab label="Нравиться" {...a11yProps(4)}  />
        </Tabs>
        <TabPanel value={value} index={0}>
        {userTweets.map((tweet) => <Tweet key={tweet._id} classes={classes} {...tweet} />)}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
      </div>
    </div>
  )
}
