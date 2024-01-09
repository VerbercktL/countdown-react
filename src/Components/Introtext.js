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
  const [inputDate, setInputDate] = useState("1 Jan 2025");
  const [currentDate, setCurrentDate] = useState(inputDate);


  const handleNameChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  const onChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const onClickHandler = () => {
    setCurrentDate(inputDate);
  };

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
      <input className="countdown-input" onChange={onChangeHandler} />
      <button className="countdown-button" onClick={onClickHandler}>
          Countdown
        </button>
    </form>
      </div>
    );
  }
  
  export default Introtext;
