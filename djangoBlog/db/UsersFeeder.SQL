show databases;

use spring_blog;

show tables;

drop table if exists users;

create TABLE users (
	id int(11) unsigned primary key auto_increment,
    username varchar(50) unique,
    password varchar(255)
);
