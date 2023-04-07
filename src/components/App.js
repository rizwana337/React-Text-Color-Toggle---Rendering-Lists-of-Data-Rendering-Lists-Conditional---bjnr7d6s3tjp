import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
  const[style, setStyle] = useState("redColor");
//code here 
const changeStyle = () => {
style == "redColor" ? setStyle("blueColor") : setStyle("redColor");
}
  return (
    <div id="main">
      <p className={style} >Newton School</p>
      <button id='button' onClick={changeStyle}>Change Style</button>
    </div>
  )
}


export default App;
