import { useState} from "react";
import { Button } from "@mui/material";
// HOOKS
import { useSelector } from "react-redux";
import axios from "axios";
const Review = () => {
  // Display the information from the store.Use useSelector
  const feeling = useSelector(state => state.feeling);
  const support = useSelector(state => state.support);
  const comment = useSelector(state => state.comment);
  const [showSubmit, setShowSubmit] = useState(false);
  const understanding = useSelector(state => state.understanding);

  //****  Hide the submit if its not filled
  // if(feeling && support && understanding && comment){
  //   setShowSubmit(!showSubmit)
  // }

  const handleSubmit = () => {
    axios.post('/')
  }
  return (
    <form className="review">
      <h2>Review Your Feedback</h2>
      <ul>
        <li>Feelings:{feeling}</li>
        <li>Understanding:{understanding}</li>
        <li>Support:{support}</li>
        <li>Comments:{comment}</li>
      </ul>
      
      <Button variant="contained">Submit</Button>

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
