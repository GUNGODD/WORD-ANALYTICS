import { useState } from "react"
import Warning from "./Warning";

export const TextArea = ({text, setText}) => {

    const [warningText , setWarningText] = useState("");
const [showWarning, setShowWarning] = useState(false);

const handleChanges = (e) =>{
    let newText = e.target.value;
    if (newText.includes("<script>")){
        
        setWarningText("No Script tag allowed !");
        setShowWarning(true);
       newText = newText.replace("<script>", "");

    }else if ( newText.includes("@")){
        setWarningText("No @ symbol allowed!");
        setShowWarning(true);
        newText = newText.replace("@","");
    }

    setText(newText);
} ;



    //validation  
        
    return (
        <>
            <textarea
                placeholder="Enter you text"
                onChange={handleChanges}
              
                value={text}
                className="textarea"

                spellCheck="false"

            />
           <Warning  warningText={warningText}/> 
        </>
    );
}

