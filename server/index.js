import express from "express";
import * as dotev from "dotenv";
import cors from "cors"

import dalleRoutes from './routes/dalle.routes.js'

dotev.config();

const app = express();
app.use(cors());
app.use(express.json({limit:"50mb"}))

app.use('/api/v1/dalle',dalleRoutes)

app.get('/',(req,res)=>{
    res.status(200).json({message:"Hello from DALL.E"})
})

app.listen(8080, ()=> console.log("Server has started on port 8080"))
