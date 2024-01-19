import React, { useState} from "react";
import styled from 'styled-components'

const H1 = styled.h1`
color: #011F26;
text-align:center;
font-family:Arial;
font-size: 4rem;`


const P = styled.p`
color: #011F26;
text-align:center;
font-family:Arial;
font-size: 2rem;`

function Introtext() {
  const [inputs, setInputs] = useState({});
  const [EventText, setEventText] = useState("Your Event"); 
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  }

  const handleNameChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }
    return (
      <div>
        <H1>Countdown</H1>
        <P>Fill in the form to start your countdown timer to {EventText}</P>
        <form onSubmit={handleSubmit}>
      <label>the name of your timer:
      <input 
        type="text" 
        name="name" 
        value={inputs.name || ""} 
        onChange={handleNameChange}
      />
      </label>
      <label>Day:
        <input 
          type="number" 
          name="day" 
          value={inputs.day || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Month:
        <input 
          type="number" 
          name="month" 
          value={inputs.month || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Year:
       <input 
          type="number" 
          name="year" 
          value={inputs.year || ""} 
          onChange={handleChange}
        />
    </label>
        <button onClick={() => setEventText(inputs.name)}>Start</button>
    </form>
      </div>
    );
  }
  
  export default Introtext;
