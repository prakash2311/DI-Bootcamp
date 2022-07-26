-- Database: dvdrental

-- DROP DATABASE IF EXISTS dvdrental;

-- CREATE DATABASE dvdrental
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'C'
--     LC_CTYPE = 'C'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;



-- XP GOLD

-- 1.You were hired to babysit your cousin and you want to find a few movies that he
-- can watch with you.
--   -> Find out how many films there are for each rating.
SELECT count(rating) as noumber,rating from film group by rating;

-- 2.Get a list of all the movies that have a rating of G or PG-13.
SELECT title, rating from film where rating='G' or rating='PG-13'

--  ->Filter this list further: look for only movies that are under 2 hours long,
-- and whose rental price (rental_rate) is under 3.00. Sort the list alphabetically.

SELECT title, rating,length,rental_rate from film
where (rating='G' or rating='PG-13') and length<120 and rental_rate<3 order by title asc;

-- 3.Find a customer in the customer table, and change his/her details to your details,
-- using SQL UPDATE.
-- 4.Now find the customer’s address, and use UPDATE to change the address to your address
-- (or make one up).
select * from customer

update customer
set first_name='Prakash',
  last_name='Devta'
where customer_id=524;
