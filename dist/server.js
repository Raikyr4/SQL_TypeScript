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
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const Biblioteca_1 = require("./Biblioteca");
const Livro_1 = require("./Livro");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const biblioteca = new Biblioteca_1.Biblioteca();
app.post('/livros', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { codigo, titulo, autor, disponivel } = req.body;
        const livro = new Livro_1.Livro(codigo, titulo, autor, disponivel);
        yield biblioteca.adicionarLivro(livro);
        res.status(201).send('Livro adicionado com sucesso.');
    }
    catch (error) {
        res.status(500).send("erro ao adicionar livro");
    }
}));
app.post('/emprestimos/:codigo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const codigo = parseInt(req.params.codigo, 10);
        yield biblioteca.registrarEmprestimo(codigo);
        res.status(200).send('Empréstimo registrado com sucesso.');
    }
    catch (error) {
        res.status(500).send("erro ao realizar emprestimo");
    }
}));
app.get('/livros/:codigo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const codigo = parseInt(req.params.codigo, 10);
        const disponivel = yield biblioteca.consultarDisponibilidade(codigo);
        res.status(200).json({ disponivel });
    }
    catch (error) {
        res.status(500).send("erro ao consultar disponibilidade");
    }
}));
exports.default = app;
//# sourceMappingURL=server.js.map