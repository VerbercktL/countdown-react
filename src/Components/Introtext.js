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

const LABEL = styled.label`
display: block;
text-align:center;
font-family:Arial;
font-size: 1.5rem;`

const BUTTON = styled.button`
display: block;
text-align:center;
font-family:Arial;
font-size: 1rem;
margin:auto`

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
      <LABEL>the name of your timer:
      <input 
        type="text" 
        name="name" 
        value={inputs.name || ""} 
        onChange={handleNameChange}
      />
      </LABEL>
      
        <BUTTON onClick={() => setEventText(inputs.name)}>Start</BUTTON>
    </form>
      </div>
    );
  }
  
  export default Introtext;
