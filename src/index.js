/**
 * Created by s141689 on 4-1-2016.
 */
// Imports

import bodyparser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import Keyword from './model/keywords';

// Initialization
const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;

app
    .use(bodyparser.urlencoded({extended:true}))
    .use(bodyparser.json())
    .use(express.static(__dirname + '/'))
    .use('/v1/api', router)
    .listen(port);

// Database
mongoose.connect('mongodb://mitchell:api@ds039185.mongolab.com:39185/web-tech-api');
const conn = mongoose.connection;
conn.on("error", (error) => {
    console.log(error);
});

// Router
router.route('/keywords')
    .options(() => {
        res.header("Access-Control-Allow-Methods", "GET, POST, PATCH");
    })

    .post((req, res) =>{
        Keyword.findOne({name: req.body.name}, (err, keyword) => {
            if (keyword !== null) {
                res.end();
            }
            else {
                let key = new Keyword({
                    name: req.body.name
                });

                key.save((err) => {
                    if (err)
                        res.send(err);

                    res.status(200);
                    res.send({message: "Keyword has been added!"})
                });
            }
        });
    })

    .get((req, res) => {
       Keyword.find((err, keywords) => {
           if (err)
               console.log(err);

           res.status(200);
           res.send(keywords);
       })
    });

router.patch("/keywords/:id", (req, res) => {
    Keyword.findById(req.params.id, (err, keyword) => {
        if (err) {
           console.log(err);
        }

        keyword.amountSearched++;

        keyword.save((err) => {
            if(err)
                console.log(err);

            res.status(200);
            res.send({message: "Added search"});
        });
    });
});