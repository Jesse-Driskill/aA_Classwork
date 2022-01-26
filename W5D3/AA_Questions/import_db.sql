CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    fname TEXT NOT NULL,
    lname TEXT NOT NULL

);

CREATE TABLE questions (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    associated_author
    FOREIGN KEY (associated_author) REFERENCES (users(id))
);

CREATE TABLE question_follows (
    id INTEGER PRIMARY KEY.
    users_id
    questions_id
);
