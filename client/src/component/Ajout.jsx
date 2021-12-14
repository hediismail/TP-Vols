import {useState} from "react"
import { useNavigate } from 'react-router-dom';
import axios from "axios"
export default function Ajout({vols,setVols}){
	const navigate = useNavigate();
       const [nomVol, setNomVol] = useState("")
       const [heureDepart, setHeureDepart] = useState("")
       const [heureArrivee, setHeureArrivee] = useState("")
       const [villeDepart, setVilleDepart] = useState("")
       const [villeArrivee, setVilleArrivee] = useState("")

function enregistrer(){
       axios.post("/api", {
              id: Math.random(), 
              nom_vol: nomVol,
              heure_depart : heureDepart,
              heure_arrive : heureArrivee,
              ville_depart : villeDepart,
              ville_arrive : villeArrivee}).then(res=>{
                     setVols(res.data.data)
       })
       navigate("/")
}


    return (
        <>
            <label>Nom du Vol</label>
            <input type="text" 
                   value={nomVol}
                   onChange={(e)=>setNomVol(e.target.value)}  
                   className="form-control" 
                   placeholder="Nom Vol" 
            />
            <label>Heure Départ</label>
            <input type="text" 
                     value={heureDepart}
                     onChange={(e)=>setHeureDepart(e.target.value)} 
                   className="form-control" 
                   placeholder="Heure départ" 
            />
            <label>Heure Arrivée</label>
            <input type="text" 
                     value={heureArrivee}
                     onChange={(e)=>setHeureArrivee(e.target.value)} 
                   className="form-control" 
                   placeholder="Heure Arrivée" 
            />
            <label>Ville Départ</label>
            <input type="text" 
                     value={villeDepart}
                     onChange={(e)=>setVilleDepart(e.target.value)} 
                   className="form-control" 
                   placeholder="Ville Départ" 
            />
            <label>Ville Départ</label>
            <input type="text" 
            value={villeArrivee}
            onChange={(e)=>setVilleArrivee(e.target.value)} 
                   className="form-control" 
                   placeholder="Ville Arrivée" 
            />
            <button className="btn btn-secondary" onClick={()=>enregistrer()}>Enregistrer</button>
    
        </>
    )
}