import React,{useState} from 'react'

export default function Editor() {

    const handleOnChange = (event)=>{
        console.log('On change');
        setText(event.target.value);//showing inputed data
        }
    
    const [text, setText] = useState('Hi! Welcome React Tutorial By Teja')
    return (
        <>
        
         <div className="container">
           <div className="input">
             <h3>Input</h3>
             <textarea
              className="input-text"
              value={text}
              onChange={handleOnChange}
            />
          </div>

          <div className="output">
             <h3>Pro Note</h3>
             <div className="output-text">{text}</div>
           </div>
         </div>
      
        </>
    )
}