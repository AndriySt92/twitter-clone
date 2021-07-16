import express = require('express')
import { validationResult } from 'express-validator'
import { UserModel } from '../models/UserModel'
import { generateMD5 } from '../utils/generateHash'
import { sendEmail } from '../utils/sendEmail'

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
                message: JSON.stringify(error+ '123')
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

            const data = {
                email: req.body.email,
                username: req.body.username,
                fullname: req.body.fullname,
                password: req.body.password,
                confirm_hash: generateMD5(process.env.SECRET_KEY || Math.random().toString()) 
            }

            const user = await UserModel.create(data)

            res.json({
                status: 'success',
                data: user
            })

            sendEmail({
                emailFrom: 'admin@twitter-clone.com',
                emailTo: data.email,
                subject: "Потверждение почты Twitter Clone",
                html: `Для того чтобы потвердить почту перейдите <a href="http://localhost:${process.env.PORT || 8888}/signup/verify?hash=${data.confirm_hash}">по этой ссылке</a>`,
            }, (err: Error | null) =>{
                if(err) {
                    res.json({
                        status: 'error',
                        message: JSON.stringify(err)
                    })
                }
            })
            //@ts-ignore
            // mailer.sendMail(
            //     {
            //         from: 'admin@twitter-clone.com',
            //         to: data.email,
            //         subject: "Потверждение почты Twitter Clone",
            //         html: `Для того чтобы потвердить почту перейдите <a href="http://localhost:${process.env.PORT || 8888}/signup/verify?hash=${data.confirm_hash}">по этой ссылке</a>`,
            //     },
            //     function (err: Error | null, info: SendMessageInfo) {
            //         if(err) {
            //             res.json({
            //                 status: 'error',
            //                 message: JSON.stringify(err)
            //             })
            //         } 
            //     }
            // )
        } catch (error) {
            res.json({
                status: 'error',
                message: JSON.stringify(error)
            })
        }
    }
}

export const UserCtrl = new UserController();
