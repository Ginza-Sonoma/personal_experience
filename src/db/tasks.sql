create database tasks;

use tasks;

create table tasks(
id_task int primary key auto_increment,
nombre varchar(100),
descripcion varchar(100)
);