CREATE TABLE users (
  id serial primary key,
  username varchar(80) not null UNIQUE,
  password varchar(240) not null
);

CREATE TABLE data (
	entry_id serial primary key,
	id INT REFERENCES users ON DELETE CASCADE,
	data_date DATE,
	age_value INT,
	family_history_value BOOLEAN,
	physical_activity_value INT,
	systolic_value INT,
	diastolic_value INT,
	nicotine_value BOOLEAN,
	glu_value INT,
	hdl_value INT,
	ldl_value INT,
	trg_value INT,
	waist_value DECIMAL(3,1),
	sleep_value DECIMAL(3,1),
	height_value DECIMAL(4,2),
	weight_value DECIMAL(4,1),
	gender char(1),
	age_score INT,
	physical_activity_score INT,
	family_history_score INT,
	bp_score INT,
	nicotine_score INT,
	glu_score INT,
	hdl_score INT,
	ldl_score INT,
	waist_score INT,
	sleep_score INT,
	cvd_score INT
);

CREATE TABLE categories (
	category_id serial primary key,
	category_name varchar(20)
);

CREATE TABLE report_info (
	report_id serial primary key,
	category_id INT REFERENCES categories ON DELETE CASCADE,
	category_description varchar(255)
);

CREATE TABLE resources (
    resource_id serial primary key,
    category_id INT REFERENCES categories ON DELETE CASCADE,
    resource_info varchar(255)
);

  let queryText = `UPDATE data SET age_value=$2, family_history_value=$3, physical_activity_value=$4, systolic_value=$5, diastolic_value=$6, nicotine_value=$7, glu_value=$8, hdl_value=$9, ldl_value=$10, trg_value=$11, waist_value=$12, sleep_value=$13, height_value=$14, weight_value=$15, gender=$16, age_score=$17, physical_activity_score=$18, family_history_score=$18, bp_score=$19, nicotine_score=$20, glu_score=$21, hdl_score=$22, ldl_score=$23, waist_score=$24, sleep_score=$25, cvd_score=$26 WHERE entry_id=$1`;
  pool.query(queryText, [id, entry.age_value, entry.family_history_value, entry.physical_activity_value, entry.systolic_value, entry.diastolic_value, entry.nicotine_value, entry.glu_value, entry.hdl_value, entry.ldl_value, entry.trg_value, entry.waist_value, entry.sleep_value, entry.height_value, entry.weight_value, entry.gender, entry.age_score, entry.physical_activity_score, entry.family_history_score, entry.bp_score, entry.nicotine_score, entry.glu_score, entry.hdl_score, entry.ldl_score, entry.waist_score, entry.sleep_score, entry.cvd_score])
    .then((result) => {