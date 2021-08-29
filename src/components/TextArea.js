import React, { useState } from 'react'

export default function TextArea(props) {
    const [text, setText] = useState("")

    const  handleupclick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case", 'success');
    }

    const  handleloclick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case", 'success');
    }

    const handleonchange = (event)=>{
        setText(event.target.value)

    }

    const handleClear = () =>{
        let  newText = "";
        setText(newText);
        props.showAlert("Text cleared successfully", 'success');
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied successfully", 'success');
    }

    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed successfully", 'success');
        
    }

    return (
       <>
        <h1 style = {{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label" style = {{color:props.mode==='dark'?'white':'black'}}>Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" id = "myBox" value = {text} onChange ={handleonchange} rows="8" style = {{backgroundColor: props.mode==='light'?'white':'#090946', color:props.mode==='dark'?'white':'black'  }} ></textarea>
 </div>
 <button className="btn btn-primary mx-1" onClick = {handleupclick}>Convert to upper case</button>
 <button className="btn btn-primary mx-1" onClick = {handleloclick}>Convert to lower case</button>
 <button className="btn btn-primary mx-1" onClick = {handleClear}>Clear Text</button>
 <button className="btn btn-primary mx-1"  onClick = {handleCopy}>Copy Text</button>
 <button className="btn btn-primary mx-1 my-2"  onClick = {handleExtraSpace}>Remove Extra Spaces</button>
 
 <div className="container my-2" style = {{color:props.mode==='dark'?'white':'black'}}>
     <h2>Your text summary</h2>
     <p>{text.split(" ").length} words, {text.length} characters, </p>
     <p>{ 0.008 * text.split(" ").length} minutes to read </p>
     <h2>Preview</h2>
     <p>{text.length>0? text: 'Enter something in the textbox to preview it here'}</p>
 </div>
</>
    )
}
