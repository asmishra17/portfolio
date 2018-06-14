DROP DATABASE IF EXISTS portfolio_db;

CREATE DATABASE portfolio_db;

USE portfolio_db;

CREATE TABLE contacts
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    message VARCHAR(1000) NOT NULL,
    PRIMARY KEY (id)
);
