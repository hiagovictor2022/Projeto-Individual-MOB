CREATE DATABASE projetoMob;

USE projetoMob;

CREATE TABLE usuario(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

create table voto_personagens(
id_voto int auto_increment,
mob int,
ritsu int,
teruki int,
reigen int,
covinhas int,
musashi int,
fk_usuario int,
foreign key (fk_usuario) references usuario (id),
primary key (id_voto,fk_usuario)
);

drop table votos;

INSERT INTO voto_personagens (mob,fk_usuario) VALUES (1,1);

select * from voto_personagens;

select truncate((sum(mob)/count(id_voto))*100,2) as porcentagem from voto_personagens;


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

select personagem,count(personagem) from votos group by personagem;







