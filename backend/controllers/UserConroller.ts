import express from 'express'
import { validationResult } from 'express-validator'
import { isValidObjectId } from 'mongoose'
import { UserModel, UserSchemaDocumentInterface, UserSchemaInterface } from '../models/UserModel'
import { generateMD5 } from '../utils/generateHash'
import { sendEmail } from '../utils/sendEmail'
import jwt from 'jsonwebtoken'
// import SendmailTransport from "nodemailer/lib/sendmail-transport"

class UserController {
    async index(_: any, res: express.Response): Promise<void> {
        try{
            const users = await (await UserModel.find({}).sort({createdAt: -1}).limit(5).exec())

            res.json({
                status: 'success',
                data: users
            })

            
        } catch(error){
            res.status(500).json({
                status: 'error',
                message: error
            })
        }
    }

    async show(req: express.Request, res: express.Response): Promise<void> {
        try{
            const userId = req.params.id

           if(!isValidObjectId(userId)){
               res.status(400).send()
               return
           }

            const user = await UserModel.findById(userId).populate('tweets').exec()
           
            if(!user){
                res.status(404).send()
                return 
            }
   
            res.json({
                status: 'success',
                data: user
            })

            
        } catch(error){
            res.status(500).json({
                status: 'error',
                message: error
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

            const randomStr = Math.random().toString()

            const data: UserSchemaInterface = {
                email: req.body.email,
                username: req.body.username,
                fullname: req.body.fullname,
                password: req.body.password,
                //TODO - Passport doesn't work with this password: generateMD5(req.body.password + process.env.SECRET_KEY)
                confirmHash: generateMD5(process.env.SECRET_KEY + randomStr || randomStr) 
            }

            UserModel.create(data)

            sendEmail({
                emailFrom: 'admin@twitter-clone.com',
                emailTo: data.email,
                subject: "???????????????????????? ?????????? Twitter Clone",
                html: `?????? ???????? ?????????? ???????????????????? ?????????? ?????????????????? <a href="http://localhost:${process.env.PORT || 8888}/auth/verify?hash=${data.confirmHash}">???? ???????? ????????????</a>`,
            }, (err: Error | null) =>{
                if(err == null) {
                    res.json({
                        status: 'success',
                        message: '???????????? ?????????????? ??????????????????.???????????????? ???????? ?????????? ?????????? ?????????????????????? ??????????????????????',
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
                message: error
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
                })
                  
            } else {
                res.status(404).json({status: 'error', message: '???????????????????????? ???? ????????????'})
            }
         
        } catch(error){
            res.status(500).json({
                status: 'error',
                message: error
            })
        }
    }

    async afterLogin(req: express.Request, res: express.Response): Promise<void> {

        try {
            const user = req.user ? (req.user as UserSchemaDocumentInterface).toJSON() : undefined

            res.json({
                status: "success",
                data: {...user, token: jwt.sign({data: req.user}, process.env.SECRET_KEY || '123', {expiresIn: '30 days'})}
            })
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            })
        }
    }


    async getUserInfo(req: express.Request, res: express.Response): Promise<void> {

        try {
            const user = req.user ? (req.user as UserSchemaDocumentInterface).toJSON() : undefined

            res.json({
                status: "success",
                data: user
            })
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            })
        }
    }

    async update(req: express.Request, res: express.Response): Promise<void>{

        const userId = req.params.id
        const user = await UserModel.findById(userId).exec()
        try {
            if(user){
                if(req.body.fullname) user.fullname = req.body.fullname
                if(req.body.about) user.about = req.body.about
                if(req.body.location) user.location = req.body.location
                if(req.body.birthday) user.birthday = req.body.birthday
                if(req.body.website) user.website = req.body.website 
                if(req.body.avatar) user.avatar = req.body.avatar
                console.log(req.body)
                user.save()
                res.json({
                    status: 'success',
                    data: user
                })
            
            } else {
                res.status(403).send()
            }
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            })
        }
    }

}

export const UserCtrl = new UserController();
