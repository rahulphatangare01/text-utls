import React, { useState } from 'react'

function TextForm(props) {

    const[text,setText]=useState(' ');

    const handleOnChange = (event)=> {
        console.log("on change");
        setText(event.target.value)
    }
    const handleUpClick = ()=>{
        console.log("Uppearcase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=>{
      console.log("Lowercase was clicked" + text)
      let newText = ' ';
      setText(newText)
  }
  const handleCopy =()=> {
    console.log("Copy text");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  return (
      <>
    <div className='container' style={{ color:props.mode==='dark'?'white':'#031035'}}>
        
<div className="mb-3">
<h1>{ props.headding}</h1>
  <textarea className="form-control"  value={text} onChange={handleOnChange} style={{ backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#031035'}}  id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-1' onClick={handleUpClick} > Convert to Uppercase</button>
<button className='btn btn-primary mx-1' onClick={handleLoClick} > Convert to Lowercase</button>
<button className='btn btn-primary mx-1' onClick={handleClearClick} > Clear text</button>
<button className='btn btn-primary mx-1' onClick={handleCopy} > Copy text</button>
<button className='btn btn-primary mx-1' onClick={handleExtraSpace} > Remove Extra Space</button>



    </div>
    <div className='container my-3' style={{ color:props.mode==='dark'?'white':'#031035'}}>
    <h2> Your text summary</h2>
    <p>{ text.split(" ").length}word and{text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2> previvew</h2>
    <p>
    
    {text.length>0?text:"Enter something in the textbox above to preview it here"}
    
    </p>


    </div>

    </>
  )
}

export default TextForm