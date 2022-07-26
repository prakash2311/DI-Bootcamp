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

SELECT * FROM customer

-- 2.Write a query to display the names (first_name, last_name) 
-- using an alias named “full_name”.

SELECT first_name|| ' ' || last_name AS full_name from customer

-- 3.Lets get all the dates that accounts were created. Write a 
-- query to select all the create_date from the “customer” table 
-- (there should be no duplicates).

SELECT DISTINCT create_date FROM customer group by create_date

-- 4.Write a query to get all the customer details from the customer table, 
-- it should be displayed in descending order by their first name.

select * from customer order by first_name desc;

-- 5.Write a query to get the film ID, title, description, year of release 
-- and rental rate in ascending order according to their rental rate.
select * from film

select * from film order by rental_rate asc

-- 6.Write a query to get the address, and the phone number of all customers 
-- living in the Texas district, these details can be found in 
-- the “address” table.
select * from address

select address, phone from address where district = 'Texas'

-- 7.Write a query to retrieve all movie details where the movie id is either
-- 15 or 150.
select * from film
select * from film where film_id = 15 or film_id = 150

-- 8.Write a query which should check if your favorite movie exists in the database. 
-- Have your query get the film ID, title, description, length and the rental rate,
-- these details can be found in the “film” table.

select * from film where title = 'Alone Trip'

-- 9.No luck finding your movie? Maybe you made a mistake spelling 
-- the name. Write a query to get the film ID, title, description,
-- length and the rental rate of all the movies starting with 
-- the two first letters of your favorite movie.

select * from film where title like 'Pa%'

-- 10.Write a query which will find the 10 cheapest movies.

select * from film order by rental_rate FETCH FIRST 10 ROW ONLY;

-- 11.Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
-- Bonus: Try to not use LIMIT.

select * from film order by rental_rate FETCH FIRST 10 ROW ONLY;

-- 12.Write a query which will join the data in the customer table and the payment table. 
-- You want to get the amount and the date of every payment made by a customer, 
-- ordered by their id (from 1 to…).

SELECT customer.customer_id, amount, payment_date
FROM customer
INNER JOIN payment ON customer.customer_id = payment.customer_id

-- 13.You need to check your inventory. Write a query to get all the movies which 
-- are not in inventory.

-- 14.Write a query to find which city is in which country.
SELECT country,city FROM city
INNER JOIN country ON country.country_id = city.country_id





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
