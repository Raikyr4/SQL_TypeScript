# Sistema de Gerenciamento de Biblioteca

## Descrição

Este projeto é uma aplicação em TypeScript que permite gerenciar livros em uma biblioteca. O sistema inclui funcionalidades para:

- Cadastrar livros
- Registrar empréstimos
- Consultar a disponibilidade de livros

## Funcionalidades

- **Cadastro de Livros**: Permite adicionar novos livros ao acervo da biblioteca.
- **Registro de Empréstimos**: Permite registrar o empréstimo de livros específicos.
- **Consulta de Disponibilidade**: Permite verificar se um livro está disponível ou já foi emprestado.

## Estrutura do Projeto

- **Livro.ts**: Classe que define a estrutura de um livro, incluindo propriedades como código, título, autor e disponibilidade. O construtor inicializa todas as propriedades, e o parâmetro `disponivel` tem o valor padrão `true`.

- **Biblioteca.ts**: Classe que gerencia o acervo de livros. Possui métodos para adicionar livros, registrar empréstimos e consultar a disponibilidade de um livro. Inclui tratamento de erros para casos como livros inexistentes ou já emprestados, com mensagens apropriadas.

- **main.ts**: Script que contém funções de teste para simular o uso do sistema. A função `testarBiblioteca` cria instâncias de livros, adiciona-os ao acervo, registra empréstimos e consulta a disponibilidade, simulando o fluxo de uso do sistema.

## Explicação do Código

### Classe `Livro`

Define as propriedades do livro:

- `codigo`: Identificador único do livro.
- `titulo`: Título do livro.
- `autor`: Autor do livro.
- `disponivel`: Indica se o livro está disponível para empréstimo (valor padrão é `true`).

O construtor inicializa todas as propriedades do livro.

### Classe `Biblioteca`

Possui um acervo privado de livros e métodos para:

- **Adicionar Livros**: Adiciona novos livros ao acervo.
- **Registrar Empréstimos**: Registra o empréstimo de um livro específico, atualizando sua disponibilidade.
- **Consultar Disponibilidade**: Verifica se um livro está disponível para empréstimo.

Inclui tratamento de erros para:

- **Livros Inexistentes**: Informa quando um livro não é encontrado no acervo.
- **Livros Já Emprestados**: Informa quando um livro já foi emprestado.

### Funções de Teste

A função `testarBiblioteca` em `main.ts` simula o fluxo de uso do sistema:

- Cria instâncias de livros.
- Adiciona os livros ao acervo da biblioteca.
- Registra o empréstimo de um livro.
- Consulta a disponibilidade dos livros antes e após o empréstimo.

## Como Executar

1. **Pré-requisitos**: Certifique-se de ter o Node.js e o TypeScript instalados em sua máquina.

   Instale o TypeScript globalmente, se necessário:

   ```bash
   npm install -g typescript
   ```

2. **Compilar os Arquivos TypeScript**:

   Estando como o cmd aberto dentro da pasta *src* compile os arquivos TypeScript usando o comando:

   ```bash
   tsc
   ```

   Isso irá gerar os arquivos JavaScript correspondentes.

3. **Executar o Script Principal**:

   Estando com o cmd aberto dentro da pasta *dist* execute o arquivo compilado `main.js`:

   ```bash
   node main.js
   ```

## Testes Realizados

- **Cadastramento de Livros no Acervo**: Adição de novos livros ao sistema para formar o acervo inicial.
- **Registro de Empréstimo de um Livro Específico**: Registro do empréstimo de um livro existente no acervo.
- **Consulta de Disponibilidade de um Livro**: Verificação da disponibilidade de um livro antes e após o empréstimo.
- **Tratamento de Erros**: Verificações para garantir que não ocorram operações inválidas, como tentar emprestar um livro inexistente ou já emprestado, exibindo mensagens de erro apropriadas.

## Tratamento de Erros

O sistema inclui verificações para:

- **Livros Inexistentes**: Ao tentar registrar um empréstimo ou consultar a disponibilidade de um livro que não está no acervo, o sistema informa que o livro não foi encontrado.
- **Livros Já Emprestados**: Ao tentar emprestar um livro que já foi emprestado, o sistema informa que o livro não está disponível.