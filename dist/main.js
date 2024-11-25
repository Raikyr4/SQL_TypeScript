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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const axios_1 = __importDefault(require("axios"));
const PORT = 3000;
function testarRotas() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
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
            yield axios_1.default.post(`http://localhost:${PORT}/livros`, livro1);
            yield axios_1.default.post(`http://localhost:${PORT}/livros`, livro2);
            console.log('Livros adicionados com sucesso.');
            console.log('Consultando disponibilidade de um livro...');
            const disponibilidade = yield axios_1.default.get(`http://localhost:${PORT}/livros/1`);
            console.log('Disponibilidade do livro 1:', disponibilidade.data);
            console.log('Registrando empréstimo do livro 1...');
            yield axios_1.default.post(`http://localhost:${PORT}/emprestimos/1`);
            console.log('Empréstimo registrado com sucesso.');
            console.log('Consultando disponibilidade novamente do livro 1...');
            const disponibilidadeAtualizada = yield axios_1.default.get(`http://localhost:${PORT}/livros/1`);
            console.log('Disponibilidade do livro 1 após empréstimo:', disponibilidadeAtualizada.data);
        }
        catch (error) {
            console.error('Erro ao testar rotas');
        }
    });
}
server_1.default.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Servidor rodando na porta ${PORT}`);
    yield testarRotas();
}));
//# sourceMappingURL=main.js.map