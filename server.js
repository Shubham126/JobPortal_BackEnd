import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 3001;

app.get('/health', (req, res) => {
    res.status(200).send("Your server is running cool !!!");
})

app.listen(port, (res, req)=>{
    console.log(`app listening on port ${port}`);
})