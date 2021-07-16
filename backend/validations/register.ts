import validator =  require('express-validator')

export const registerValidator = [
    validator
    .body('email', 'Введите email ')
    .isEmail()
    .withMessage("Неверный email")
    .isLength({
        min:10,
        max:40
    })
    .withMessage("Неверное кол-во символов email.Допустимое кол-во символов от 10 до 40."),
    validator
    .body('fullname', 'Введите имя')
    .isString()
    .isLength({
        min:2,
        max:40
    })
    .withMessage("Неверное кол-во символов в имени пользывателя.Допустимое кол-во символов от 2 до 40."),
    validator
    .body('username', 'Введите логин')
    .isString()
    .isLength({
        min:2,
        max:40
    })
    .withMessage("Неверное кол-во символов в логине пользывателя.Допустимое кол-во символов от 2 до 40."),
    validator
    .body('password', 'Введите пароль')
    .isString()
    .isLength({
        min:6,
    })
    .withMessage("Минимальное кол-во символов от 6")
    .custom((value: any, {req}: any) => {
        if(value !== req.body.password2) {
            throw new Error('Пароли не совпадают')

        } else {
            return value
        }
    })
]

 