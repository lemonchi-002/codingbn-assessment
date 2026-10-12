create table department (
	department_id int primary key,
	department_name varchar(50) not null
);

create table students (
	student_id int primary key,
	student_name varchar(100) not NULL,
	gender varchar(10),
	department_id int,
	gpa decimal(3,2),
	foreign key (department_id) references department(department_id)
);

insert into department values
	(1, 'Science'), (2, 'Social'), (3, 'Politic'), (4, 'Tech');

insert into students values
	(1, 'John Doe', 'men', 1, 3.11),
	(2, 'Jane Doe', 'women', 2, 2.80),
	(3, 'Abdullah', 'men', 1, 3.80),
	(4, 'Aminah', 'women', 3, 3.21);

show tables;
describe department;
describe students;
show databases;

-- database test question 1
select d.department_name, s.student_name, s.gpa
from students s
join department d on s.department_id = d.department_id
order by d.department_name asc, s.gpa asc;

-- database test question 2
select d.department_name, count(s.student_name)
from department d
left join students s 
on s.department_id = d.department_id
and  s.gpa < 3.0
group by d.department_name;

-- database test question 3
select d.department_name, count(s.student_name)
from department d
left join students s 
on s.department_id = d.department_id
and  s.gpa > 3.0
group by d.department_name;

-- database test question 4
select d.department_name, avg(s.gpa)
from department d
left join students s
on s.department_id = d.department_id
group by d.department_name;

-- database test question 5
select d.department_name, 
count(case when s.gender = 'women' then 1 end) as women,
count(case when s.gender = 'men' then 1 end) as men
from department d
left join students s
on s.department_id = d.department_id
group by d.department_name
order by d.department_name;