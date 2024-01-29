// export const PORT = 4001
import dotenv from "dotenv"

dotenv.config()


export const DB_HOST = process.env.DB_CNN
export const DB_USER = process.env.user 
export const DB_PASSWORD = process.env.password
export const DB_SECRET_KEY = process.env.SECRET_KEY