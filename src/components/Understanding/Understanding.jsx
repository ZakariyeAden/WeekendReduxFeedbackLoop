import React from "react";
import { TextField, Button } from "@mui/material";
// React Router
import { HashRouter as Router, Route, Link } from "react-router-dom";
const Understanding = () => {
  return (
    <form>
      <h3>How well are you understanding?</h3>
      <TextField
        id="outlined-basic"
        label="Understanding?"
        variant="outlined"
        type="number"
      />
      <Link to="/support">
      <Button variant="contained">Next</Button>
      </Link>
    </form>
  );
};

export default Understanding;
