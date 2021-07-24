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
    width: '350%',
    height: '350%',
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
    fontSize: 45,
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
    display: 'block',
    width: 32,
    height: 32,
    margin: '10px auto',
  },
  dialogTitleBirthday: {
    fontWeight: 600,
    margin: '20px 0',
  },
}))
