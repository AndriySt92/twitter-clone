import dotenv  = require('dotenv')
import './core/db'
import express =  require('express')
import { UserCtrl } from './controllers/UserConroller';
import { registerValidator } from './validations/register';

dotenv.config()

const app = express();

app.use(express.json())

app.get('/user', UserCtrl.index)
app.post('/user', registerValidator, UserCtrl.create)
// app.patch('/users', UserCtrl.update)
// app.delete('/users', UserCtrl.delete)

app.listen(process.env.PORT, (): void => {
    console.log("server runed!")
})