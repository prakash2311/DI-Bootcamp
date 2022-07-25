-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

-- CREATE DATABASE bootcamp
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'C'
--     LC_CTYPE = 'C'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- CREATE TABLE STUDENT(
-- 	student_id SERIAL PRIMARY KEY,
-- 	first_name varchar(20) NOT NULL,
-- 	last_name varchar(25) NOT NULL,
-- 	date_birth DATE NOT NULL
-- );

-- INSERT INTO STUDENT (first_name, last_name, date_birth)
-- values('Marc','Benichou','02/11/1998'),
-- ('Yoan','Cohen','03/12/2010'),
-- ('Lea','Benichou','07/07/2010'),
-- ('Amelia','Dux','07/04/1996'),
-- ('David','Grez','04/06/2003'),
-- ('Omer','Simpson','03/10/1980')

-- SELECT * FROM STUDENT

-- INSERT INTO STUDENT (first_name, last_name, date_birth)
-- VALUES('Prakash','Devta','03/11/90')

-- SELECT first_name, last_name FROM STUDENT;

-- SELECT first_name, last_name FROM STUDENT WHERE student_id = 2;

-- SELECT first_name, last_name FROM STUDENT WHERE first_name = 'Marc' AND last_name = 'Benichou';

-- SELECT first_name, last_name FROM STUDENT WHERE first_name = 'Marc' OR last_name = 'Benichou';

-- SELECT first_name, last_name FROM STUDENT WHERE first_name LIKE '%a%' ;

-- SELECT first_name FROM STUDENT WHERE first_name ILIKE 'a%';

-- SELECT first_name FROM STUDENT WHERE first_name LIKE '%a';

-- SELECT first_name FROM STUDENT WHERE first_name LIKE '%%a';

-- SELECT first_name, last_name FROM STUDENT WHERE student_id = 1 AND student_id = 3;

SELECT first_name, last_name, date_birth FROM STUDENT WHERE date_birth >= '1-01-2000';

