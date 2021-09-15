import dotenv from 'dotenv'
dotenv.config()

import './core/db'
import express from 'express'
const cors = require('cors');
var multer  = require('multer')
import { UserCtrl } from './controllers/UserConroller';
import { TweetCtrl } from './controllers/TweetController';
import { registerValidator } from './validations/register';
import { passport } from './core/passport'
import { tweetCreateValidator } from './validations/tweetCreate';
import { UploadFileCtrl } from './controllers/UploadFileController';
import { TopicCtrl } from './controllers/TopicControler';


dotenv.config()

const app = express();

const storage = multer.memoryStorage()
const upload = multer({ storage })

app.use(express.json())
app.use(passport.initialize())

const allowedOrigins = [
    'capacitor://localhost',
    'ionic://localhost',
    'http://localhost',
    'http://localhost:8888',
    'http://localhost:3000'
  ];
  
  const corsOptions = {
    origin: (origin: any, callback: any) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Origin not allowed by CORS'));
      }
    }
  }
  
  app.options('*', cors(corsOptions));
  
app.get('/users', UserCtrl.index)
app.get('/user/me',cors(corsOptions) , passport.authenticate('jwt', {session: false}), UserCtrl.getUserInfo)
app.get('/user/:id',cors(corsOptions), registerValidator, UserCtrl.show)
app.patch('/user/:id',cors(corsOptions), passport.authenticate('jwt'), UserCtrl.update)

app.post('/auth/register',cors(corsOptions) , registerValidator, UserCtrl.create)
app.get('/auth/verify', registerValidator, UserCtrl.verify)
app.post('/auth/login',cors(corsOptions) , passport.authenticate('local'), UserCtrl.afterLogin)

app.get('/tweets', TweetCtrl.index)
app.post('/tweet', passport.authenticate('jwt'), tweetCreateValidator, TweetCtrl.create)
app.get('/tweet/:id', TweetCtrl.show)
app.get('/tweets/user/:id', TweetCtrl.getUserTweets)
app.delete('/tweet/:id', passport.authenticate('jwt'), TweetCtrl.delete)
app.patch('/tweet/:id', passport.authenticate('jwt'),tweetCreateValidator, TweetCtrl.update)
app.get('/like', passport.authenticate('jwt'), TweetCtrl.likeTweet)

app.post('/upload', upload.single('img'), UploadFileCtrl.upload)

app.get('/topic', TopicCtrl.index )
app.post('/topic', TopicCtrl.create )

app.listen(process.env.PORT, (): void => {
    console.log("server runed!")
})