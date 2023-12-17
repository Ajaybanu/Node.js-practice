import mongoose from "mongoose";

const connectDB = async ()=>{


    try {

        const conn = await mongoose.connect(process.env.MONGODB_URL);


        console.log(`Connnect to Mongodb Database`)
        

    } catch (error)  {

        console.log(`Error in Mongodb ${error}`)
        
    }

}


export default connectDB;