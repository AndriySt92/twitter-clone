import dotenv  = require('dotenv')
dotenv.config()

import './core/db'
const express =  require('express')
import { UserCtrl } from './controllers/UserConroller';
import { registerValidator } from './validations/register';
import { passport } from './core/passport'


dotenv.config()

const app = express();
app.use(express.json())
app.use(passport.initialize())

app.get('/user', UserCtrl.index)
app.post('/auth/register', registerValidator, UserCtrl.create)
app.get('/user/:id', registerValidator, UserCtrl.show)
app.get('/auth/verify', registerValidator, UserCtrl.verify)
app.post('/auth/login', passport.authenticate('local'), function (req: any, res: any) {
    res.json(req.user)
})
// app.patch('/users', UserCtrl.update)
// app.delete('/users', UserCtrl.delete)

app.listen(process.env.PORT, (): void => {
    console.log("server runed!")
})