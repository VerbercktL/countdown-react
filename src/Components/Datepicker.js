import React, { useState } from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styled from 'styled-components'

const DIV = styled.div`
color: #011F26;
text-align:center;
font-family:Arial;`


function Datepicker() {
    const [countDownDate, setDate] = useState(new Date());
    return (
      <DIV>
        <DatePicker selected={countDownDate} onChange={(countDownDate) => setDate(countDownDate)} />
      </DIV>
    );
  }
  
  export default Datepicker;
