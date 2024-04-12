import { useState } from "react"

export const TextArea = () => {
    const [text, setText] = useState(" ");

    const hanldeChange =(e) => {
        let  newText = e.target.value;
        setText(newText);
        if (newText.includes("<script>")){
        alert("No Script Tag Allowd!");
        newText = newText.replace('<script>',' ');
        }
        setText(newText);
    }
    return (
        <>
            <textarea
                placeholder="Enter you text"
                onChange={hanldeChange}
              
                value={text}
                className="textarea"

                spellCheck="false"

            />
        </>
    )
}

