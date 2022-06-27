import React from "react";
import './input-date.css'

const InputDate=(props)=>{
const {data,setDate}=props
 function onChange(e){
    
    setDate({...data,data:e.target.value})
 }
    return <div className="row">
            <input className="" type="date" onChange={onChange}  value={data.data}/>
        </div>
}

export default InputDate;