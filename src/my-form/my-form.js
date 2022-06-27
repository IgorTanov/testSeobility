import "./my-form.css"
import React, { useState } from "react";
import InputName from "../input-name/input-name";
import InputButton from "../button/button";
import InputDate from "../input-date/input-date";
import InputMail from "../input-mail/input-mail";
import InputPhone from "../input-phone/input-phone";
import InputText from "../input-text/input-text";



function MyForm(){
    const [data,setDate]=useState({name:"",mail:"",phone:"",msg:"",data:''})
    console.log(data)
    return(
        <div className="container" >
            <form className="form" >
                <InputName data={data} setDate={setDate}/>
                <InputMail data={data} setDate={setDate}/>
                <InputPhone data={data} setDate={setDate}/>
                <InputDate data={data} setDate={setDate}/>
                <InputText data={data} setDate={setDate}/>
                <InputButton data={data} setDate={setDate}/>
            </form>
            </div>

        
    )
}
export default MyForm;