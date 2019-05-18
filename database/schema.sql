DROP DATABASE IF EXISTS yelp;

CREATE DATABASE yelp;

USE yelp;

CREATE TABLE restaurants (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  maxguest int NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE hours (
  id int NOT NULL AUTO_INCREMENT,
  opentime int NOT NULL,
  closetime int NOT NULL,
  restaurants_id int NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE reservations (
  id int NOT NULL AUTO_INCREMENT,
  day int NOT NULL,
  date int NOT NULL,
  month int NOT NULL,
  year int NOT NULL,
  time int NOT NULL,
  numofpeople int NOT NULL,
  restaurants_id int NOT NULL,
  PRIMARY KEY (ID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/