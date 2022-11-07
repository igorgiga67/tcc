import  Express from "express";
import { AppDataSource } from './Database';
import {routes} from "./Routes/routes";

AppDataSource.initialize().then(() => {
    const app = Express()
    //app.use(cors(corsOptions))
    app.use(Express.json())
    app.use(routes)
    return app.listen(3002, () => console.log('Server start in port 3002'))
})