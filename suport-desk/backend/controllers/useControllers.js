// @desc    Register a new user
// @route   /api/users
//@access   Public
const registerUser = (req, res) => {
   const {name, email, password} =req.body

   //Vallidation
    if (!name || !email || !password) {
        res.status(400).json({message: 'Please inculde all fields.'})
    }
    res.send('Register Route')
}

// @desc    Login a user
// @route   /api/users
//@access   Public
const loginUser = (req, res) => {
    res.send('Login Route')
}


module.exports = { 
    registerUser,
    loginUser,
}
