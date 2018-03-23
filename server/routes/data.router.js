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

router.get('/glu/:id', (request, response) => {
  const id = request.params.id;
  console.log('get glu id', id);
  const sqlText = `SELECT entry_id, id, data_date, glu_value FROM data WHERE id=${id} ORDER BY entry_id`;
  pool.query(sqlText)
    .then(function(result) {
      console.log('Get result:', result);
      response.send(result.rows);
    })
    .catch(function(error){
      console.log('Error on Get:', error);
      response.sendStatus(500);
    })
}); // end get glu values

router.get('/hdl/:id', (request, response) => {
  const id = request.params.id;
  console.log('get hdl id', id);
  const sqlText = `SELECT entry_id, id, hdl_value FROM data WHERE id=${id} ORDER BY entry_id`;
  pool.query(sqlText)
    .then(function(result) {
      console.log('Get result:', result);
      response.send(result.rows);
    })
    .catch(function(error){
      console.log('Error on Get:', error);
      response.sendStatus(500);
    })
}); // end get hdl values

router.get('/ldl/:id', (request, response) => {
  const id = request.params.id;
  console.log('get ldl id', id);
  const sqlText = `SELECT entry_id, id, ldl_value FROM data WHERE id=${id} ORDER BY entry_id`;
  pool.query(sqlText)
    .then(function(result) {
      console.log('Get result:', result);
      response.send(result.rows);
    })
    .catch(function(error){
      console.log('Error on Get:', error);
      response.sendStatus(500);
    })
}); // end get ldl values

router.get('/trg/:id', (request, response) => {
  const id = request.params.id;
  console.log('get trg id', id);
  const sqlText = `SELECT entry_id, id, trg_value FROM data WHERE id=${id} ORDER BY entry_id`;
  pool.query(sqlText)
    .then(function(result) {
      console.log('Get result:', result);
      response.send(result.rows);
    })
    .catch(function(error){
      console.log('Error on Get:', error);
      response.sendStatus(500);
    })
}); // end get trg values

router.get('/hearthealth/:id', (request, response) => {
  const id = request.params.id;
  console.log('get hearthealth id', id);
  const sqlText = `SELECT entry_id, id, cvd_score FROM data WHERE id=${id} ORDER BY entry_id`;
  pool.query(sqlText)
    .then(function(result) {
      console.log('Get result:', result);
      response.send(result.rows);
    })
    .catch(function(error){
      console.log('Error on Get:', error);
      response.sendStatus(500);
    })
}); // end get hearthealth values

router.get('/waist/:id', (request, response) => {
  const id = request.params.id;
  console.log('get waist id', id);
  const sqlText = `SELECT entry_id, id, waist_value FROM data WHERE id=${id} ORDER BY entry_id`;
  pool.query(sqlText)
    .then(function(result) {
      console.log('Get result:', result);
      response.send(result.rows);
    })
    .catch(function(error){
      console.log('Error on Get:', error);
      response.sendStatus(500);
    })
}); // end get waist values

router.get('/sleep/:id', (request, response) => {
  const id = request.params.id;
  console.log('get sleep id', id);
  const sqlText = `SELECT entry_id, id, sleep_value FROM data WHERE id=${id} ORDER BY entry_id`;
  pool.query(sqlText)
    .then(function(result) {
      console.log('Get result:', result);
      response.send(result.rows);
    })
    .catch(function(error){
      console.log('Error on Get:', error);
      response.sendStatus(500);
    })
}); // end get sleep values

router.get('/weight/:id', (request, response) => {
  const id = request.params.id;
  console.log('get weight id', id);
  const sqlText = `SELECT entry_id, id, weight_value FROM data WHERE id=${id} ORDER BY entry_id`;
  pool.query(sqlText)
    .then(function(result) {
      console.log('Get result:', result);
      response.send(result.rows);
    })
    .catch(function(error){
      console.log('Error on Get:', error);
      response.sendStatus(500);
    })
}); // end get weight values

router.get('/bp/:id', (request, response) => {
  const id = request.params.id;
  console.log('get bp id', id);
  const sqlText = `SELECT entry_id, id, systolic_value, diastolic_value FROM data WHERE id=${id} ORDER BY entry_id`;
  pool.query(sqlText)
    .then(function(result) {
      console.log('Get result:', result);
      response.send(result.rows);
    })
    .catch(function(error){
      console.log('Error on Get:', error);
      response.sendStatus(500);
    })
}); // end get bp values

router.get('/dates/:id', (request, response) => {
  const id = request.params.id;
  console.log('get dates id', id);
  const sqlText = `SELECT entry_id, id, data_date FROM data WHERE id=${id} ORDER BY entry_id`;
  pool.query(sqlText)
    .then(function(result) {
      console.log('Get result:', result);
      response.send(result.rows);
    })
    .catch(function(error){
      console.log('Error on Get:', error);
      response.sendStatus(500);
    })
}); // end get dates values


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

router.get('/reports/:id', (request, response) => {
  const id = request.params.id;
  console.log('get reports id', id);
  const sqlText = `SELECT category_id, category_description FROM report_info`;
  pool.query(sqlText)
    .then(function(result) {
      console.log('Get result:', result);
      response.send(result.rows);
    })
    .catch(function(error){
      console.log('Error on Get:', error);
      response.sendStatus(500);
    })
}); // end get reports values

router.get('/resources/:id', (request, response) => {
  const id = request.params.id;
  console.log('get resources id', id);
  const sqlText = `SELECT category_id, resource_info FROM resources`;
  pool.query(sqlText)
    .then(function(result) {
      console.log('Get result:', result);
      response.send(result.rows);
    })
    .catch(function(error){
      console.log('Error on Get:', error);
      response.sendStatus(500);
    })
}); // end get resources values


router.put('/update/:id', (request, response) => {
  const id = request.params.id;
  const entry = request.body.entry;
  console.log('get update id', id);
  console.log('data', entry);
  let queryText = `UPDATE data SET age_value=$2, family_history_value=$3, physical_activity_value=$4, systolic_value=$5, diastolic_value=$6, nicotine_value=$7, glu_value=$8, hdl_value=$9, ldl_value=$10, trg_value=$11, waist_value=$12, sleep_value=$13, height_value=$14, weight_value=$15, gender=$16, age_score=$17, physical_activity_score=$18, family_history_score=$19, bp_score=$20, nicotine_score=$21, glu_score=$22, hdl_score=$23, ldl_score=$24, waist_score=$25, sleep_score=$26, cvd_score=$27 WHERE entry_id=$1`;
  pool.query(queryText, [id, entry.age_value, entry.family_history_value, entry.physical_activity_value, entry.systolic_value, entry.diastolic_value, entry.nicotine_value, entry.glu_value, entry.hdl_value, entry.ldl_value, entry.trg_value, entry.waist_value, entry.sleep_value, entry.height_value, entry.weight_value, entry.gender, entry.age_score, entry.physical_activity_score, entry.family_history_score, entry.bp_score, entry.nicotine_score, entry.glu_score, entry.hdl_score, entry.ldl_score, entry.waist_score, entry.sleep_score, entry.cvd_score])
    .then((result) => {
      response.sendStatus(200);
    })
    .catch((err) => {
      response.sendStatus(500);
    })


}); // end update values


module.exports = router;