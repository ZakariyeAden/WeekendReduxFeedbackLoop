import React from 'react'
import { Button } from '@mui/material'
const ReviewItem = ({reveiw}) => {
  return (
    <div>
      <ul>
        <li>{reveiw.feelings}</li>
        <li>{reveiw.support}</li>
        <li>{reveiw.understanding}</li>
        <li>{reveiw.comments}</li>
      </ul>
    </div>
  )
}

export default ReviewItem