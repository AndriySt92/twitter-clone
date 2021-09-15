import { makeStyles } from '@material-ui/core'
import grey from '@material-ui/core/colors/grey'

export const useHomeStyle = makeStyles((theme) => ({
  centered: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  wrapper: {
    height: '100vh',
  },
  menu: {
    display: 'flex',
    justifyContent: 'center',
    position: 'sticky',
    top: '0px',
  },
  menuList: {
    position: 'sticky',
    top: 0,
    listStyle: 'none',
    padding: 0,
    margin: 0,
    maxWidth: 230,
    marginLeft: -34,
  },
  menuLogoIcon: {
    fontSize: 36,
  },
  menulistItem: {
    '& div': {
      display: 'inline-flex',
      alignItems: 'center',
      position: 'relative',
      padding: '0 25px 0 20px',
      borderRadius: 30,
      height: 50,
      marginBottom: 15,
      transition: 'background-color 0.15s ease',
    },
    '&:hover': {
      '& div': {
        backgroundColor: 'rgb(29, 161, 242, 0.1)',
        color: theme.palette.primary.main,
      },
    },
  },
  menuListLink: {
    textDecoration: 'none',
    color: 'black',
    display: 'inline-flex',
  },
  menuListButton: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
  },
  menulistItemLabel: {
    fontSize: 20,
    fontWeight: 700,
    marginLeft: 15,
  },
  menulistItemIcon: {
    fontSize: 32,
    marginLeft: -5,
  },
  tweetsWrapper: {
    height: '100%',
  },
  tweetsHeader: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'sticky',
    zIndex: 2,
    top: 0,
    padding: '10px 15px',
    borderLeft: '0',
    borderRight: '0',
    '& h6': {
      fontWeight: 800,
    },
  },
  tweetAvatar: {
    marginRight: 15,
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  tweetWrapper: {
    color: 'inherit',
    textDecoration: '0',
  },
  tweetBody: {
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer',
    padding: '10px 15px',
    borderLeft: '0',
    borderRight: '0',
    borderBottom: '0',
    '&:hover': {
      backgroundColor: 'rgb(245, 249, 250)',
    },
  },
  tweetContent: {
    width: '88%',
  },
  tweetContentHeader: {
    position: 'relative',
  },
  tweetContentHeaderButton: {
    position: 'absolute',
    top: -5,
    right: -8,
  },
  tweetForm: {
    display: 'flex',
    padding: 15,
    borderRadius: 3,
  },
  tweetUserFullname: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  tweetFormTextarea: {
    width: '100%',
    '& textarea': {
      border: '0',
      fontSize: 20,
      color: grey[600],
      width: '95%',
      outline: '0',
      resize: 'none',
      padding: '5px 0px',
    },
  },
  tweetFormEdit: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  tweetFormPublic: {
    paddingTop: '10px',
    borderBottom: '1px solid #eff3f4',
    '& div': {
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: 14,
      fontWeight: 700,
      color: theme.palette.primary.main,
      padding: '0 15px 0 10px',
      borderRadius: 30,
      height: 30,
      marginBottom: 15,
      transition: 'background-color 0.15s ease',
      '&:hover': {
        backgroundColor: 'rgb(29, 161, 242, 0.1)',
      },
      '& span': {
        marginLeft: 10,
      },
    },
  },
  tweetPage: {
    padding: 12,
    borderRight: '0',
    borderLeft: '0',
    borderTop: '0',
  },
  tweetPageHeader: {
    position: 'relative',
    '& button': {
      position: 'absolute',
      top: -10,
      right: -10,
    },
  },
  tweetPageUser: {
    display: 'flex',
    marginBottom: 20,
  },
  tweetPageTweetBody: {},
  tweetPageText: {
    '& p': {
      lineHeight: 1.3,
      fontSize: 23,
    },
  },
  tweetPageMark: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '15px 0px',
    margin: '5px 0px',
    borderTop: '1px solid #eff3f4',
    borderBottom: '1px solid #eff3f4',
    '& .MuiTypography-h6': {
      fontSize: 17,
      fontWeight: 700,
    },
    '& .MuiTypography-body1': {
      color: '#505457',
    },
  },
  tweetPageIconButton: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingBottom: '5px',
    borderBottom: '1px solid #eff3f4',
    '& svg': {
      fontSize: 20,
    },
  },
  tweetPageTextarea: {},
  tweetFormPublicIcon: {
    fontSize: 16,
  },
  tweetFormFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    height: 50,
  },
  tweetFormFooterIcon: {
    fontSize: 22,
    color: theme.palette.primary.main,
    padding: 8,
    '&:hover': {
      backgroundColor: 'rgb(29, 161, 242, 0.1)',
    },
  },
  tweetFormFooterRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& p': {
      width: 1,
      height: 33,
      backgroundColor: '#dedede',
    },
  },
  tweetFormCircleProgress: {
    position: 'relative',
    width: 20,
    height: 20,
    margin: '0 10px',
    '& .MuiCircularProgress-root': {
      position: 'absolute',
      left: 0,
    },
  },
  tweetFormFooterButton: {
    width: 100,
    height: 40,
  },
  tweetsFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    left: -13,
    width: 450,
  },
  tweetFormBottomLine: {
    height: 12,
    width: '100%',
    backgroundColor: '#f7f9f9',
  },
  rightSide: {
    paddingTop: 20,
    position: 'sticky',
    top: 0,
  },
  rightSideBlock: {
    backgroundColor: '#F5F8FA',
    borderRadius: 15,
    marginTop: 20,
    '& .MuiList-root': {
      paddingTop: 0,
    },
  },
  rightSideBlockHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    backgroundColor: 'transparent',
    padding: '13px 18px',
    '& b': {
      fontSize: 20,
      fontWeight: 800,
    },
  },
  rightSideBlockItem: {
    cursor: 'pointer',
    alignItems: 'flex-start',
    '& .MuiTypography-body1': {
      '& span': {
        fontWeight: 200,
      },
    },
    '& .MuiTypography-body2': {
      '& span': {
        fontWeight: 700,
        color: '#505457',
      },
    },
    '& .MuiListItemAvatar-root': {
      minWidth: 50,
    },
    '& .MuiListItemText-root': {
      margin: 0,
    },
    '&:hover': {
      backgroundColor: '#edf3f6',
    },
    '& a': {
      color: 'inherit',
      textDecoration: '0',
    },
  },
  readUserItem: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#edf3f6',
    },
  },
  readUserItemInfo: {
    display: 'flex',
  },
  readUserItemName: {
    '& b': {
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  readUserItemButton: {
    backgroundColor: '#000',
    color: '#fff',
    fontSize: 14,
    height: 32,
    padding: '0px 15px',
    '&:hover': {
      backgroundColor: '#292929',
    },
  },
  imagesList: {
    display: 'flex',
    alignItems: 'center',
  },
  imagesListItem: {
    width: 50,
    height: 50,
    position: 'relative',
    marginRight: 10,
    marginTop: 10,
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 6,
    },
  },
  imagesListItemRemove: {
    position: 'absolute',
    bottom: 44,
    right: -7,
    padding: '0px !important',
    backgroundColor: 'red !important',
    '& svg': {
      fontSize: 16,
      '& path': {
        fill: 'white',
      },
    },
  },
  imagesUploadButton: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userSideProfile: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'fixed',
    bottom: 20,
    width: 'fit-content',
    padding: 8,
    borderRadius: 31,
    backgroundColor: 'white',
    zIndex: 2,
    '&:hover': {
      backgroundColor: '#F5F8FA',
    },
  },
  userSideProfileInfo: {
    display: 'flex',
  },
  userSideDataPopupMenu: {
    bottom: '90px !important',
    top: 'auto !important',
    left: '315px !important',
    width: '210px !important',
  },
  profile: {},
  profileHeader: {
    height: 200,
    backgroundColor: 'rgb(207, 217, 222)',
  },
  profileInfo: {
    position: 'relative',
    top: -78,
    '& .MuiTabs-root': {
      margin: '0px -10px',
      '& .MuiTab-root': {
        minWidth: 148,
      },
    },
    '& .MuiBox-root': {
      padding: 0,
    },
  },
  profileInfoHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: '0px 10px',
  },
  profileAvatar: {
    height: 133,
    width: 133,
    border: '5px solid white',
  },
  profileButton: {
    marginBottom: 10,
  },
  profileInfoMain: {
    padding: '0px 10px',
  },
  uploadAvatarBlock: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: 'fit-content',
  },
}))
