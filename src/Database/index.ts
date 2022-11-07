import { DataSource } from "typeorm";
import 'reflect-metadata'

const port = 3306 as number | undefined
export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: port,
    username: 'root',
    password: '',
    timezone: 'Z',
    database: 'dtbase',
    entities: [`./src/Database/Entities/**{.js,.ts}`],
    migrations: ['./src/Database/Migrations/**{.js,.ts}']
})