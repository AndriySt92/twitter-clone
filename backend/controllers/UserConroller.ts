import express = require('express')
import { validationResult } from 'express-validator'
import { UserModel, UserSchemaInterface } from '../models/UserModel'
import { generateMD5 } from '../utils/generateHash'
import { sendEmail } from '../utils/sendEmail'
// import SendmailTransport =  require("nodemailer/lib/sendmail-transport")

class UserController {
    async index(_: any, res: express.Response): Promise<void> {
        try{
            const users = await UserModel.find({}).exec()

            res.json({
                status: 'success',
                data: users
            })

            
        } catch(error){
            res.json({
                status: 'error',
                message: JSON.stringify(error)
            })
        }
    }

    async create(req: express.Request, res: express.Response): Promise<void> {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                res.status(400).json({status: 'errors', errors: errors.array()})
                return
            }

            const data: UserSchemaInterface = {
                email: req.body.email,
                username: req.body.username,
                fullname: req.body.fullname,
                password: req.body.password,
                confirmHash: generateMD5(process.env.SECRET_KEY || Math.random().toString()) 
            }

            const user = await UserModel.create(data)

            sendEmail({
                emailFrom: 'admin@twitter-clone.com',
                emailTo: data.email,
                subject: "Потверждение почты Twitter Clone",
                html: `Для того чтобы потвердить почту перейдите <a href="http://localhost:${process.env.PORT || 8888}/user/verify?hash=${data.confirmHash}">по этой ссылке</a>`,
            }, (err: Error | null) =>{
                if(err == null) {
                    res.json({
                        status: 'success',
                        data: user
                    })
                } else {
                    res.status(500).json({
                        status: 'error',
                        message: err
                    })
                }
            })
      
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: JSON.stringify(error)
            })
        }
    }
    async verify(req: express.Request, res: express.Response): Promise<void> {
        try{
            const hash = req.query.hash
            if(!hash){
                res.status(400).send()
                return 
            }
            //@ts-ignore
            let user = await UserModel.findOne({confirmHash: hash}).exec()
            if(user){
                user.confirmed = true
                user.save()
    
                res.json({
                    status: 'success',
                    data: user
                })
            } else {
                res.status(404).json({status: 'error', message: 'Пользыватель не найден'})
            }
           
            
        } catch(error){
            res.status(500).json({
                status: 'error',
                message: JSON.stringify(error)
            })
        }
    }

}

export const UserCtrl = new UserController();
