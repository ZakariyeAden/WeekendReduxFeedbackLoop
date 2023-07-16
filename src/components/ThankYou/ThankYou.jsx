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
      <button onClick={handleReset}>Submit a New Feedback</button>
    </div>
  );
};

export default Thankyou;
