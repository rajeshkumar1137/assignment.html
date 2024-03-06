import { useState } from "react";
import data from "./data";
import './style.css'


export default function Accordation(){
  const [selected,setSelected]=useState(null);
  const [enableMulti,setEnableMulti]=useState(false);
  const [multiple,setMultiple]=useState([]);
  function handleSingle(getCurrentId){
   console.log(getCurrentId);
   setSelected(getCurrentId === selected? null : getCurrentId)
  }

  function handleMulti(getCurrentId){
    let cpyMultiple= [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)
  console.log(findIndexOfCurrentId);
  if(findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
  else cpyMultiple.splice(findIndexOfCurrentId,1)
setMultiple(cpyMultiple)
  }
 console.log(selected);

  return <div className="wrapper ">
    <button onClick={()=> setEnableMulti(!enableMulti)}>Enable Multi Selection</button>
    <div className="accordian">
        {
            data && data.length > 0 ?
            data.map(dataItem=> <div className="item">
                <div onClick={enableMulti? ()=>handleMulti(dataItem.id) :()=>handleSingle(dataItem.id)} className="title">
                  <h3>{dataItem.question}</h3>  
                  <span>+</span>
                </div>
                
                {
                    selected ===dataItem.id || multiple.indexOf(dataItem.id) !== -1? 
                    <div className="container">{dataItem.answer}</div>
                    :null
                }
            </div>)
            : <div>No data found ! </div>

        }
    </div>
  </div>;

}