import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [find, setfind] = useState("");
  const [replace, setreplace] = useState("");


  // ✅ Function to Convert Text to Uppercase
  const UpperClick = () => {
    console.log("You have clicked Uppercase");
    setText(text.toUpperCase()); // Converts text to uppercase
  };

  const LowerClick = () => {
    console.log("You have clicked Lowercase");
    setText(text.toLowerCase()); // Converts text to uppercase
  };

  const ClearClick = () => {
    console.log("You have clicked clear");
    setText(" ")
    setfind(" ")
    setreplace(" ")
  };

  const CopyClick = () => {
    console.log("You have clicked copy");
    navigator.clipboard.writeText(text)
  };

  const findReplace = (find, replace) => {
   setText(text.replaceAll(find, replace))
  };

  

  // ✅ Function to Handle Text Change
  const changeuppper = (event) => {
    console.log("You have changed Uppercase");
    setText(event.target.value);
  };

  const changelower = (event) => {
    console.log("You have changed Lowercase");
    setText(event.target.value);
  };



  return (
    <>
      <div>
        <h1 className={`my-3 text-${props.mode==='dark'?'light':'dark'}`}>{props.heading}</h1>
        <div className="mb-3" style={props.mystyle}>
          {/* ✅ Controlled TextArea */}
          <textarea
            className="form-control"
            id="my-box"
            style={props.mystyle}
            rows={8}
            value={text} // ✅ Controlled Component
            onChange={changeuppper} // ✅ Handles Text Change
          ></textarea>
        </div>

        {/* ✅ Button Clicks Uppercase Function */}
        <button className= {`btn btn-${props.mode==='dark'?'dark':'primary'} mx-2`} onClick={UpperClick}>
          Convert to Uppercase
        </button>
        <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-2`}onClick={LowerClick}>
          Convert to Lowercase
        </button>
        <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-2`}onClick={CopyClick}>
          Copy
        </button>

        <input  
  style={{ ...props.mystyle, color: props.mode === 'dark' ? 'white' : 'black' }} 
  type="text" 
  placeholder="Find" 
  value={find} 
  onChange={(e) => setfind(e.target.value)} 
  className="form-control my-2" 
/>

<input  
  style={{ ...props.mystyle, color: props.mode === 'dark' ? 'white' : 'black' }} 
  type="text" 
  placeholder="Replace" 
  value={replace} 
  onChange={(e) => setreplace(e.target.value)} 
  className="form-control my-2" 
/>
<button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-2`} onClick={()=>findReplace(find,replace)}>Find & Replace</button>


        <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-2`} onClick={ClearClick}>
          Clear 
        </button>
      </div>

      <h2 className={`my-3 text-${props.mode==='dark'?'light':'dark'}`}>Text Summary</h2>
<p className={`my-3 text-${props.mode==='dark'?'light':'dark'}`}>
  {text.length > 0 ? text : "Enter text to preview"}
</p>
<p className={`my-3 text-${props.mode==='dark'?'light':'dark'}`}>
  <b>{text.split(" ").filter(word => word.length !== 0).length} words and {text.length} characters</b>
</p>

    </>
  );
}
