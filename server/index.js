import { Server } from "./src/model/index.js";
import dotenv from "dotenv"

dotenv.config()

const server = new Server();
server.listen()