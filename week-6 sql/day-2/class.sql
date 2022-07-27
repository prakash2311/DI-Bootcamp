select * from department
select * from employee

-- 1. Create a Boss table with the columns boss_id, boss_name, boss_type (ie.nice, angry, funny ect...),
-- and dept_number:
-- The boss table,has a one to one relationship with the department table:
-- => a department can be managed by only 1 boss, and a boss can manage only 1 department


create table boss(
boss_id serial primary key,
boss_name varchar(20) not null,
boss_type varchar(24) not null,
dept_number integer unique references department (deptcode)
)

select * from boss
insert into boss(boss_name, boss_type, dept_number)
values('jhon', 'nice',(select deptcode from department where deptcode = 10)),
    ('dev','funny',(select deptcode from department where deptcode = 20))

select boss_name, boss_type,dept_number
from boss
inner join department
on dept_number=deptcode
where deptname = 'FINANCE'