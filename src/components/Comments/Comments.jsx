import React from "react";
import { TextField, Button } from "@mui/material";
// React Router
import { HashRouter as Router, Route, Link } from "react-router-dom";
const Comments = () => {
  return (
    <form>
      <h3>Any comments you want to leave?</h3>
      <TextField
        id="outlined-basic"
        label="Comments?"
        variant="outlined"
        type="text"
      />
      <Link to="/">
      <Button variant="contained">Next</Button>
      </Link>
      <Button variant="contained">Submit</Button>
    </form>
  );
};

export default Comments;
