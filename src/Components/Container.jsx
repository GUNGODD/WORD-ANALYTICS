import { useState } from "react";
import { Stats } from "./Stats"
import { TextArea } from "./TextArea"
import{   INSTAGRAM_MAX_CHARACTER , X_MAX_CHARACTERS} from "./Constants"
export const Container = () => {
    const [text, setText] = useState("");
    
    const stats  = {
      numberOfWords:text.split(/\s/).filter((word)=> word !=="").length,
      numberOfCharacters:text.length,
      InstagramCharacterLeft:INSTAGRAM_MAX_CHARACTER- text.length,
      XCharacterLeft:X_MAX_CHARACTERS- text.length,
    }
  return (
<main className="container">
    <TextArea text={text} setText={setText}/>
    <Stats stats={stats} />
     </main>

  )
}

