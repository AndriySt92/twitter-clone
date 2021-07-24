import passport from 'passport'
import{ Strategy as LocalStrategy} from 'passport-local'
import{ Strategy as Jwtstrategy, ExtractJwt} from 'passport-jwt'
import { UserModel, UserSchemaInterface } from '../models/UserModel'
// import { generateMD5 } from '../utils/generateHash';

passport.use(new LocalStrategy(
    async (username: any, password: any, done: any): Promise<void> => {
        try {
            
            const user = await UserModel.findOne({ $or: [{email: username}, {username}]}).exec()
            console.log(user,'yser')
            if(!user){
                return done(null, false)
            }
            //TODO - If we use generateMD5(password + process.env.SECRET_KEY), we have always get if(false)
            if(user.password === password){
                done(null, user)
            } else {
                done(null, false)
            }
        } catch (error) {
            done(error, false)
        }
    }
  ));

  passport.use(
      new Jwtstrategy(
          {
              secretOrKey: process.env.SECRET_KEY || '123',
              jwtFromRequest: ExtractJwt.fromHeader('token')
          },
          async (payload: {data: UserSchemaInterface}, done): Promise<void> => {
              try {
                  const user = await UserModel.findById(payload.data._id).exec()

                  if(user){
                    return done(null, user)
                  }
                  done(null, false)
              } catch (error) {
                    done(error, false)
              }
          }
      )
  )

  passport.serializeUser((user: any, done): void => {
      done(null, user?._id)
  })

  passport.deserializeUser((id: string, done): void => {
      UserModel.findById(id, (err: any, user: any) => {
        done(err, user)
      })
      
  })

  export { passport }