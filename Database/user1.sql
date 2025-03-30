create database user1;

CREATE TABLE USERS(
  Userid VARCHAR(20) PRIMARY KEY,
  Username VARCHAR(15) UNIQUE,
  FirstName VARCHAR(10),
  LastName VARCHAR(10),
  Mobile VARCHAR(10) 
);

INSERT INTO USERS(Userid,Username,FirstName,LastName,Mobile) VALUES ('clark@example.com', 'Clark','Clark','Smith','5551234567' );
INSERT INTO USERS(Userid,Username,FirstName,LastName,Mobile) VALUES ('dave@example.com', 'Dave','Dave','Johnson','6475557890');
INSERT INTO USERS(Userid,Username,FirstName,LastName,Mobile) VALUES ('ava@example.com', 'Ava','Ava','Taylor','9876543210');
INSERT INTO USERS(Userid,Username,FirstName,LastName,Mobile) VALUES ('sam@example.com', 'Sam','Sam' ,'Williams','9412345678');
INSERT INTO USERS(Userid,Username,FirstName,LastName,Mobile) VALUES ('seema@example.com', 'Seema','Seema','Brown','1512345678' );
INSERT INTO USERS(Userid,Username,FirstName,LastName,Mobile) VALUES ('reet@example.com', 'Reet','Reet','Sharma','9123456789');
INSERT INTO USERS(Userid,Username,FirstName,LastName,Mobile) VALUES ('geet@example.com', 'Geet','Geet','Patel','9988765432');
INSERT INTO USERS(Userid,Username,FirstName,LastName,Mobile) VALUES ('preet@example.com', 'Preet','Preet','Gupta','9876012345');
INSERT INTO USERS(Userid,Username,FirstName,LastName,Mobile) VALUES ('prem@example.com', 'Prem','Prem','Reddy','9302145678');
INSERT INTO USERS(Userid,Username,FirstName,LastName,Mobile) VALUES ('shivam@example.com', 'Shivam','Shivam','Iyer','7598012345' );
INSERT INTO USERS(Userid,Username,FirstName,LastName,Mobile) VALUES ('shushant@example.com', 'Shushant','Shushant','Sharma','8901234567' );
INSERT INTO USERS(Userid,Username,FirstName,LastName,Mobile) VALUES ('ashwin@example.com', 'Ashwin', 'Ashwin','Kumar','8765432109');


SELECT * FROM USERS;
