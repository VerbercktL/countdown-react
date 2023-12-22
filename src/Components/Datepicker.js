import React, { useState } from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styled from 'styled-components'

const DIV = styled.div`
color: #011F26;
text-align:center;
font-family:Arial;`


function Datepicker() {
    const [date, setDate] = useState(new Date());
    return (
      <DIV>
        <DatePicker selected={date} onChange={(date) => setDate(date)} />
      </DIV>
    );
  }
  
  export default Datepicker;
