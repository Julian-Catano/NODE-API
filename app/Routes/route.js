import { Router } from "express";

const Routes = Router()

Routes.get("/", (req, res)=>{
    res.send({message: "holaaaaaa"});
})
Routes.get("/home/:name", (req, res)=>{
    res.send(`<h1>Hola ${nombre}, como estas?</h1>`);
    const nombre = req.params.name
})
Routes.get("/products/:name", (req, res)=>{
    const id = req.query.product
    res.send(`Product ${id}`);
})
Routes.post("/products", (req, res)=>{
    const { nombre, precio } = req.body
    res.send(`Product ${nombre} creado con precio ${precio}`);
})

export default Routes;











