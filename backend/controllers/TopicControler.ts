import express from 'express'
import { TopicModel, TopicModelInterface } from '../models/TopicModel'

class TopicController {
    async index(_: any, res: express.Response): Promise<void> {
        try{
            const topic = await TopicModel.find({}).exec()
           
            res.json({
                status: 'success',
                data: await topic
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
                const data: TopicModelInterface = {
                    topic: req.body.topic,
                    tag: req.body.tag,
                    tweetCount: "0",
                }
               
                const topic = await TopicModel.create(data)

                res.json({
                    status: 'success',
                    data: topic
                })
            
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error
            })
        }
    }
}

export const TopicCtrl = new TopicController()