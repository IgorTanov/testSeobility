import React,{ useState, useEffect } from "react";
import ErrMessage from "../err-message/err-message";

const InputText = (props) => {
    const [text, setText] = useState('');
    const [error, setError] = useState(false);
    const {data,setDate}=props
    function onChange(e) {
        setText(e.target.value);
        const value=e.target.value;
        setDate({...data,msg:value})
    }
    function volidation() {
        const arr=text.split('')
        if (text == "") {
            return
        }
        if (arr.length < 10 || arr.length > 300) {
            setError(true)
        } else {
            setError(false)
        }
    }
    useEffect(volidation, [text])

    return <div className="row">
        <input className='text' type='text' placeholder='enter your masage' onChange={onChange} value={data.msg} />
        {error ?
            <ErrMessage msg='Поле “Сообщение” имеет минимальную длину в 10 символов и максимальную в 300.' /> : null}
    </div>
};
export default InputText;
