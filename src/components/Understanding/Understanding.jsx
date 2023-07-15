import React from "react";
import { TextField, Button } from "@mui/material";
// React Router
import { HashRouter as Router, Route, Link } from "react-router-dom";
// HOOKS
import { useState } from 'react';
import { useDispatch } from 'react-redux';
const Understanding = () => {
  const [input, setInput] = useState({ understanding: "" });
  const dispatch = useDispatch();
  const handleUnderstanding = event => {
    setInput({
      ...input,
      understanding: event.target.value,
    });
  };
  dispatch({
    type: "GET_FEEDBACK",
    payload: input,
  });
  return (
    <form>
      <h3>How well are you understanding?</h3>
      <TextField
        id="outlined-basic"
        label="Understanding?"
        variant="outlined"
        type="number"
        onChange={handleUnderstanding}
      />
      <Link to="/support">
      <Button variant="contained">Next</Button>
      </Link>
    </form>
  );
};

export default Understanding;
