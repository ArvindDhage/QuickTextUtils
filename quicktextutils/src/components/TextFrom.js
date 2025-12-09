import React ,{useState} from 'react'



export default function TextFrom(props) {
    const handleupclick =()=>{
       // console.log("Uppercase was clicked"  +  text);
        let newText  = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange =(event)=>{
      //  console.log("On changed");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
  return (
    <div>
          <h1>{props.heading} </h1>
            <div class="mb-3">
            <textarea className="form-control"value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
            </div>
            <button className="btn btn-ptimary" onClick={handleupclick}>Convert to uppercase</button>
    </div>
  )
}
