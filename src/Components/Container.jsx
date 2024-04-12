import { useState } from "react";
import { Stats } from "./Stats"
import { TextArea } from "./TextArea"

export const Container = () => {
    const [text, setText] = useState("");
    
    const stats  = {
      numberOfWords:text.split(/\s/).filter((word)=> word !=="").length,
      numberOfCharacters:text.length,
      InstagramCharacterLeft:2220- text.length,
      XCharacterLeft:239- text.length,
    }
  return (
<main className="container">
    <TextArea text={text} setText={setText}/>
    <Stats stats={stats} />
     </main>

  )
}

