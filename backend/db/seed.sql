DROP TABLE IF EXISTS posts;


CREATE TABLE posts (
    id serial PRIMARY KEY,
    title varchar(30) NOT NULL,
    alias varchar(30) NOT NULL, 
    body varchar(500) NOT NULL
);

INSERT INTO posts (title, alias, body) VALUES 
(
    'welcome',
    'geo',
    'welcome to our blog'
),
(
    'enjoy posting',
    'mugisha',
    'good luck posting something'
);