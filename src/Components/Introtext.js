import React from "react";
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
    return (
      <div>
        <H1>New Year countdown</H1>
        <P>2024 is almost there,, but you still have to wait:</P>
      </div>
    );
  }
  
  export default Introtext;
