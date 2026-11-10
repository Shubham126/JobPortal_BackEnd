import mongoose from "mongoose"


export const connectDB = async () => {
    try{
        const uri = process.env.MONGO_URI;
        if(!uri){
            console.error(`Mongo uri not found`);
            process.exit(1);
        }
        const conn = await mongoose.connect(uri);
        console.log(`Mongo db connected successfully ${conn.connection.host}`)
    }catch(err){

        console.error(`Mongo db connection unsuccessful ${err.message}`);
        process.exit(1);

    }
};