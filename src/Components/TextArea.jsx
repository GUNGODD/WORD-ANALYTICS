import { useState } from "react"

export const TextArea = () => {
    const [text, setText] = useState(" ");
    return (
        <>
            <textarea
                placeholder="Enter you text"
                onChange={(e) => {
                    let  newText = e.target.value;
                    setText(newText);
                    if (newText.includes("<script>")){
                    alert("No Script Tag Allowd!");
                    newText = newText.replace('<script>',' ');
                    }
                    setText(newText);
                }}
              
                value={text}
                className="textarea"

                spellCheck="false"

            />
        </>
    )
}

