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
  const sqlText = `SELECT entry_id, id, glu_value FROM data WHERE id=${id} ORDER BY entry_id`;
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