import React from 'react'
import { TextField,Button } from '@mui/material'
// React Router
import { HashRouter as Router, Route, Link } from "react-router-dom";

const Feelings = () => {
  return (
    <form>
      <h3>How are you feeling Today?</h3>
      <TextField id="outlined-basic" label="Feeling?" variant="outlined" type="number"/>
      <Link to="/understanding">
      <Button variant="contained">Next</Button>
      </Link>
    </form>
  )
}

export default Feelings