import { Button } from "@mui/material";
import React from "react";
// HOOKS
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const Thankyou = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch({
      type: "THANKYOU",
    });
    // Go back to Feelings page
    history.push("/");
  };
  return (
    <div>
      <h3>Thank You for your Feedback!</h3>
      <Button onClick={handleReset} variant="contained">Submit a New Feedback</Button>
    </div>
  );
};

export default Thankyou;
