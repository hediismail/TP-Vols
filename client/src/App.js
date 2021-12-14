import {useState, useEffect} from "react"
import './App.css';
import {Link} from "react-router-dom"
import Ajout from "./component/Ajout"
import Detail from "./component/Detail"
import { Routes, Route } from 'react-router-dom';

import axios from "axios"

function App() {
  const [vols, setVols] = useState()

    useEffect(() => {
      axios.get(`/api`).then(datas => {     
     let tmp = datas.data.data
     setVols(tmp) 
    })
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Routes>
            <Route path="/ajout" element={<Ajout vols={vols} setVols={setVols} />} />
            <Route path="/detail/:id" element={<Detail setVols={setVols} />} />
            <Route path="/" element={<div>
              <button><Link to={"/ajout"}>Ajout</Link></button>
          <table className="table table-striped mt-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nom Vol</th>
                <th scope="col">Heure Départ</th>
                <th scope="col">Heure Arrivée</th>
                <th scope="col">Ville Arrivée</th>
                <th scope="col">Ville Arrivée</th>
              </tr>
            </thead>
            <tbody>
              {vols && vols.map((vol,i)=>{
              return (<tr key={vol.id}>
                <th scope="row">{i + 1}</th>
                <td>{vol.nom_vol}</td>
                <td>{vol.heure_depart}</td>
                <td>{vol.heure_arrive}</td>
                <td>{vol.ville_depart}</td>
                <td>{vol.ville_arrive}</td>
                <td><button><Link to={`/detail/${vol.id}`}>Détails</Link></button></td>
              </tr>)
              })}
              
            </tbody>
          </table>
            </div>} />
          </Routes>
         
        </div>
      </header>
    </div>
  );
}

export default App;
