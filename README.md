# Coletivo Enegrecer
[![Build Status](https://travis-ci.org/Enegrecer/enegrecer-web.svg?branch=master)](https://travis-ci.org/Enegrecer/enegrecer-web)

### Neste Wiki
* [O Projeto](#o-projeto)
* [Configurações](#configurações)
  * [Rodando o projeto](#rodando-o-projeto)
  * [Testes](#testes)
  * [Lint](#lint)
  * [Build](#build)
* [Deploy](#deploy)
* [Tech Stack](#tech-stack)

## O Projeto

O coletivo nacional de Juventude Enegrecer é uma expressão do movimento social negro que luta contra as opressões da sociedade em favor da juventude negra. O projeto se propõe como uma plataforma para registrar denúncias de crimes raciais, a fim de se coletar dados para embasar e guiar ações e políticas antirracismo.

O Web App implementado neste respositório é uma das interfaces para essa plataforma, onde o usuário pode se informar mais a respeito e relatar um crime. As denúncias, ou relatos podem ser anônimos, mas é oferecido ao usuário a possibilidade de se identificar, podendo este se cadastrar como usuário da plataforma.

## Configurações

Primeiro clone o repositório
```shell
git clone https://github.com/Enegrecer/enegrecer-web.git
```

em seguida entre na pasta do projeto clonado e rode `npm install` para baixar todas as dependencias
```shell
cd enegrecer-web
npm install
```

### Rodando o projeto

Para subir um servidor local para desenvolvimento rode 

```shell
npm start
```

Isso irá subir um servidor com o aplicativo rodando em `http://localhost:3000`. Quando os arquivos dentro de `src` são alterados, automaticamente o código é recompilado e o aplicativo recarregado com as alterações.

### Testes

O projeto está configurado para que o desenvolvimento seja feito em TDD, e assim o script:

```shell
npm test
```

irá rodar todos os arquivos de teste (arquivos __.test.js__) e entrar em modo de _watch_. De forma que toda vez que arquivos são alterados, sejam eles testes ou não, os testes que possuem qualquer relação com tal arquivo são executados novamente. 

Por exemplo, se o componente __Signin__ for alterado, todos os testes de _Signin.test.js_ serão executados, mas também os testes de _Login.test.js_, pois o componente de __Login__ utiliza, ou depende, do componete de __Signin__, e assim por diante. O mesmo é válido para alterações em arquivos de teste. 

O projeto está utilizando o [Jest](https://facebook.github.io/jest/) como framework de testes. O jest oferece praticamente tudo que é necessário para testes no projeto, definindo a sintaxe de escrita dos mesmos, provendo mocks, e atuando como test runner. Adicionalmente, o [enzyme](http://airbnb.io/enzyme/) é utilizado como facilitador dos testes de componentes do React.

### Lint

O [eslint](http://eslint.org/) é utilizado como linter do projeto. É recomendado que um plugin do mesmo seja utilizado em seu editor de preferência durante o desenvolvimento. Além disso é possível executar o lint de todo o projeto rodando o comando:

```shell
npm run lint
```

E existe também o modo de watch que pode ser rodado com:

```shell
npm run watch:lint
```

### Build

O comando

```shell
npm run build
```

roda o script de build, responsável por preparar o projeto para um deploy em produção. Os arquivos passam por um processo de minificação e bundling. Gerando arquivos mais concisos, e mais leves. Todo o resultado do script aparece na pasta build que será gerada dentro do projeto.

## Deploy

Atualmente o projeto está rodando em [https://enegrecer-e37b3.firebaseapp.com/](https://enegrecer-e37b3.firebaseapp.com/), sendo o Firebase o host e também responsável pelo controle de usuários e banco de dados da aplicação. A atualização ocorre automaticamente através do [Travis-CI](https://travis-ci.org/Enegrecer/enegrecer-web), que monitora por modificações na branch master deste repositório, e executa passos de lint, testes e deploy para o Firebase.

## Tech stack

Na nossa stack temos:
* [React](https://facebook.github.io/react/) para criação do UI em componentes 
* [Babel](https://babeljs.io/) como transpilador que permite que tais componentes sejam escritos utilizando [ES8](http://www.ecma-international.org/ecma-262/8.0/index.html).
* [Webpack](https://webpack.github.io/) para servidor local de desenvolvimento, compilação, e bundling do código
* [Jest](https://facebook.github.io/jest/) como framework de testes
* [Enzyme](http://airbnb.io/enzyme/) para auxiliar nos testes
* [Eslint](http://eslint.org/) como ferramenta de linter
* [Firebase](https://firebase.google.com/) Como hosting e back-end mantendo controle de dados, usuários, etc
* [Travis-CI](https://travis-ci.org/) para criar nosso CI, executar testes e build automaticamente
