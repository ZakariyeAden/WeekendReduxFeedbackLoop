import React from "react";
import { TextField, Button } from "@mui/material";
// HOOKS
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const Feelings = () => {
  const [input, setInput] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  // Handle Submit
  const handleFeelings = event => {
    event.preventDefault();

    dispatch({
      type: "ADD_FEELING",
      payload: input,
    });
    history.push('/understanding')
  };

  return (
    <div>
      <form >
        <h3>How are you feeling Today?</h3>
        <TextField
          id="outlined-basic"
          value={input}
          label="Feeling?"
          variant="outlined"
          type="number"
          onChange={event => setInput(event.target.value)}
        />
        <Button variant="contained" type="submit" onClick={handleFeelings}>
          Next
        </Button>
      </form>
    </div>
  );
};

export default Feelings;
