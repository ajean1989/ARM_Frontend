CREATE DATABASE ARM_USER;

CREATE TABLE role(
   id_role INT,
   name VARCHAR(32) NOT NULL,
   PRIMARY KEY(id_role)
);

CREATE TABLE dataset(
   id_dataset INT,
   name VARCHAR(32) NOT NULL,
   PRIMARY KEY(id_dataset)
);

CREATE TABLE _user(
   id_user INT,
   last_name VARCHAR(32) NOT NULL,
   first_name VARCHAR(32) NOT NULL,
   role INT NOT NULL,
   id_role INT NOT NULL,
   PRIMARY KEY(id_user),
   UNIQUE(id_role),
   FOREIGN KEY(id_role) REFERENCES role(id_role)
);

CREATE TABLE role_dataset(
   id_role INT,
   id_dataset INT,
   PRIMARY KEY(id_role, id_dataset),
   FOREIGN KEY(id_role) REFERENCES role(id_role),
   FOREIGN KEY(id_dataset) REFERENCES dataset(id_dataset)
);
