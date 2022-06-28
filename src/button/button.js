import React, { useState } from "react";
import ErrMessage from "../err-message/err-message";
import './button.css'


const InputButton = ({ data, setDate }) => {
    const [err, setError] = useState()

    function allItem(e) {

        e.preventDefault()
        //const ev=e.preventDefault() name:"",mail:"",phone:"",msg:"",data:

        const itemMail = data.mail;
        const itemName = (data.name.split(" "))
        const itemMsg = data.msg
        const itemPhone = data.phone
        const itemData = data.data

       // console.log(itemName.length)
        //console.log(itemName[0].length)
       // console.log(itemName[1].length)
       // console.log(/^\w+$/.test(itemName[0]))
       // console.log(/^\w+$/.test(itemName[1]))
        //console.log((/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(itemMail)))
        //console.log(itemPhone != isNaN)
       // console.log(itemData)

        //---------------------------------------------------------------поверка поля name
        if (itemName.length == 2 &&
            itemName[0].length >= 3 &&
            itemName[0].length < 30 &&
            itemName[1].length >= 3 &&
            itemName[1].length < 30 &&
            (/^\w+$/.test(itemName[0])) == true &&
            (/^\w+$/.test(itemName[1])) == true &&
            //--------------------------------------------------------------проверка поля mail
            (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(itemMail)) == true &&
            //--------------------------------------------------------------проверка поля msg
            itemMsg.length < 300 &&
            itemMsg.length > 10 &&

            //--------------------------------------------------------------проверка поля phone
            itemPhone != isNaN

            //--------------------------------------------------------------- провепка поля date
            // itemData!=""

            //--------------------------------------------------------------
        ) {
            fetch('https://my-json-server.typicode.com/typicode/demo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data),
            }
            ).then((result) => {
                return (result.json())
            }).then((json) => {
                if (json.status) {
                    setError(json.status)
                    setDate({ name: "", mail: "", phone: "", msg: "", data: '' })
                }
                else {
                    setError('что-то пошло не так')
                    setDate({ name: "", mail: "", phone: "", msg: "", data: '' })
                }
            }
            )
                .catch((err) => {
                    setError('что-то пошло не так')
                })
        }
        else {
            alert("форма заполнена не корректно!!!")
        }
    }
    return (<div className="row" >
        <button className="Button" type="submit" placeholder="submit" onClick={allItem} >submit</button>
        {err ? <ErrMessage msg={err} /> : null}
    </div>
    )
}

export default InputButton;