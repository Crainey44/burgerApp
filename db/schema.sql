DROP DATABASE IF EXISTS burger_db;

-- Create the database movie_planner_db and specified it for use.
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured boolean
  PRIMARY KEY (id)
);