DROP DATABASE IF EXISTS portfolio_db;

CREATE DATABASE portfolio_db;

USE portfolio_db;

CREATE TABLE contact
(
	id INT NOT NULL AUTO_INCREMENT,
	fname VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
	message VARCHAR(500) NOT NULL, 
	PRIMARY KEY (id)
);