import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Paper, Typography, List, ListItem, ListItemText, Divider } from '@material-ui/core'
import { useHomeStyle } from '../pages/Home/theme'
import { getLoadingStatusTopics, getTopics } from '../redux/topics/selectors'
import { Preloader } from '../Component/Preloader'

interface TopicsProps {
  classes: ReturnType<typeof useHomeStyle>
}

export const Topics: React.FC<TopicsProps> = ({ classes }: TopicsProps): React.ReactElement => {
  const topics = useSelector(getTopics)
  const isLoadingTopics = useSelector(getLoadingStatusTopics)
  return (
    <Paper className={classes.rightSideBlock} elevation={0}>
      <Paper className={classes.rightSideBlockHeader} variant="outlined">
        <b>Актуальные темы</b>
      </Paper>
      <List>
        {isLoadingTopics ? (
          <Preloader />
        ) : (
          topics.map((topic) => (
            <React.Fragment key={topic._id}>
              <ListItem className={classes.rightSideBlockItem}>
                <Link to={'/home/search?q=' + topic.tag}>
                  <ListItemText
                    primary={topic.title}
                    secondary={
                      <>
                        <Typography component="span" variant="body1">
                          {topic.tag}
                        </Typography>
                        <Typography component="div" variant="body1">
                          Твитов: {topic.count}
                        </Typography>
                      </>
                    }
                  />
                </Link>
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))
        )}
      </List>
    </Paper>
  )
}

export default Topics