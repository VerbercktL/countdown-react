import React from "react";

import Datepicker from "./Datepicker";

function Introtext() {
  const pauseTimer = () => {

  }
    return (
      <div>
        <ul>
            <li>implement pause button</li>
            <button onClick={pauseTimer}>Pause</button>
            <li>Make select date work</li>
            <Datepicker />
            <li>add start/stop Buttons</li>
            <li>add button to add time</li>
        </ul>
      </div>
    );
  }
  
  export default Introtext;
