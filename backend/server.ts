import dotenv from 'dotenv'
dotenv.config()

import './core/db'
import express from 'express'
import { UserCtrl } from './controllers/UserConroller';
import { TweetCtrl } from './controllers/TweetController';
import { registerValidator } from './validations/register';
import { passport } from './core/passport'
import { tweetCreateValidator } from './validations/tweetCreate';


dotenv.config()

const app = express();
app.use(express.json())
app.use(passport.initialize())

app.get('/users', UserCtrl.index)
app.get('/user/me', passport.authenticate('jwt', {session: false}), UserCtrl.getUserInfo)
app.get('/user/:id', registerValidator, UserCtrl.show)

app.post('/auth/register', registerValidator, UserCtrl.create)
app.get('/auth/verify', registerValidator, UserCtrl.verify)
app.post('/auth/login', passport.authenticate('local'), UserCtrl.afterLogin)

app.get('/tweets', TweetCtrl.index)
app.post('/tweet', passport.authenticate('jwt'), tweetCreateValidator, TweetCtrl.create)
app.get('/tweet/:id', TweetCtrl.show)
app.delete('/tweet/:id', passport.authenticate('jwt'), TweetCtrl.delete)
// app.patch('/users', UserCtrl.update)
// app.delete('/users', UserCtrl.delete)

app.listen(process.env.PORT, (): void => {
    console.log("server runed!")
})