CREATE TABLE livros (
    codigo SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    disponivel BOOLEAN NOT NULL
);

select * from livros
