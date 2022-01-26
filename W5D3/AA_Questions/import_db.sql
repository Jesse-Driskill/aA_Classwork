PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    fname TEXT NOT NULL,
    lname TEXT NOT NULL

);
DROP TABLE IF EXISTS questions;
CREATE TABLE questions (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    associated_author INTEGER NOT NULL,
    FOREIGN KEY (associated_author) REFERENCES users(id)
);

DROP TABLE IF EXISTS question_follows;
CREATE TABLE question_follows (
    id INTEGER PRIMARY KEY,
    users_id INTEGER NOT NULL,
    questions_id INTEGER NOT NULL
);

INSERT INTO 
    users(id, fname, lname)
VALUES 
    (1, "john", "smith");

INSERT INTO 
    questions(id, title, body, associated_author)
VALUES
    (1, "why?", "Do we ask questions?", 1);

