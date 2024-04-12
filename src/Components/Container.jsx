import { useState } from "react";
import { Stats } from "./Stats"
import { TextArea } from "./TextArea"
const INSTAGRAM_MAX_CHARACTERS = 280;
const X_MAX_CHARACTERS =50;
export const Container = () => {
    const [text, setText] = useState("");
    
    const stats  = {
      numberOfWords:text.split(/\s/).filter((word)=> word !=="").length,
      numberOfCharacters:text.length,
      InstagramCharacterLeft:INSTAGRAM_MAX_CHARACTERS- text.length,
      XCharacterLeft:X_MAX_CHARACTERS- text.length,
    }
  return (
<main className="container">
    <TextArea text={text} setText={setText}/>
    <Stats stats={stats} />
     </main>

  )
}

