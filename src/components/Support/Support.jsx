import React from "react";
import { TextField, Button } from "@mui/material";

// HOOKS
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const Support = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  // Handle Submit
  const handleSupport = event => {
    event.preventDefault();
    dispatch({
      type: "ADD_SUPPORT",
      payload: input,
    });
    history.push("/comments");
  };
  return (
    <form>
      <h3>How well are you being supported?</h3>
      <TextField
        id="outlined-basic"
        label="Support?"
        variant="outlined"
        type="number"
        onChange={event => setInput(event.target.value)}
        value={input}
      />
      <Button variant="contained" onClick={handleSupport}>
        Next
      </Button>
    </form>
  );
};

export default Support;
