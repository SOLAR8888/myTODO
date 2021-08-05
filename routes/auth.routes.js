require('dotenv').config();
const {Router} = require('express');
const router = Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');

// /api/auth/register
router.post('/register',
    [
      check('email', 'Некорректный email').isEmail(),
      check('password', 'Минимальная длинна пароля 6 символов').isLength({min:6})
    ],
    async(req, res)=>{
    try{
      const errors = validationResult(req);
      if(!errors.isEmpty()){
          return res.status(400).json({
              errors:errors.array(),
              message:'Некорректные данные регистрации'
          })
      }
      const {email, password} = req.body;

      const candidate = await User.findOne({email});

      if(candidate){
          return res.status(400).json({message:'Такой пользователь уже существует'});
      }

      const hashedPassword = await bcrypt.hash(password,8);
      const user = new User({email,password:hashedPassword});
      await user.save();

      res.status(201).json({message:'Пользователь создан'})

    }
    catch (e){
        res.status(500).json({message:'Что-то пошло не так'})
    }

})

// /api/auth/login
router.post('/login',
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальная длинна пароля 6 символов').isLength({min:6})
    ],
    async(req, res)=>{
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors:errors.array(),
                    message:'Некорректные данные логина'
                })
            }

            const {email, password} = req.body;
            const user = await User.findOne({email});
            if(!user){
                return res.status(400).json({message:'Пользователь не найден'})
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch){
                return res.status(400).json({message:'Пароль не правильный'})
            }

            const token = jwt.sign(
                {
                    userId:user.id
                },
                process.env.SECRET,
                {expiresIn: '365d'}
                )

            res.json({token, userId:user.id})
        }
        catch (e){
            res.status(500).json({message:'Что-то пошло не так'})
        }

    })

module.exports = router
