import { useState } from "react";
import "./index.css";
function Lesstext({text, max = 30}) {
    let [showText, setShowtext] = useState(true);
    if(text.length <= max){
        return <span>{text}</span>
    }
    return ( 
        <span className="span">{showText ? `${text.substring(0, max)} ...` : text}
           <a href="#" onClick={(evt) => {
               evt.preventDefault();
               setShowtext(!showText);
           }}>{showText ? "Shat" : "Qich"}</a>
        </span>
     );
}
export default Lesstext;

