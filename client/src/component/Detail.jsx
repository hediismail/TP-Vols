import {useState, useEffect} from 'react'
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
export default function Detail({setVols}){
    const navigate = useNavigate()
        const {id} = useParams()
        const [nomVol, setNomVol] = useState("")
       const [heureDepart, setHeureDepart] = useState("")
       const [heureArrivee, setHeureArrivee] = useState("")
       const [villeDepart, setVilleDepart] = useState("")
       const [villeArrivee, setVilleArrivee] = useState("")

       useEffect(() => {
        axios.get(`/api/${id}`).then(datas => {     
       let tmp = datas.data

       setNomVol(tmp.nom_vol)
       setHeureDepart(tmp.heure_depart)
       setHeureArrivee(tmp.heure_arrive)
       setVilleDepart(tmp.ville_depart)
       setVilleArrivee(tmp.ville_arrive)
      })
    }, [id])

    function modifier(){
        axios.put(`/api/${id}`, {
            nomVol: nomVol,
            heureDepart : heureDepart,
            heureArrivee : heureArrivee,
            villeDepart : villeDepart,
            villeArrivee : villeArrivee}).then(res=>{
                   setVols(res.data.data)
     })
     navigate('/')
    }

    function supprimer(){
        axios.delete(`/api/${id}`).then(res=>{
            setVols(res.data.data)
        })
        navigate('/')
       
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
            <button className="btn btn-secondary" onClick={()=>modifier()}>Modifier</button>
            <button className="btn btn-danger" onClick={()=>supprimer()}>Supprimer</button>
        </>
    )
}