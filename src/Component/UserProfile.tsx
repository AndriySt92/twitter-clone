import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import {
  Avatar,
  Typography,
  Tabs,
  Tab,
  Button,
  Box,
  DialogActions,
  DialogTitle,
  FormControl,
  TextField,
} from '@material-ui/core'
import ModalBlock from './ModalBlock'
import { useForm } from 'react-hook-form'
import DateRangeIcon from '@material-ui/icons/DateRange'
import { useHomeStyle } from '../pages/Home/theme'
import { formatDateMonthYear } from '../utils/formatDate'
import { userApi } from '../API/userApi'
import { UserDataType } from '../redux/auth/Types'
import { fetchUserTweets } from '../redux/tweets/actions'
import { getUserTweets } from '../redux/tweets/selectors'
import { Tweet } from './Tweet'
import { updateUserInfo } from '../redux/auth/actions'
import { getUserData } from '../redux/auth/selectors'
import { UploadImgAvatar } from './UploadImgAvatar'
import { uploadImg } from '../utils/uploadImg'

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

export interface ImagesFileType {
  image: Blob
  url: string
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export const UserProfile: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const classes = useHomeStyle()
  const dispatch = useDispatch()
  const [value, setValue] = useState(0)
  const [visibleModal, setVisibleModal] = useState(false)
  const [avatarFile, setAvatarFile] = useState<ImagesFileType | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [userData, setUserData] = useState<UserDataType | null>(null)
  const userTweets = useSelector(getUserTweets)
  const user = useSelector(getUserData)

  useEffect(() => {
    const userId = match.params.id
    userApi.getUserInfo(userId).then((res) => {
      setUserData(res.data)
    })
    dispatch(fetchUserTweets(userId))
  }, [match.params.id])

  useEffect(() => {
    setUserData(user)
  }, [user])

  if (!userData) {
    return null
  }

  const formatDateCreateProfile = formatDateMonthYear(userData.createdAt)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  const handleCloseModal = () => {
    setVisibleModal(false)
  }

  const handleClickCustomizeProfile = () => {
    setVisibleModal(true)
  }

  const onSubmit = async (data: any) => {
    const file = avatarFile?.image
    const { url } = await uploadImg(file)
    data.avatar = url
    data.id = userData._id
    dispatch(updateUserInfo(data))
    setVisibleModal(false)
    console.log(data)
  }

  return (
    <div className={classes.profile}>
      <div className={classes.profileHeader}></div>
      <div className={classes.profileInfo}>
        <div className={classes.profileInfoHeader}>
          <Avatar className={classes.profileAvatar} src={userData.avatar} />
          <Button
            variant="outlined"
            className={classes.profileButton}
            onClick={handleClickCustomizeProfile}>
            ???????????????????? ??????????????
          </Button>
          <ModalBlock
            visible={visibleModal}
            onClose={handleCloseModal}
            withTitle
            title="???????????????? ??????????????">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={classes.uploadAvatarBlock}>
                {avatarFile && <Avatar className={classes.profileAvatar} src={avatarFile.url} />}
                {!avatarFile && <Avatar className={classes.profileAvatar} />}
                <UploadImgAvatar
                  classes={classes}
                  onChangeImages={setAvatarFile}
                  image={avatarFile}
                />
              </div>
              <FormControl style={{ width: '100%' }}>
                <TextField
                  {...register('fullname')}
                  name="fullname"
                  autoFocus
                  variant="outlined"
                  label="??????"
                  fullWidth
                  style={{ marginBottom: 30, marginTop: 20 }}
                />

                <TextField
                  {...register('location')}
                  name="location"
                  autoFocus
                  variant="outlined"
                  label="????????????????????????????"
                  fullWidth
                  style={{ marginBottom: 30 }}
                />

                <TextField
                  {...register('about')}
                  autoFocus
                  variant="outlined"
                  label="?? ????????"
                  fullWidth
                  style={{ marginBottom: 30 }}
                />

                <TextField
                  {...register('website')}
                  name="website"
                  autoFocus
                  variant="outlined"
                  label="??????-????????"
                  fullWidth
                  style={{ marginBottom: 30 }}
                />
                <TextField
                  {...register('birthday')}
                  name="birthday"
                  label="???????? ????????????????"
                  type="date"
                  defaultValue="2000-01-01"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
              <DialogActions>
                <Button type="submit" color="primary" variant="contained" fullWidth>
                  ??????????????????
                </Button>
              </DialogActions>
            </form>
          </ModalBlock>
        </div>
        <div className={classes.profileInfoMain}>
          <Typography variant="h6" style={{ lineHeight: '16px' }}>
            {userData.fullname}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {userData.username}
          </Typography>
          <Typography variant="subtitle1" style={{ lineHeight: '40px' }}>
            {userData.about}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" style={{ display: 'flex' }}>
            <DateRangeIcon /> ?????????????????????? ???? ?????????? c {formatDateCreateProfile[1]}{' '}
            {formatDateCreateProfile[0]} ??.
          </Typography>
          <div style={{ display: 'flex' }}>
            <Typography
              variant="body1"
              color="textSecondary"
              style={{ display: 'flex', marginRight: '10px' }}>
              33 ?? ????????????????
            </Typography>
            <Typography variant="body1" color="textSecondary" style={{ display: 'flex' }}>
              12 ??????????????????
            </Typography>
          </div>
        </div>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered>
          <Tab label="??????????" {...a11yProps(0)} />
          <Tab label="?????????? ?? ????????????" {...a11yProps(1)} />
          <Tab label="??????????" {...a11yProps(2)} />
          <Tab label="??????????????????" {...a11yProps(4)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          {userTweets.map((tweet) => (
            <Tweet key={tweet._id} classes={classes} {...tweet} />
          ))}
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
