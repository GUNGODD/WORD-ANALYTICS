import { useState } from "react";
import { Stats } from "./Stats"
import { TextArea } from "./TextArea"

export const Container = () => {
    const [text, setText] = useState("");
    const numberOfCharacters = text.length;
    const InstagramCharacterLeft =220- text.length;  
    const XCharacterLeft = 80- text.length;  
  return (
<main className="container">
    <TextArea text={text} setText={setText}/>
    <Stats numberOfCharacter={numberOfCharacters}  InstagramCharacterLeft={InstagramCharacterLeft} XCharacterLeft={XCharacterLeft} />
     </main>

  )
}

