const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();


router.get('/:id', (request, response) => {
  const id = request.params.id;
  console.log('get id', id);
  const sqlText = `SELECT * FROM data WHERE id=${id} ORDER BY entry_id DESC LIMIT 1`;
  pool.query(sqlText)
    .then(function(result) {
      console.log('Get result:', result);
      response.send(result.rows);
    })
    .catch(function(error){
      console.log('Error on Get:', error);
      response.sendStatus(500);
    })
});



router.post('/', (request, response) => {
    const entry = request.body.entry;
    console.log('post id', entry);
    let sqlText = `INSERT INTO data 
    (id, data_date, age_value, family_history_value, physical_activity_value, systolic_value, diastolic_value, nicotine_value, glu_value, hdl_value, ldl_value, trg_value, waist_value, sleep_value, height_value, weight_value, gender, age_score, physical_activity_score, family_history_score, bp_score, nicotine_score, glu_score, hdl_score, ldl_score, waist_score, sleep_score, cvd_score)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28)`;
    pool.query(sqlText, [entry.id, entry.data_date, entry.age_value, entry.family_history_value, entry.physical_activity_value, entry.systolic_value, entry.diastolic_value, entry.nicotine_value, entry.glu_value, entry.hdl_value, entry.ldl_value, entry.trg_value, entry.waist_value, entry.sleep_value, entry.height_value, entry.weight_value, entry.gender, entry.age_score, entry.physical_activity_score, entry.family_history_score, entry.bp_score, entry.nicotine_score, entry.glu_score, entry.hdl_score, entry.ldl_score, entry.waist_score, entry.sleep_score, entry.cvd_score])
    .then((result) => {
    console.log('Added entry:', result);
    response.sendStatus(201);
  }).catch((error) => {
    console.log('Error posting entry:', error);
    response.sendStatus(500);
  })
}); // end POST


module.exports = router;