import React from 'react'
import { makeStyles, Typography, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import GroupIcon from '@material-ui/icons/Group';
import MessageIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: 'calc(100vh - 84px)'
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
        }

    },
    blueSideListInfoIcon: {
        fontSize: 32,
        marginRight: 15
    },
    blueSideListInfoItem: {
        marginBottom: 40,

    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
        overflow: 'hidden'
    },
    loginSideTwitterIcon: {
        fontSize: 45
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
        marginTop: 20
    },
    dialog: {
        // width: 600,
        // height: 400,
    },
    dialogIcon: {
        width: 32,
        height: 32,
        margin: '10px auto',
    },
    dialogTitleBirthday: {
        fontWeight: 600,
        margin: '20px 0',

    }
}))

export function SignIn() {

    const [open, setOpen] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true);
      };

    const handleClose = () => {
      setOpen(false);
    };
    const classes = useStyles()



    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon color='secondary' className={classes.blueSideBigIcon}/>
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}><Typography variant='h6'><SearchIcon className={classes.blueSideListInfoIcon} />Читайте о том, что вам интересно</Typography></li>
                    <li className={classes.blueSideListInfoItem}><Typography variant='h6'><GroupIcon className={classes.blueSideListInfoIcon} />Узнайте о том, что говорят в мире</Typography></li>
                    <li className={classes.blueSideListInfoItem}><Typography variant='h6'><MessageIcon className={classes.blueSideListInfoIcon} />Присоединяйтесь к общению</Typography></li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color='primary' className={classes.loginSideTwitterIcon} />
                    <Typography variant='h4' className={classes.loginSideTitle}>В курсе происходящего</Typography>
                    <Typography><b>Присоединяйтесь к Твиттеру прямо сейчас!</b></Typography>
                    <br />
                    <Button onClick={handleClickOpen} style ={{marginBottom: 20}} variant='contained' color="primary">Зарегистрироваться</Button>
                    <Button variant='outlined' color="primary">Войти</Button>
                    <Dialog open={open} className={classes.dialog} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <TwitterIcon color='primary' className={classes.dialogIcon} />
                        <DialogTitle id="form-dialog-title">Создайте учетную запись</DialogTitle>
                        <DialogContent>
                        <FormControl>
                            <TextField
                                autoFocus
                                variant="outlined"
                                margin="dense"
                                id="name"
                                label="Имя"
                                fullWidth
                                style={{marginBottom: 10}}
                            />
                            <TextField
                                autoFocus
                                variant="outlined"
                                margin="dense"
                                id="number"
                                label="Телефон"
                                fullWidth
                                style={{height: 60}}
                            />
                            <Typography style={{fontSize:14}} color='primary'>Использовать эл. почту</Typography>
                            <Typography variant='h6' className={classes.dialogTitleBirthday}>Дата рождения</Typography>
                            <Typography style={{fontSize: 14, color: 'rgba(0, 0, 0, 0.54)'}} >Эта информация не будет общедоступной. Подтвердите свой возраст, даже если эта учетная запись предназначена для компании, домашнего животного и т. д.</Typography>
                            <TextField
                                autoFocus
                                variant="outlined"
                                margin="dense"
                                id="mounth"
                                label="Мясяц"
                                fullWidth
                                style={{marginBottom: 10}}
                            />
                             <TextField
                                autoFocus
                                variant="outlined"
                                margin="dense"
                                id="day"
                                label="День"
                                fullWidth
                                style={{marginBottom: 10}}
                            />
                             <TextField
                                autoFocus
                                variant="outlined"
                                margin="dense"
                                id="year"
                                label="Год"
                                fullWidth
                                style={{marginBottom: 10}}
                            />
                            </FormControl>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary" variant='contained'  fullWidth>
                                Зарегистрироваться
                            </Button>
                        </DialogActions>
                    </Dialog>
                
                </div>
            </section>
        </div>
    )
}

export default SignIn
