import app from './server';
import axios from 'axios';

const PORT = 3000;

// Função para testar as rotas
async function testarRotas() {
    try {
        // 1. Testar a rota de adicionar livro
        console.log('Testando adicionar livro...');
        const livro1 = {
            codigo: 1,
            titulo: 'O Senhor dos Anéis',
            autor: 'J.R.R. Tolkien',
            disponivel: true,
        };

        const livro2 = {
            codigo: 2,
            titulo: '1984',
            autor: 'George Orwell',
            disponivel: true,
        };

        await axios.post(`http://localhost:${PORT}/livros`, livro1);
        await axios.post(`http://localhost:${PORT}/livros`, livro2);
        console.log('Livros adicionados com sucesso.');

        // 2. Testar a rota de consultar disponibilidade
        console.log('Consultando disponibilidade de um livro...');
        const disponibilidade = await axios.get(`http://localhost:${PORT}/livros/1`);
        console.log('Disponibilidade do livro 1:', disponibilidade.data);

        // 3. Testar a rota de registrar empréstimo
        console.log('Registrando empréstimo do livro 1...');
        await axios.post(`http://localhost:${PORT}/emprestimos/1`);
        console.log('Empréstimo registrado com sucesso.');

        // 4. Consultar disponibilidade novamente
        console.log('Consultando disponibilidade novamente do livro 1...');
        const disponibilidadeAtualizada = await axios.get(`http://localhost:${PORT}/livros/1`);
        console.log('Disponibilidade do livro 1 após empréstimo:', disponibilidadeAtualizada.data);
    } catch (error) {
        console.error('Erro ao testar rotas');
    }
}

// Inicia o servidor e testa as rotas
app.listen(PORT, async () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    await testarRotas();
});
