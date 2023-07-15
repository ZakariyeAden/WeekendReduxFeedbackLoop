import React from "react";
import { TextField, Button } from "@mui/material";
// React Router
import { HashRouter as Router, Route, Link } from "react-router-dom";
// HOOKS
import { useState } from "react";
import { useDispatch } from "react-redux";
const Comments = ({input, setInput}) => {
  // const [input, setInput] = useState({ comments: "" });
  const dispatch = useDispatch();
  const handleComments = event => {
    setInput({
      ...input,
      comments: event.target.value,
    });
  };
  dispatch({
    type: "GET_FEEDBACK",
    payload: input,
  });
  return (
    <form>
      <h3>Any comments you want to leave?</h3>
      <TextField
        id="outlined-basic"
        label="Comments?"
        variant="outlined"
        type="text"
        onChange={handleComments}
      />
      <Link to="/review">
        <Button variant="contained">Next</Button>
      </Link>
    </form>
  );
};

export default Comments;
