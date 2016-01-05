/**
 * Created by s141689 on 4-1-2016.
 */
import express from 'express';
const app = express();
const router = express.Router();
const port = process.env.PORT || 8888;

app
    .use(bodyparser.urlencoded({extended:true}))
    .use(bodyparser.json())
    .use("/v1/api", router)
    .listen(port);
