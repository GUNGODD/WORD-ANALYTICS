import { useState } from "react"
import Warning from "./Warning";

export const TextArea = ({text, setText}) => {

    const [warningText , setWarning] = useState("");


    //validation  
        const handleChange =(e) => {
        let  newText = e.target.value;
        setText(newText);
        if (newText.includes("<script>")){
          
       setWarning(true);
        newText = newText.replace('<script>',' ');
        }else if ( newText.includes("@", " $", "%","*")){
           setWarning(true);
   
            newText= newText.replace("@",  "");
            newText= newText.replace("$",  "");
            newText= newText.replace("%",  "");
            newText= newText.replace("*",  "");
        }
        setText(newText);
    } 
    return (
        <>
            <textarea
                placeholder="Enter you text"
                onChange={handleChange}
              
                value={text}
                className="textarea"

                spellCheck="false"

            />
           <Warning  warningText={warningText}/> 
        </>
    );
}

