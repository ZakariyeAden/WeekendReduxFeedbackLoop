import React from 'react'
import { TextField,Button } from '@mui/material'
// React Router
import { HashRouter as Router, Route, Link } from "react-router-dom";
// HOOKS
import { useState } from 'react';
import { useDispatch } from 'react-redux';
const Feelings = () => {
  const [input, setInput] = useState({feelings:''})
  const dispatch = useDispatch();
  const handleFeelings = (event) => {
    setInput({
      ...input,
      feelings:event.target.value
    });

  }
  dispatch({
    type:"GET_FEEDBACK",
    payload:input
  })
  return (
    <form>
      <h3>How are you feeling Today?</h3>
      <TextField id="outlined-basic" label="Feeling?" variant="outlined" type="number" onChange={handleFeelings}/>
      <Link to="/understanding">
      <Button variant="contained" type="submit">Next</Button>
      </Link>
    </form>
  )
}

export default Feelings