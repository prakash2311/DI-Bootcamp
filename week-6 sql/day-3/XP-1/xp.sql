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
	
select * from language

-- 1.Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
-- -> Get all films, even if they don’t have languages.

select title, description, name from film
inner join language
on language.language_id = film.language_id;

-- -> Get all languages, even if there are no films in those languages.

select title, description, name from film
right join language
on language.language_id = film.language_id

-- 3.Create a new table called new_film with the following columns : id, name. 
-- Add some new films to the table.

CREATE TABLE new_film(
	new_id serial primary key,
	name VARCHAR ( 50 ) NOT NULL
);

insert into new_film (name)
values ('mission impossible'),('avenger'),('hawkeye')
select * from new_film

-- 4.Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, it’s review should be automatically deleted.
-- It should have the following columns:
-- ->review_id – a primary key, non null, auto-increment.
-- ->film_id – references the new_film table. The film that is being reviewed.
-- ->language_id – references the language table. What language the review is in.
-- ->title – the title of the review.
-- ->score – the rating of the review (1-10).
-- ->review_text – the text of the review. No limit on the length.
-- ->last_update – when the review was last updated.

CREATE TABLE customer_review(
review_id SERIAL PRIMARY KEY NOT NULL,
filmid INTEGER REFERENCES new_film (new_id) ON DELETE CASCADE ON UPDATE CASCADE,
language_id INTEGER REFERENCES language (language_id) ON DELETE CASCADE ON UPDATE CASCADE,
title VARCHAR(50) NOT NULL,
score SMALLINT,
review_text TEXT,
last_update DATE
)

select * from customer_review
select * from language

-- 5.Add 2 movie reviews. Make sure you link them to valid objects in 
-- the other tables.

INSERT INTO customer_review(filmid, language_id, title, score, review_text, last_update)
VALUES((SELECT new_id FROM new_film WHERE new_id = 1), 
	  (SELECT language_id FROM language WHERE name = 'English'),
	  'Great!', 10, 'One of the best movies I ever watched!', '2022/01/04');

INSERT INTO customer_review(filmid, language_id, title, score, review_text, last_update)
VALUES((SELECT new_id FROM new_film WHERE name = 'Border2'), 
	  (SELECT language_id FROM language WHERE name = 'English'),
	  'Good One!', 7, 'The best movies I ever watched!', '2021/04/06');
	  
-- 6.Delete a film that has a review from the new_film table, what 
-- happens to the customer_review table?	  

delete from new_film where name = 'mission impossible'
select * from customer_review


-- EX-2
-- Use UPDATE to change the language of some films. Make 
-- sure that you use valid languages
select * from film
update film set language_id = 2
where film_id =133

select * from film where film_id =133

-- We created a new table called customer_review. Drop this table. Is this an 
-- easy step, or does it need extra checking?
drop table customer_review;
