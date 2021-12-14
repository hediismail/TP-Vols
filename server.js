const express = require("express")
const fs = require("fs")
// Importer l'API
const avions = require("./vol.json")

const app = express()

// Middleware important pour la methode POST
app.use(express.json())


app.get("/api",(req,res)=>{
    res.status(200).json(avions)
})

// GET /:id
app.get('/api/:id',(req,res)=>{
    const id = Number(req.params.id)
    const avion = avions.data.find(avion=> avion.id === id)
    res.status(200).json(avion)
})
// POST /

app.post("/api",(req,res)=>{
    avions.data.push(req.body)
    fs.writeFile('vol.json', JSON.stringify(avions), function (err) {
        console.log(err);
      });
    res.status(200).json(avions)
})
// PUT /:id

app.put("/api/:id", (req, res) => {
    const id = Number(req.params.id)
    let avion = avions.data.find( avion => avion.id === id)
    avion.nom_vol = req.body.nomVol
    avion.heure_depart = req.body.heureDepart
    avion.heure_arrive = req.body.heureArrivee
    avion.ville_depart = req.body.villeDepart
    avion.ville_arrive = req.body.villeArrivee
    fs.writeFile('vol.json', JSON.stringify(avions), function (err) {
        console.log(err);
      });
    res.status(200).json(avions)
})
// DELETE /:id

app.delete("/api/:id" , (req, res) => {
    const id = Number(req.params.id)
    let avion = avions.data.find( avion => avion.id === id)
    avions.data.splice(avions.data.indexOf(avion), 1)
    fs.writeFile('vol.json', JSON.stringify(avions), function (err) {
        console.log(err);
      });
    res.status(200).json(avions)
})

app.listen(5000,()=>{
    console.log("serveur lancé")
})