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
      type: "GET_SUPPORT",
      payload: input,
    });
    // Go to comments page
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
        required
        onChange={event => setInput(event.target.value)}
        value={input}
      />
      <Button variant="contained" onClick={handleSupport} style={{margin: "0.8rem 2rem"}}>
        Next
      </Button>
    </form>
  );
};

export default Support;
