-- Part 2 
-- Creating a new database
CREATE DATABASE school DEFAULT CHARACTER SET = 'utf8mb4';
USE school;

-- Creating tables
CREATE TABLE class(
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key', 
  name VARCHAR(255) NOT NULL, 
  begins DATE NOT NULL, 
  ends DATE NOT NULL
);

CREATE TABLE student(
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key', 
  name VARCHAR(255) NOT NULL, 
  email varchar(255) NOT NULL, 
  phone varchar(255) NULL, 
  class_id int(10), 
  FOREIGN KEY (class_id) REFERENCES class (id)
);

-- Create an index on the name column of the student table
CREATE UNIQUE INDEX index_name ON student(name);

-- Add a new column to the class table named status
ALTER TABLE 
  class 
ADD 
  status ENUM(
    'not-started', 'ongoing', 'finished'
  );
