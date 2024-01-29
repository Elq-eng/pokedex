
import mongoose from "mongoose";
import {
  DB_HOST,DB_PASSWORD,DB_SECRET_KEY,DB_USER
} from './config.js';

export const dbConnection = async() => {
  
  try {
    
    await mongoose.connect(DB_HOST);
    console.log('DB online (ᐛ)و')
    } catch (error) {
    console.log(error)
    throw new Error('Error a la hora de inicializar BD')
  }
}
