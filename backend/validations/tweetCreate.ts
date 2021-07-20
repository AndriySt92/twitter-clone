import validator =  require('express-validator')

export const tweetCreateValidator = [
    validator
    .body('text', 'Введите email')
    .isLength({
        max:280
    })
    .withMessage("Неверное кол-во символов. Допустимое максимальное кол-во символов 280."),
]

 