const asyncHandler =require('express-async-handler')
const bcrypt = require('bcryptjs')

const User =  require('../models/userModel')

// @desc    Register a new user
// @route   /api/users
//@access   Public
const registerUser = asyncHandler(async (req, res) => {
   const {name, email, password} = req.body

   //Vallidation
    if (!name || !email || !password) {
        res.status(400)
       throw new Error('Please include all fields')
    }

    //Find if user already exists
    const userExists = await User.findOne({email: email})

    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Creat user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user._id, //Id has "_" becasues thisis how databaes stores it's id's
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }

    res.send('Register Route')
})

// @desc    Login a user
// @route   /api/users
//@access   Public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.blody

    const user =await User.findOne({email})
    //Check user and passwords match
    if(user && (await bcrypt.compare(password, user.password))){
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email
            })
            }else{
                res.status(401)
                throw new Error('Invalid credentials')
            }

  
})


module.exports = { 
    registerUser,
    loginUser,
}
