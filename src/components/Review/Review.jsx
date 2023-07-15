import React from 'react'
import { Button } from '@mui/material'
// HOOKS
import { useSelector } from 'react-redux'
// Components
import ReviewItem from '../ReviewItem/ReviewItem'
const Review = () => {
  const feedbacks = useSelector(state => state.feedback);
  return (
    <div>
     {feedbacks.map((review) => {
       return(
         <ReviewItem reveiw={review} key={review.id}/>
       );
     })}   
     <Button variant="contained">Submit</Button> 
    </div>
  )
}

export default Review