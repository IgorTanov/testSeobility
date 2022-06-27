import React, { useState, useEffect } from "react";
import ErrMessage from "../err-message/err-message";

const InputMail = (props) => {
    const {data,setDate}=props
    const [mail, setMail] = useState("")
    const [error, setError] = useState(false)
    function onChange(e) {
        setMail(e.target.value)
        const value=e.target.value;
        setDate({...data,mail:value})
    }
    function validation() {
        if (mail == "") {
            return
        }
        if (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(mail)) {
            setError(false)
        } else { 
            setError(true)
         }
    }

    useEffect(validation, [mail]);
    return (<div className="row" >
        <input className='mail' type='email' placeholder='enter your email' onChange={onChange} value={data.mail} />
        {error ? <ErrMessage msg='Не правильно введен адрес' /> : null}
    </div>

    )
}


export default InputMail;