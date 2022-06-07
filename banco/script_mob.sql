CREATE DATABASE projetoMob;

USE projetoMob;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

create table voto_personagens(
mob int,
ritsu int,
teruki int,
reigen int,
covinhas int,
musashi int
);

select * from voto_personagens;


 -- fk_usuario int,foreign key (fk_usuario) references usuario (id)

