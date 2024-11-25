// src/livro.ts

export class Livro {
  codigo: number;
  titulo: string;
  autor: string;
  disponivel: boolean;

  constructor(codigo: number, titulo: string, autor: string, disponivel: boolean = true) {
    this.codigo = codigo;
    this.titulo = titulo;
    this.autor = autor;
    this.disponivel = disponivel;
  }
}
