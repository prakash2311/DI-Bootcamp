-- Database: Public

-- DROP DATABASE IF EXISTS "Public";

-- CREATE DATABASE "Public"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'C'
--     LC_CTYPE = 'C'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;


-- 🌟 Exercise 1 : Items And Customers
-- Create a database called public.
-- Add two tables:
-- items
-- customers.


-- Follow the instructions below to determine which columns and data types to add to the two tables:

-- Add the following items to the items table:
-- 1 - Small Desk – 100 (ie. price)
-- 2 - Large desk – 300
-- 3 - Fan – 80

-- Add 5 new customers to the customers table:
-- 1 - Greg - Jones
-- 2 - Sandra - Jones
-- 3 - Scott - Scott
-- 4 - Trevor - Green
-- 5 - Melanie - Johnson

-- Use SQL to fetch the following data from the database:
-- All the items.
-- All the items with a price above 80 (80 not included).
-- All the items with a price below 300. (300 included)
-- All customers whose last name is ‘Smith’ (What will be your outcome?).
-- All customers whose last name is ‘Jones’.
-- All customers whose firstname is not ‘Scott’.

-- CREATE TABLE ITEMS(
-- items_id SERIAL PRIMARY KEY,
-- 	items_name varchar(30) NOT NULL,
-- 	items_price SMALLINT NOT NULL
-- );

-- INSERT INTO ITEMS(items_name, items_price)
-- VALUES('Small Desk', 100),
-- ('Large Desk', 300),
-- ('Fan', 80);

-- SELECT * FROM ITEMS

-- CREATE TABLE CUSTOMERS(
-- name_id SERIAL PRIMARY KEY,
-- 	first_name varchar(20),
-- 	last_name varchar(24)
-- );

-- select * FROM CUSTOMERS

-- INSERT INTO CUSTOMERS(first_name, last_name)
-- VALUES('Greg', 'Jones'),
-- ('sandra', 'jones'),
-- ('Scott', 'Scott'),
-- ('Trevor','Green'),
-- ('Melanie','Johnson');

-- select * FROM CUSTOMERS

-- SELECT items_name, items_price FROM ITEMS WHERE items_price > 80;

-- SELECT items_name, items_price FROM ITEMS WHERE items_price < 300;

SELECT last_name FROM CUSTOMERS WHERE last_name ='Jones';

