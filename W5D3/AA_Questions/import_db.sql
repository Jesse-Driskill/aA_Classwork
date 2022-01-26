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

DROP TABLE IF EXISTS replies;
CREATE TABLE replies (
    id INTEGER PRIMARY KEY,
    subject_question INTEGER NOT NULL, --TEXT, ref to question id, NOT NULL
    parent_reply INTEGER, -- Refs to previous reply's id
    question_writer INTEGER NOT NULL,-- user_id, NOT NULL
    FOREIGN KEY (question_writer) REFERENCES users(id),
    FOREIGN KEY (subject_question) REFERENCES questions(id),
    FOREIGN KEY (parent_reply) REFERENCES replies(id)
);

DROP TABLE IF EXISTS question_likes;
CREATE TABLE  question_likes (
    like_question -- Ref to question id
    like_user -- Ref to user
    count_likes -- number of users who liked the question
);

INSERT INTO 
    users(id, fname, lname)
VALUES 
    (1, "john", "smith");

INSERT INTO 
    questions(id, title, body, associated_author)
VALUES
    (1, "why?", "Do we ask questions?", 1);

