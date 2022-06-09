CREATE DATABASE projetoMob;

USE projetoMob;

CREATE TABLE usuario(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);


create table votos (
fk_usuario int,
foreign key (fk_usuario) references usuario (id),
personagem varchar(15),
primary key(fk_usuario,personagem)
);

insert into usuario values 

(null,'hiago','hiago@gmail.com','1020');

insert into votos values 
(1,'mob'),
(1,'covinhas');

insert into usuario values 

(null,'joao','joao@gmail.com','1020');
insert into votos values 
(2,'mob'),
(2,'covinhas'),
(2,'ritsu');

select * from votos;

select count(personagem) as qtd_votos,(select count(fk_usuario) from votos) as qtd_total from votos where personagem = 'mob';

select personagem,count(personagem) as mais_votado from votos group by personagem;

select * from usuario;

insert into usuario values

(null,'jades','jades@gmail.com','1020'),
(null,'marques','marques@gmail.com','1020');

insert into votos values
(5,'reigen'),
(5,'covinhas'),
(5,'ritsu'),
(5,'mob'),
(6,'teruki'),
(6,'reigen'),
(6,'musashi');

select * from usuario join votos on fk_usuario = id;



