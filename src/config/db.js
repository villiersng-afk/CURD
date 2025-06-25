import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connect!!");
    }catch(error){
        console.log("MongoDB connection fail :",
            error.message);
            process.exit(1);
        
    }
    
}

