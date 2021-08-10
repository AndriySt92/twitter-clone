import express from 'express'
import { cloudinary } from '../core/cloudinary'

// import { TweetModel, TweetModelInterface } from '../models/TweetModel'
// import { UserSchemaInterface } from '../models/UserModel'


class UploadFileController {
    async upload(req: express.Request, res: express.Response): Promise<void> {
      //@ts-ignore
      const file = req.file
      
      cloudinary.v2.uploader.upload_stream({resource_type: 'auto'}, function (error: any, result: any) {
          console.log(error, result)

          if(error || !result) {
              res.sendStatus(500).json({
                  status: 'error',
                  message: error || 'upload error'
              })
          } else{
            res.json({
                url: result.url,
                size: Math.round(result.bytes / 1024),
                height: result.height,
                width: result.width
            })
          }
          
      }).end(file.buffer)
    }
}

export const UploadFileCtrl = new UploadFileController()