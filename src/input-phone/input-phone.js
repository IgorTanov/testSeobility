    import React, {useState} from "react";
import ErrMessage from "../err-message/err-message";




const InputPhone=(props)=>{
const {data,setDate}=props
const [phone,setPhone]=useState("");
function onChange(e){
    setPhone(e.target.value)
    const value=e.target.value
    setDate({...data,phone:value}) 
};

    return  <div className="row" >
    <input
             type="text" name="phone" id="phone" placeholder="+7(000)000-00-00" onChange={onChange} value={data.phone} />
             
             
</div>

}
export default InputPhone;






