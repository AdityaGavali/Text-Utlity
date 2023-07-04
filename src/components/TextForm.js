import { Alert, Button } from "antd";
import React, { useState } from "react";

function TextForm() {
    let [text , setText] = useState('');
    function countWords(str) {
        if(str.length == 0)return 0;
        return str.trim().split(/\s+/).length;
      
      }
    
    const HandleUp = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
    }
    const HandleExtra = ()=>{
     let noextra_text  = text.replace(/\s+/g, " ");

        setText(noextra_text)
    }
    const HandleLower = ()=>{
        let newText = text.toLowerCase()
        setText(newText);
   
    }
    const HandleClear = ()=>{
        alert('You are going to clear the text');
        setText("")
    }
    const HandleonChange = (event)=>{
        setText(event.target.value)
    }
    const num = 0.008*countWords(text);
  return (
    <div>
      <form action="">
        <div className="text-center">
          <textarea class="resize  h-96 w-8/12 rounded-md border-2 bg-slate-300 border-stone-900 shadow-xl  p-3" placeholder="Please enter your text here" value={text} onChange = {HandleonChange}></textarea>
        </div>
        <div className="text-center space-x-2  mb-10 mt-10 m-auto flex  justify-center lg: flex-wrap basis-2 gap-2">
          <Button className="w-40 p-1 text-yellow-500 font-bold" onClick={HandleUp}>Convert to Uppercase</Button>
          <Button className="w-40 p-1  text-yellow-500 font-bold" onClick={HandleLower}>Convert to Lowercase</Button>
          <Button className="w-40 p-1  text-yellow-500 font-bold" onClick={() => {navigator.clipboard.writeText(text)}}
>Copy Text</Button>
          <Button className="w-40 p-1 font-bold  text-yellow-500" onClick={HandleClear}>Clear Text</Button>
          <Button className="w-40 p-1 font-bold text-yellow-500" onClick={HandleExtra}>Remove Extra Space</Button>
        </div>
      </form>
      <div className="text-center  ">
          <h1 className="font-bold text-3xl text-zinc-500 body-font font-Alkatra">Text Summary</h1>
           <p className="text-2xl text-zinc-500 body-font font-Alkatra">Word Count : {countWords(text)} </p>
           <p className="text-2xl text-zinc-500 body-font font-Alkatra">No of Characters : {text.length} </p>
           <p className="text-2xl text-zinc-500 body-font font-Alkatra">Average Time Taken to read : {   Math.round(num * 100) / 100} Minutes </p>
           <h1 className="font-bold text-3xl text-zinc-500 body-font font-Alkatra mt-10">Preview</h1>
           <textarea class="resize h-64 w-6/12 rounded-md  mb-10 border-2 bg-slate-300  border-stone-900 shadow-xl p-3" placeholder='Text Preview will shown here' value={text} onChange = {HandleonChange}></textarea>
        
     

      </div>
    </div>
  );
}

export default TextForm;
