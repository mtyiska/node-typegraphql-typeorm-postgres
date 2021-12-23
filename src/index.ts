import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import {createConnection} from "typeorm";

import Router from "./routes";
import config from "./config/database";
dotenv.config()


// App
const app: Application = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"))

// Routes
app.use("/api", Router);
   
// Connection
createConnection(config).
    then((_con) =>{
        app.listen(PORT, () =>{
            console.log(`App listening on port ${PORT}`)
        })
    }).catch((err) =>{
        console.warn("Unable to connect to db", err);
        process.exit(1);
})



