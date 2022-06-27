import InputName from "../input-name/input-name";

function ErrMessage(props){
    const {msg}=props;
    return(<div className="container">
        <span>{msg}</span>
        </div>
    )
}
export default ErrMessage;