import { ConnectionOptions } from "typeorm";
import { User } from "../entities/User";
import { Post } from "../entities/Post";
import { Comment } from "../entities/Comment";
export { User, Post, Comment };
import dotenv from "dotenv";
dotenv.config()

const config: ConnectionOptions = {
    type: "postgres",
    host: process.env.POSTGRES_HOST || "localhost",
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || "postgres",
    password: process.env.POSTGRES_PASSWORD || "postgres",
    database: process.env.POSTGRES_DB || "postgres",
    entities: [User, Post, Comment],
    synchronize: true,
    // dropSchema: true
};

export default config;