import React from 'react'
import { Button } from '@mui/material'
const ReviewItem = ({reveiw}) => {
  return (
    <div>
      <ul>
        <li>Feelings:{reveiw.feelings}</li>
        <li>Support:{reveiw.support}</li>
        <li>Understanding:{reveiw.understanding}</li>
        <li>Comments:{reveiw.comments}</li>
      </ul>
    </div>
  )
}

export default ReviewItem