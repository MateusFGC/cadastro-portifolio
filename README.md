# Cadastro de Portfólio

Um projeto simples de cadastro para um portfólio, desenvolvido com o objetivo de aplicar e aprofundar os conhecimentos em React. A aplicação permite a criação, listagem e exclusão de perfis de pessoas desenvolvedoras, exibindo suas principais informações e tecnologias.

## 🚀 Visão Geral

Este projeto foi criado como parte do meu aprendizado em React, utilizando ferramentas modernas do ecossistema JavaScript, como Vite, React Router DOM para navegação e Styled Components para a estilização. A aplicação consiste em um formulário de cadastro, onde o usuário pode inserir informações como nome, e-mail, tecnologias e um link para o avatar. Os dados cadastrados são exibidos em uma lista de perfis.

## ✨ Funcionalidades

* **Cadastro de Desenvolvedores:** Formulário para adicionar novos perfis ao portfólio.
* **Listagem de Perfis:** Visualização de todos os perfis cadastrados em formato de cards.
* **Exclusão de Perfis:** Funcionalidade para remover um perfil da listagem.
* **Navegação entre Páginas:** Utilização de rotas para separar a página de cadastro da página de portfólio.

## 💻 Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

* **[React](https://react.dev/)**: Biblioteca para construção de interfaces de usuário.
* **[Vite](https://vitejs.dev/)**: Ferramenta de build moderna e rápida para desenvolvimento front-end.
* **[React Router DOM](https://reactrouter.com/en/main)**: Para gerenciamento de rotas na aplicação.
* **[Styled Components](https://styled-components.com/)**: Para estilização dos componentes de forma escopada e reutilizável.
* **[ESLint](https://eslint.org/)**: Para linting e manutenção da qualidade do código.

## 📂 Estrutura do Projeto

O projeto está estruturado da seguinte forma:

cadastro-portifolio/

├── public/                                      
├── src/                                     
│   ├── components/                                     
│   │   ├── Button/                                     
│   │   ├── Footer/                                     
│   │   ├── Header/                                     
│   │   ├── Input/                                     
│   │   └── Title/                                     
│   ├── pages/                                     
│   │   ├── Home/                                     
│   │   └── Portifolio/                                     
│   ├── styles/                                     
│   │   └── global.js                                     
│   ├── App.jsx                                     
│   ├── main.jsx                                     
│   └── routes.jsx                                     
├── .eslintrc.cjs                                     
├── .gitignore                                     
├── index.html                                     
└── package.json                                     

## ✅ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
* [Node.js](https://nodejs.org/en/)
* Um gerenciador de pacotes como [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

## 🚀 Rodando o Projeto

Siga os passos abaixo para executar o projeto localmente:

1.  **Clone o repositório:**

    ```bash
    git clone [https://github.com/MateusFGC/cadastro-portifolio.git](https://github.com/MateusFGC/cadastro-portifolio.git)
    ```

2.  **Acesse a pasta do projeto:**

    ```bash
    cd cadastro-portifolio
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

    ou

    ```bash
    yarn
    ```

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

    ou

    ```bash
    yarn dev
    ```

5.  **Acesse a aplicação em seu navegador:**

    Abra [http://localhost:8080](http://localhost:8080) (ou a porta indicada no seu terminal) para visualizar o projeto.

## 📝 Aprendizados

Este projeto foi fundamental para solidificar meus conhecimentos em:

* Criação e componentização no React.
* Gerenciamento de estado com `useState`.
* Configuração de rotas com React Router DOM.
* Estilização com Styled Components, incluindo a criação de componentes de estilo reutilizáveis.
* Estruturação de um projeto React com Vite.
