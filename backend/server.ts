import dotenv from 'dotenv'
dotenv.config()

import './core/db'
import express from 'express'
const cors = require('cors');
import { UserCtrl } from './controllers/UserConroller';
import { TweetCtrl } from './controllers/TweetController';
import { registerValidator } from './validations/register';
import { passport } from './core/passport'
import { tweetCreateValidator } from './validations/tweetCreate';


dotenv.config()

const app = express();
app.use(express.json())
app.use(passport.initialize())

const allowedOrigins = [
    'capacitor://localhost',
    'ionic://localhost',
    'http://localhost',
    'http://localhost:8888',
    'http://localhost:3000'
  ];
  
  // Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
  const corsOptions = {
    origin: (origin: any, callback: any) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Origin not allowed by CORS'));
      }
    }
  }
  
  // Enable preflight requests for all routes
  app.options('*', cors(corsOptions));
  
app.get('/users', UserCtrl.index)
app.get('/user/me',cors(corsOptions) , passport.authenticate('jwt', {session: false}), UserCtrl.getUserInfo)
app.get('/user/:id', registerValidator, UserCtrl.show)

app.post('/auth/register',cors(corsOptions) , registerValidator, UserCtrl.create)
app.get('/auth/verify', registerValidator, UserCtrl.verify)
app.post('/auth/login',cors(corsOptions) , passport.authenticate('local'), UserCtrl.afterLogin)

app.get('/tweets', TweetCtrl.index)
app.post('/tweet', passport.authenticate('jwt'), tweetCreateValidator, TweetCtrl.create)
app.get('/tweet/:id', TweetCtrl.show)
app.delete('/tweet/:id', passport.authenticate('jwt'), TweetCtrl.delete)
app.patch('/tweet/:id', passport.authenticate('jwt'),tweetCreateValidator, TweetCtrl.update)
// app.patch('/users', UserCtrl.update)
// app.delete('/users', UserCtrl.delete)

app.listen(process.env.PORT, (): void => {
    console.log("server runed!")
})