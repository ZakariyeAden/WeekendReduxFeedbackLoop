// Express
const express = require('express');
// Router
const router = express.Router();
// Database
const pool = require('../modules/pool');

// GET 
router.get('/',(req,res) => {
  // SQL
  let sqlText = 'SELECT * FROM "feedback";';

  pool.query(sqlText)
  // Get the 
  .then((result) => {
    console.log('Recieved the feedback from DB!',result.rows)
    res.send(result.rows);
    // Catch any Errors
  }).catch((err) => {
    console.log(`ERROR in GET: ${sqlText}`);
  })
})
// POST
router.post('/',(req,res) => {
  const feedback = req.body;
  // Sql
  const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments) 
                   VALUES ($1,$2,$3,$4)`;
  // Query and use Paratemerization 
  let param = [feedback.feeling, feedback.understanding, feedback.support, feedback.comments];
  pool.query(sqlText, param)
  .then((result) => {
    console.log('Feedback sent to the DB!');
    // Send an - OK status
    res.sendStatus(200);
  }).catch((err) => {
    console.log(`Error making database query ${sqlText}`, err);
    // Send an Error Status
    res.sendStatus(500);
  })
})

module.exports = router