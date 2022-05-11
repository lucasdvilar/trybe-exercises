CREATE DATABASE IF NOT EXISTS zoologico;
USE zoologico;
CREATE TABLE animal (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    specie VARCHAR(100) NOT NULL,
    sex VARCHAR(100) NOT NULL,
    idade INT NOT NULL,
    location VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE manager (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE caretaker (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    manager_id INT NOT NULL,
    FOREIGN KEY (manager_id) REFERENCES manager(id)
) ENGINE=InnoDB;

CREATE TABLE animal_caretaker (
	animal_id INT NOT NULL,
    caretaker_id INT NOT NULL,
    FOREIGN KEY (animal_id) REFERENCES animal(id),
    FOREIGN KEY (caretaker_id) REFERENCES caretaker(id)
) ENGINE=InnoDB;