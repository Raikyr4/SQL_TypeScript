"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    constructor(codigo, titulo, autor, disponivel = true) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = disponivel;
    }
}
exports.Livro = Livro;
//# sourceMappingURL=Livro.js.map