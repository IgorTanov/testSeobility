import React, { useState, useEffect } from "react";
import ErrMessage from "../err-message/err-message";
import './input-name.css'

const InputName = (props) => {
    
    const {data,setDate}=props
    const [error, setError] = useState(false);
    function onChange(e) {
       
        setDate({...data,name:e.target.value.toUpperCase()})
    }
    function volidation() {
        if (data.name == "") {
            return
        }
        const arr = data.name.split(" ")
        //console.log(/^\w+$/.test(name))
        if (arr.length == 2 &&
            arr[0].length >= 3 &&
            arr[0].length < 30 &&
            arr[1].length >= 3 &&
            arr[1].length < 30 &&
            (/^\w+$/.test(arr[0])) == true &&
            (/^\w+$/.test(arr[1])) == true) {
            setError(false)
        } else {
            setError(true)
        }
    }
    useEffect(volidation, [data.name])
    return <div className="row" >
        <input className='name' id="name" type='text' placeholder='enter your name and surname' onChange={onChange} value={data.name} />
        {error ?
            <ErrMessage msg=' может состоять только из 2-х слов (имя и фамилия) латинского алфавита. Минимальная длина каждого слова 3 символа,
         максимальная 30. Между словами может быть только 1 пробел. '/> : null}
    </div>
}

export default InputName;