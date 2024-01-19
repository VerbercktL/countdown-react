import React from "react";
import styled from 'styled-components'

const DIV = styled.div`
display: flex;
align-items:center;
justify-content:center;
text-align: center;
width: 100%;`

const SECTION = styled.section`
color: #011F26;
font-family:Arial;
display:inline-block;
padding:25px;
margin:15px;
background:#03A688;
color:#FFF;
border:3px solid #03A688;
border-radius:5px;
font-size: 50px;`





const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
      <section>
        <section>
          <DIV>
            <SECTION>
              <p>{timerDays}</p>
              <small>Days</small>
            </SECTION>
            <span>:</span>
            <SECTION>
              <p>{timerHours}</p>
              <small>Hours</small>
            </SECTION>{" "}
            <span>:</span>
            <SECTION>
              <p>{timerMinutes}</p>
              <small>Minutes</small>
            </SECTION>{" "}
            <span>:</span>
            <SECTION>
              <p>{timerSeconds}</p>
              <small>Seconds</small>
            </SECTION>
          </DIV>
        </section>
      </section>
  );
};



export default Clock;