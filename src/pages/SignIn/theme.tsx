import { makeStyles } from '@material-ui/core/styles'

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: 'calc(100vh - 84px)',
  },
  blueSide: {
    display: 'flex',
    backgroundColor: '#1DA1F2',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
    position: 'relative',
    overflow: 'hidden',
  },
  blueSideBigIcon: {
    position: 'absolute',
    top: '53%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '350% !important',
    height: '350% !important',
  },
  blueSideListInfo: {
    position: 'relative',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    '& h6': {
      display: 'flex',
      alignItem: 'center',
      color: '#fff',
      fontWeight: 700,
      fontSize: 20,
    },
  },
  blueSideListInfoIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  blueSideListInfoItem: {
    marginBottom: 40,
  },
  loginSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
    overflow: 'hidden',
  },
  loginSideTwitterIcon: {
    fontSize: '45px !important',
  },
  loginSideWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: 380,
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 60,
    marginTop: 20,
  },
  dialogIcon: {
    display: 'block !important',
    width: '32px !important',
    height: '32px !important',
    margin: '10px auto',
  },
  dialogTitleBirthday: {
    fontWeight: 600,
    margin: '20px 0',
    fontSize: 15,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0px !important',
    padding: '0px 20px',
    '& a ~ a': {
      paddingLeft: 10,
      fontSize: 14,
    },
  },
  copywriting: {
    display: 'flex',
    justifyContent: 'center',
    '& p': {
      fontSize: 14,
    },
  },
}))
