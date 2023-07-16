import { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
// HOOKS
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const Review = () => {
  // Display the information from the store.Use useSelector
  const feeling = useSelector(state => state.feeling);
  const support = useSelector(state => state.support);
  const comments = useSelector(state => state.comment);
  const understanding = useSelector(state => state.understanding);
  // HOOKS
  const history = useHistory();
  const dispatch = useDispatch();
  const [showSubmit, setShowSubmit] = useState(false);

  //****  Hide the submit if its not filled
  // if(feeling && support && understanding && comment){
  //   setShowSubmit(!showSubmit)
  // }

  // Submit it to the Server DB table
  const handleSubmit = () => {
    axios
      .post("/feedback", {
        // Data to submit
        feeling,
        understanding,
        support,
        comments,
      })
      .then(response => {
        // Console log if it submmited to the DB then check
        console.log("Submitted to the Server DB");
      })
      // Catch any errors
      .catch(err => {
        console.log("ERRROR in submiting to the Server DB", err);
      });

      dispatch({
        type:'THANKYOU'
      })
      history.push('/thankyou')
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
