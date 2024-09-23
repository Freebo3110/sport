import './App.css';
import { useState } from "react";
import { data } from './data';

function App() {
  const [sport,setSport]=useState(0);
  const {id,name,description,image}=data[sport];
  const nextSport =()=>{
    setSport((sport=>{
      sport++;
      if(sport>data.length-1){
        sport=0;
      }
      return sport;
    }))
  }
  const prevSport=()=>{
    setSport((sport=>{
      sport--;
      if(sport<0){
        return data.length-1;
      }
      return sport;
    }))
  }
  return (
    <div>
      <div className="container" >
        <img src={image} width="600px"  alt="sport"/>
      </div>
      <div className="container">
        <h1>{id} - {name}</h1>
      </div>
      <div className="container">
        <h2>{description}</h2>
      </div>
      <div className=" btn container">
      <button onClick={prevSport}>Previous</button>
      <button onClick={nextSport}>Next</button>
      </div>
    </div>
  );
}

export default App;
