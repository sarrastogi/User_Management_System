import mongoose from "mongoose";
import { connect } from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

let ConnectDb = async ()=>{
    try{
        let Conn = await mongoose.connect(`${process.env.MongoUrl}/${process.env.Db_name}`)
        console.log('Database connection succesfully');
        
    }
    catch(err){
        console.log(err);
        
    }
}
export { ConnectDb };