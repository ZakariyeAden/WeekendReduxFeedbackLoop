import React from "react";
import { TextField, Button } from "@mui/material";
// HOOKS
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const Understanding = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  // Handle submit
  const handleUnderstanding = event => {
    event.preventDefault();
    dispatch({
      type: "GET_UNDERSTANDING",
      payload: input,
    });
    // GO to support page
    history.push("/support");
  };
  return (
    <form>
      <h3>How well are you understanding?</h3>
      <TextField
        id="outlined-basic"
        label="Understanding?"
        variant="outlined"
        type="number"
        required
        onChange={event => setInput(event.target.value)}
        value={input}
      />

      <Button variant="contained" onClick={handleUnderstanding} style={{margin: "0.8rem 2rem"}}>
        Next
      </Button>
    </form>
  );
};

export default Understanding;
