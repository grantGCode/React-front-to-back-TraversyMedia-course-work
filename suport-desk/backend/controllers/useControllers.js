
const registerUser = (req, res) => {
    res.semd('Register Route')
}

const loginUser = (req, res) => {
    res.send('Login Route')
}


module.exports = { 
    registerUser,
    loginUser,
}
