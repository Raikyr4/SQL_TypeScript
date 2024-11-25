"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '12345',
    port: 5432,
});
class Biblioteca {
    constructor() {
        this.acervo = [];
    }
    adicionarLivro(livro) {
        return __awaiter(this, void 0, void 0, function* () {
            this.acervo.push(livro);
            const query = `INSERT INTO livros (codigo, titulo, autor, disponivel) VALUES ($1, $2, $3, $4)`;
            yield pool.query(query, [livro.codigo, livro.titulo, livro.autor, livro.disponivel]);
        });
    }
    registrarEmprestimo(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `UPDATE livros SET disponivel = false WHERE codigo = $1`;
            const res = yield pool.query(query, [codigo]);
            if (res.rowCount === 0) {
                throw new Error('Livro não encontrado ou já emprestado.');
            }
        });
    }
    consultarDisponibilidade(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `SELECT disponivel FROM livros WHERE codigo = $1`;
            const res = yield pool.query(query, [codigo]);
            if (res.rows.length === 0) {
                throw new Error('Livro não encontrado.');
            }
            return res.rows[0].disponivel;
        });
    }
}
exports.Biblioteca = Biblioteca;
//# sourceMappingURL=Biblioteca.js.map