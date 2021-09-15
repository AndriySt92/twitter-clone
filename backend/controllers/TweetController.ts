import express from 'express'
import { isValidObjectId } from 'mongoose'
import { validationResult } from 'express-validator'
import { TweetModel, TweetModelInterface } from '../models/TweetModel'
import { UserSchemaInterface } from '../models/UserModel'


class TweetController {
    async index(_: any, res: express.Response): Promise<void> {
        try{
            const tweets = await TweetModel.find({}).populate('user').sort({createdAt: -1}).exec()

            res.json({
                status: 'success',
                data: tweets
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
            const tweetId = req.params.id

           if(!isValidObjectId(tweetId)){
               res.status(400).send()
               return
           }

            const tweet = await TweetModel.findById(tweetId).populate('user').exec()
           
            if(!tweet){
                res.status(404).send()
                return 
            }
   
            res.json({
                status: 'success',
                data: tweet
            })

            
        } catch(error){
            res.status(500).json({
                status: 'error',
                message: error
            })
        }
    }

    async getUserTweets(req: express.Request, res: express.Response): Promise<void> {
        try{
            const userId = req.params.id

           if(!isValidObjectId(userId)){
               res.status(400).send()
               return
           }

            const tweet = await TweetModel.find({ user: userId }).populate('user').exec()
           
            if(!tweet){
                res.status(404).send()
                return 
            }
   
            res.json({
                status: 'success',
                data: tweet
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
            const user = req.user as UserSchemaInterface;

            if(user?._id) {
                const errors = validationResult(req)
       
                if(!errors.isEmpty()){
                    res.status(400).json({status: 'error', errors: errors.array()})
                    return
                }

                const data: TweetModelInterface = {
                    text: req.body.text,
                    images: req.body.images,
                    user: user._id,
                    likeCount: 0,
                    userLikedId: []
                }
               
                const tweet = await TweetModel.create(data)

                // user.tweets = [...user.tweets, tweet]
                res.json({
                    status: 'success',
                    data: await tweet.populate('user').execPopulate()
                })
            }
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            })
        }
    }
    async delete(req: express.Request, res: express.Response): Promise<void>{

        const user = req.user as UserSchemaInterface

        try {
            if(user){
                const tweetId = req.params.id

                if(!isValidObjectId(tweetId)){
                    res.status(400).send()
                    return
                }
                const tweet = await TweetModel.findById(tweetId)

                if(tweet){
                    //@ts-ignore
                    if(String(tweet.user._id) === String(user._id)){
                        tweet.remove()
                        res.send()
                    } else {
                        res.status(403).send()
                    }
                    
                } else {
                    res.status(400).send()
                }
              

                res.send()
            }
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            })
        }
    }

    async update(req: express.Request, res: express.Response): Promise<void>{

        const user = req.user as UserSchemaInterface

        try {
            if(user){
                const tweetId = req.params.id
                console.log(req.body)
                if(!isValidObjectId(tweetId)){
                    res.status(400).send()
                    return
                }
                const tweet = await TweetModel.findById(tweetId)
    
                if(tweet){
                    //@ts-ignore
                    if(String(tweet.user._id) === String(user._id)){
                        const text = req.body.text
                        tweet.text = text
                        tweet.save()
                        res.send()
                    } else {
                        res.status(403).send()
                    }
                    
                } else {
                    res.status(400).send()
                }
              

                res.send()
            }
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            })
        }
    }
    async likeTweet(req: express.Request, res: express.Response): Promise<void>{

        const {tweetId, userId} = req.query
        console.log(tweetId, 'tweet')
        console.log(userId)
        try {
            
                const tweet = await TweetModel.findById(tweetId)
    
                if(tweet){
//@ts-ignore
                    if(!tweet.userLikedId.includes(userId)){
                        //@ts-ignore
                        tweet.userLikedId = [...tweet.userLikedId, userId]
                        tweet.likeCount++
                    } else {
                        tweet.userLikedId = tweet.userLikedId.filter(id => id !== userId)
                        tweet.likeCount--
                    }
                    tweet.save()
                    res.send()
                    
                } else {
                    res.status(400).send()
                }
              res.send()
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            })
        }
    }

}

export const TweetCtrl = new TweetController();
