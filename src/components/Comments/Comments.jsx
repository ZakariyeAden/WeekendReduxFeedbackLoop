import React from "react";
import { TextField, Button } from "@mui/material";
// HOOKS
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const Comments = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  // Handle submit
  const handleComments = event => {
    event.preventDefault();
    dispatch({
      type: "GET_COMMENT",
      payload: input,
    });
    // Go to review page
    history.push("/review");
  };
  return (
    <form>
      <h3>Any comments you want to leave?</h3>
      <TextField
        id="outlined-basic"
        label="Comments?"
        variant="outlined"
        type="text"
        onChange={e => setInput(e.target.value)}
        value={input}
      />

      <Button variant="contained" onClick={handleComments} style={{margin: "0.8rem 2rem"}}>Next</Button>
    </form>
  );
};

export default Comments;
