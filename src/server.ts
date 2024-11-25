import express from 'express';
import bodyParser from 'body-parser';
import { Biblioteca } from './Biblioteca';
import { Livro } from './Livro';

const app = express();
app.use(bodyParser.json());

const biblioteca = new Biblioteca();

// Rota para adicionar um livro
app.post('/livros', async (req, res) => {
    try {
        const { codigo, titulo, autor, disponivel } = req.body;
        const livro = new Livro(codigo, titulo, autor, disponivel);
        await biblioteca.adicionarLivro(livro);
        res.status(201).send('Livro adicionado com sucesso.');
    } catch (error) {
        res.status(500).send("erro ao adicionar livro");
    }
});

// Rota para registrar empréstimo
app.post('/emprestimos/:codigo', async (req, res) => {
    try {
        const codigo = parseInt(req.params.codigo, 10);
        await biblioteca.registrarEmprestimo(codigo);
        res.status(200).send('Empréstimo registrado com sucesso.');
    } catch (error) {
        res.status(500).send("erro ao realizar emprestimo");
    }
});

// Rota para consultar disponibilidade
app.get('/livros/:codigo', async (req, res) => {
    try {
        const codigo = parseInt(req.params.codigo, 10);
        const disponivel = await biblioteca.consultarDisponibilidade(codigo);
        res.status(200).json({ disponivel });
    } catch (error) {
        res.status(500).send("erro ao consultar disponibilidade");
    }
});

export default app;
