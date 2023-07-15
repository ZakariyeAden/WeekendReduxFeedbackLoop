import React from 'react'
import { TextField,Button } from '@mui/material'
// React Router
import { HashRouter as Router, Route, Link } from "react-router-dom";
const Support = () => {
  return (
    <form>
    <h3>How well are you being supported?</h3>
    <TextField id="outlined-basic" label="Support?" variant="outlined" type="number"/>
    <Link to="/comments">
    <Button variant="contained">Next</Button>
    </Link>
  </form>
  )
}

export default Support