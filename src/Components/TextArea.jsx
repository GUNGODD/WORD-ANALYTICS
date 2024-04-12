
export const TextArea = () => {
  return (
   <>
  <textarea 
  onChange={(e)=>{
    console.log(e.target.value)
  } }
  
  className="textarea"
  placeholder="Enter you text"
  spellCheck="false"
  
  />
   </>
  )
}

