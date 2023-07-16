import { useState } from "react";
import { Button } from "@mui/material";
// HOOKS
import { useSelector } from "react-redux";
import axios from "axios";
const Review = () => {
  // Display the information from the store.Use useSelector
  const feeling = useSelector(state => state.feeling);
  const support = useSelector(state => state.support);
  const comments = useSelector(state => state.comment);
  const [showSubmit, setShowSubmit] = useState(false);
  const understanding = useSelector(state => state.understanding);

  //****  Hide the submit if its not filled
  // if(feeling && support && understanding && comment){
  //   setShowSubmit(!showSubmit)
  // }

  // Submit it to the Server DB table
  const handleSubmit = () => {
    axios
      .post("/feedback", {
        feeling,
        understanding,
        support,
        comments,
      })
      .then(response => {
        console.log("Submitted to the Server DB");
      })
      .catch(err => {
        console.log("ERRROR in submiting to the Server DB", err);
      });
  };
  return (
    <form className="review">
      <h2>Review Your Feedback</h2>
      <ul>
        <li>Feelings:{feeling}</li>
        <li>Understanding:{understanding}</li>
        <li>Support:{support}</li>
        <li>Comments:{comments}</li>
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
    </form>
  );
};

export default Review;
