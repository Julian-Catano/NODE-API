import express from 'express'
import Router from './Routes/route.js';
import Cors from "cors"
const app = express();

app.use(express.json());
app.use(Cors());
app.use(Router);


const port = 3000;
app.listen(port, ()=>{
    console.log(`Funcionando en el puerto: http://localhost:${port}`);
})











