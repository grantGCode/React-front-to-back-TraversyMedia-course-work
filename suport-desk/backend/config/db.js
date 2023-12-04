const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.undderline);
            
        // more connection checks 
        console.log(`Host: ${conn.connection.host}`);
        console.log(`Port: ${conn.connection.port}`);
        console.log(`Database: ${conn.connection.name}`); //Look into what Test data base is?
    } catch (error) {
        console.log(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}



module.exports = connectDB