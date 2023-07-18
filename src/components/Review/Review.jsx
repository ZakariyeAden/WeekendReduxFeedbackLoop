import { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
// HOOKS
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const Review = () => {
  // Display the information from the store.Use useSelector
  const feedback = useSelector(state => state.feedback);
  // HOOKS
  const history = useHistory();
  const [showSubmit, setShowSubmit] = useState(false);

  //****  Hide the submit if its not filled
  // Still in progress
  if (
    feedback.feeling === "" ||
    feedback.support === "" ||
    feedback.comment === "" ||
    feedback.understanding === ""
  ) {
    setShowSubmit(!showSubmit);
  }

  // Submit it to the Server DB table
  const handleSubmit = () => {
    axios
      .post("/feedback", feedback)
      .then(response => {
        // Console log if it submmited to the DB then check
        console.log("Submitted to the Server DB");
      })
      // Catch any errors
      .catch(err => {
        console.log("ERRROR in submiting to the Server DB", err);
      });
    // Go to thank you page
    history.push("/thankyou");
  };
  return (
    <div className="review">
      <h2>Review Your Feedback</h2>
      <ul>
        <li>Feelings:{feedback.feeling}</li>
        <li>Support{feedback.support}</li>
        <li>Understanding{feedback.understanding}</li>
        <li>Comments:{feedback.comment}</li>
      </ul>

      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>

      {/* {!showSubmit ? (
        <Button variant="contained">Submit</Button>
      ) : (
      <Button variant="contained" disabled>
        Disabled
      </Button>
      )} */}
    </div>
  );
};

export default Review;
