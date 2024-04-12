import { useState } from "react";
import Warning from "./Warning";

 const TextArea = ({ text, setText }) => {
    const [warningText, setWarningText] = useState("");
    const [showWarning, setShowWarning] = useState(false);

    const handleChanges = (e) => {
        let newText = e.target.value;
        const maxLineLength = 40;

        // Split text into lines and check each line's length
        let lines = newText.split('\n');
        lines = lines.map(line => {
            if (line.length > maxLineLength) {
                // Insert a newline character at every maxLineLength characters
                let modifiedLine = '';
                for (let i = 0; i < line.length; i += maxLineLength) {
                    modifiedLine += line.substring(i, i + maxLineLength) + '\n';
                }
                return modifiedLine.trim(); // Trim to remove the last unnecessary newline
            }
            return line;
        });

        newText = lines.join('\n');

        // Check for disallowed characters
        if (newText.includes("<script>")) {
            setWarningText("No Script tag allowed !");
            setShowWarning(true);
            newText = newText.replace("<script>", "");
        } else if (newText.includes("@")) {
            setWarningText("No @ symbol allowed!");
            setShowWarning(true);
            newText = newText.replace("@", "");
        }

        setText(newText);
    };

    return (
        <>
            <textarea
                placeholder="Enter your text"
                onChange={handleChanges}
                value={text}
                className="textarea"
                spellCheck="false"
                style={{ whiteSpace: "pre-wrap" }} // Ensure that newlines are respected
            />
            <Warning warningText={warningText} />
        </>
    );
};
export default TextArea;