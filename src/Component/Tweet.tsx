import React from "react";
import {
  IconButton,
  Paper,
  Typography,
  Avatar,
} from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ReplyIcon from "@material-ui/icons/Reply";
import { useHomeStyle } from "../pages/Home/theme";

interface TweetProps {
  text: string;
  classes: ReturnType<typeof useHomeStyle>;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

export const Tweet: React.FC<TweetProps> = ({
  classes,
  text,
  user,
}: TweetProps): React.ReactElement => {
  return (
    <Paper variant="outlined" className={classes.tweetBody}>
          <Avatar
            className={classes.tweetAvatar}
            alt="Travis Howard"
            src={user.avatarUrl}
          />
          <div>
          <Typography>
            <b>{user.fullname}</b>
            <span className={classes.tweetsUserName}> @{user.username}</span>
            &nbsp;
            <span className={classes.tweetsUserName}>.</span>&nbsp;
            <span className={classes.tweetsUserName}>1 ч</span>
          </Typography>
          <Typography variant="body1">{text}</Typography>
          <div className={classes.tweetsFooter}>
            <div>
              <IconButton color="primary">
                <ChatBubbleOutlineIcon style={{ fontSize: 20 }} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton color="primary">
                <RepeatIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton color="primary">
                <FavoriteBorderIcon style={{ fontSize: 20 }} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton color="primary">
                <ReplyIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
          </div>
          </div>
    </Paper>
  );
};
