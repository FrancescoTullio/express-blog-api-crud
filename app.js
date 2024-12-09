console.log("ciao");
import express from "express"
const app = express();
const port =3003;
import handleError from "./middel/handrlerror";



import routers from "./routers/recipe-routers.js";

app.use(express.json());
app.use(express.static("punlic"));

app.use('/', routers)
app.use(handleError)

app.get('/', (req, res) => {
    res.json("prendo tutto")
})





app.listen(port, () => {
    console.log("il server è acceso")
})