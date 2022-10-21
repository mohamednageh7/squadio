import express, { Application} from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from 'cookie-parser'
import fetch from 'node-fetch'
import { generateUrl } from "./utils";

export const app: Application = express();

app.use(cookieParser());

// middlewares
app.use(morgan("dev"));

// for parsing application/json
app.use(express.json());
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: '*',
    credentials: true, 
    optionsSuccessStatus: 200,
    allowedHeaders:['Content-Type', 'Authorization'],
    exposedHeaders:['Content-Range', 'X-Content-Range'],
    preflightContinue:true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
  })
);


app.get('/api/finance',async (req,res) => {
    try {
        let query:any = req.query
        let url = query.url
        delete query.url
        let dataUrl = generateUrl(query,url)
        let data = await fetch(dataUrl)
        const body = await data.text();
        res.status(200).json({data:body})
    } catch (error) {
        res.status(500).send()
    }
})





