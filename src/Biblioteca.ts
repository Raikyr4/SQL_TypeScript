import { Pool } from 'pg';
import { Livro } from './Livro';

const pool = new Pool({
    user: 'postgres', // Substitua pelo seu usuário do PostgreSQL
    host: 'localhost',
    database: 'postgres',
    password: '12345', // Substitua pela sua senha do PostgreSQL
    port: 5432,
});

export class Biblioteca {
    private acervo: Livro[] = [];

    async adicionarLivro(livro: Livro): Promise<void> {
        this.acervo.push(livro);
        const query = `INSERT INTO livros (codigo, titulo, autor, disponivel) VALUES ($1, $2, $3, $4)`;
        await pool.query(query, [livro.codigo, livro.titulo, livro.autor, livro.disponivel]);
    }

    async registrarEmprestimo(codigo: number): Promise<void> {
        const query = `UPDATE livros SET disponivel = false WHERE codigo = $1`;
        const res = await pool.query(query, [codigo]);
        if (res.rowCount === 0) {
            throw new Error('Livro não encontrado ou já emprestado.');
        }
    }

    async consultarDisponibilidade(codigo: number): Promise<boolean> {
        const query = `SELECT disponivel FROM livros WHERE codigo = $1`;
        const res = await pool.query(query, [codigo]);
        if (res.rows.length === 0) {
            throw new Error('Livro não encontrado.');
        }
        return res.rows[0].disponivel;
    }
}
