CREATE TABLE users (
  id serial,
  username varchar(80) not null UNIQUE primary key,
  password varchar(240) not null
);

CREATE TABLE data (
	entry_id serial primary key,
	username varchar(80) REFERENCES users ON DELETE CASCADE,
	age_value INT,
	family_history_value BOOLEAN,
	physical_activity_value INT,
	systolic_value INT,
	diastolic_value INT,
	nicotine_value BOOLEAN,
	glu_value INT,
	hdl_value INT,
	ldl_value INT,
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