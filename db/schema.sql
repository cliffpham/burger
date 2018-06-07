DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

INSERT INTO burgers (name) VALUES ('Cheeseburger');
INSERT INTO burgers (name) VALUES ('Hamburger');
INSERT INTO burgers (name, devoured) VALUES ('Turkeyburger', true);