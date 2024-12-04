console.log("ciao");
import express from "express"
const app = express();
const port =3003;



import routers from "./routers/recipe-routers.js";


app.use(express.static("punlic"));

app.use('/', routers)

app.get('/', (req, res) => {
    res.json("prendo tutto")
})





app.listen(port, () => {
    console.log("il server è acceso")
})