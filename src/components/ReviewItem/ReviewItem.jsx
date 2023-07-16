import React from 'react'
import { Button } from '@mui/material'
const ReviewItem = ({reveiw}) => {

  return (
    <form>
      <ul>
        <li>Feelings:{reveiw.feelings}</li>
        <li>Support:{reveiw.support}</li>
        <li>Understanding:{reveiw.understanding}</li>
        <li>Comments:{reveiw.comments}</li>
      </ul>
      <Button variant="contained">Submit</Button> 
    </form>
  )
}

export default ReviewItem