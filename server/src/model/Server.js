
import express from "express";
import cors from "cors"

import { routes } from "../routes/index.js";
import morgan from "morgan";
import { config } from "../config/index.js";

export class Server {

  constructor(){
    // variables
    this.app = express();
    this.port = process.env.PORT;
    this.Path = {
                usersAuthentification: '/api/user'
              }
    
    // middlewares
    this.middlewares()
    // routes
    this.routes()
    // bases Data
    this.dbConnectionMongo()
  }

  middlewares(){
    this.app.use( express.json() )
    this.app.use( morgan('tiny', { "stream": config.logger.stream }) )
    this.app.use( cors() )
  }


  routes(){
    this.app.use(this.Path.usersAuthentification, routes.userAuthetification )
  }

  dbConnectionMongo(){
    config.dbConnection()
  }

  listen(){
    this.app.listen( this.port, () => {
      console.log(`Server connected (ง🔥ﾛ🔥)ง to PORT ${this.port}`)
    })
  }
}


