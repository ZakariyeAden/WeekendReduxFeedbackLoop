import React from "react";
import { Button } from "@mui/material";
// HOOKS
import { useSelector } from "react-redux";

const Review = () => {
  // Display the information from the store.Use useSelector
  const feeling = useSelector(state => state.feeling);
  const support = useSelector(state => state.support);
  const comment = useSelector(state => state.comment);
  const understanding = useSelector(state => state.understanding);
  return (
    <div className="review">
      <h2>Review Your Feedback</h2>
      <ul>
        <li>Feelings:{feeling}</li>
        <li>Understanding:{understanding}</li>
        <li>Support:{support}</li>
        <li>Comments:{comment}</li>
      </ul>
      <Button variant="contained">Submit</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
    </div>
  );
};

export default Review;
