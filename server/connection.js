const {  mongoose } = require('mongoose');

const connectDB= async()=>
{
    try {

        const connection= await mongoose.connect(process.env.MONGO_URI);
        if(connection.STATES.connected)
        {
            console.log("Database connected");
        }
        else
        {
            
        console.log("Database connection failed");
        }

    } catch (error) {
        console.log(error.message);
    }
}

module.exports=connectDB