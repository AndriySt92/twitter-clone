import React from 'react'
import {useSelector} from 'react-redux'
import { Avatar, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@material-ui/core'
import { useHomeStyle } from '../pages/Home/theme'
import { getLoadingStatus, getUsers } from '../redux/users/selectors'
import { LoadingStatus } from '../redux/Types'
import Preloader from './Preloader'
import { User } from './User'

interface ReadUsersPropsType {
    classes: ReturnType<typeof useHomeStyle>
}

export const ReadUser: React.FC<ReadUsersPropsType> = ({classes}) => {

    const users = useSelector(getUsers)
    const loadingStatus = useSelector(getLoadingStatus)

    if(loadingStatus !== LoadingStatus.LOADED){
        return <Preloader />
    }

    return (
            <Paper className={classes.rightSideBlock} elevation={0}>
              <Paper variant="outlined" className={classes.rightSideBlockHeader}>
                <b>Кого читать</b>
              </Paper>
              <List>
                  {users?.map(user =>  <User classes={classes} user={user} key={user._id}/> )}
              </List>
            </Paper>
    )
}


