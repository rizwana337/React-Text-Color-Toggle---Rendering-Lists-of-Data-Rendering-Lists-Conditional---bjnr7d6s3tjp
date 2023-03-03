import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
  const [active, setActive] = useState(false);

  const onClickChange = () => {
    setActive(!active);
  };
  return (
    <div id="main">
      <p className={"text"} style={{ color: active ? "red" : "blue" }} >Newton School</p>
      <button id='button' onClick={onClickChange}>Change Style</button>
    </div>
  )
}


export default App;
