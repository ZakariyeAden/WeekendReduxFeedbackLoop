import React from "react";
import { TextField, Button } from "@mui/material";
// React Router
import { HashRouter as Router, Route, Link } from "react-router-dom";
// HOOKS
import { useState } from 'react';
import { useDispatch } from 'react-redux';
const Support = () => {
  const [input, setInput] = useState({ support: "" });
  const dispatch = useDispatch();
  const handleSupport = event => {
    setInput({
      ...input,
      support: event.target.value,
    });
  };
  dispatch({
    type: "GET_FEEDBACK",
    payload: input,
  });
  return (
    <form>
      <h3>How well are you being supported?</h3>
      <TextField
        id="outlined-basic"
        label="Support?"
        variant="outlined"
        type="number"
        onChange={handleSupport}
      />
      <Link to="/comments">
        <Button variant="contained">Next</Button>
      </Link>
    </form>
  );
};

export default Support;
