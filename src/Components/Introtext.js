import React from "react";
import styled from 'styled-components'

const H1 = styled.h1`
color: #011F26;
text-align:center;
font-family:Arial;
font-size: 4rem;`

const H2 = styled.h2`
color: #011F26;
text-align:center;
font-family:Arial;
font-size: 3rem;`


const P = styled.p`
color: #011F26;
text-align:center;
font-family:Arial;
font-size: 2rem;`

function Introtext() {
  const today = new Date();
  const month = today.getMonth()+1;
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = date + "/" + month + "/" + year;
    return (
      <div>
        <H1>Welcome, </H1>
        <H2>We are today {currentDate}</H2>
        <P>2025 is almost there, but you still have to wait:</P>
      </div>
    );
  }
  
  export default Introtext;
