
# Upload Images

Um projeto simples, feito na base de prática e estudo sobre o funcionamento de uploads de imagens de uma aplicação **WEB** para **API**.

Este projeto tem como único objetivo a funcionalidade, como citado a cima, fazer upload de imagens e pernamencerem salvas nos dados da aplicação, utilizando o serviço **S3** da plataforma **aws**.

## Demonstração

Fazendo upload
![Uploading](https://i.imgur.com/jjNb44U.gif)

Interagindo com as imagens
![Interacting](https://i.imgur.com/XpA9LxT.gif)

Upload de arquivo que ultrapassa um limite pré definido
![Failed](https://i.imgur.com/0fmLpVz.gif)


## Stack utilizada

### Fronte-end
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [React Dropzone](https://react-dropzone.js.org/)
- [Styled Components](https://styled-components.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Radix Tooltip Component](https://www.radix-ui.com/docs/primitives/components/tooltip)

### Back-end
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Multer](https://www.npmjs.com/package/multer)
- [Multer-S3](https://www.npmjs.com/package/multer-s3)
- [Typescript](https://www.typescriptlang.org/)
- [MongoDB/Mongoose](https://mongoosejs.com/)
- [AWS-SDK](https://aws.amazon.com/pt/sdk-for-javascript/)

## Funcionalidades

- Upload de imagens no serviço S3 da AWS
- Disponível apenas para arquivos do tipo imagem
- Feedback para limite de quantidade de arquivos a ser enviados
- Feedback para limite de tamanho de arquivos
- Compartilhamento de imagem por link (direto do endereço de upload)
- Remoção das imagens (também é removido do S3)
- Status sobre o uploading


## Instalação

Clone o projeto na sua máquina

```bash
    # Modo tradicional 
    git clone https://github.com/Felipstein/upload-images-web.git
```
```bash
    # Com GitHub CLI
    gh repo clone Felipstein/upload-images-web
```

Navegue até o repositório local
```bash
    cd upload-images-web
```

Instale as dependências
```bash
    # Com npm
    npm i
```
```bash
    # Com yarn
    yarn
```

- Certifica-se de criar, para o backend, o arquivo `.env`, com as variáveis baseadas pelo `.env.example`.
- Lembre-se de rodar algum banco de dados com MongoDB! Você pode usar tanto o Mongo Atlas quanto rodar localmente, basta inserir qual o URI/URL para conectar com seu banco na variável `DB_CONNECTION=` em `.env`.
- Caso até opte não querer usar o serviço S3 da AWS, você também pode armazenar as imagens localmente no diretório do api. Basta, em `.env`, deixar a variável `STORAGE_TYPE=` como `local`.


## Rodando localmente

Navegue até o repositório do servidor
```bash
    cd api
```

Inicie o servidor
```bash
    # Com npm
    npm start
```
```bash
    # Com yarn
    yarn start
```

Entre no link que tenha inserido na variável `APP_URL=` e `PORT=` no seu navegador. Por exemplo:
- Se `APP_URL=http://localhost` e `PORT=3333`
- Então navegue para`http://localhost:3333`
## Referência

 - [Medium](https://medium.com/swlh/how-to-upload-image-using-multer-in-node-js-f3aeffb90657)
 - [Rocketseat](https://blog.rocketseat.com.br/upload-de-imagens-no-s3-da-aws-com-node-js/)
 - [Rocketseat/Back](https://www.youtube.com/watch?v=MkkbUfcZUZM)
 - [Rocketseat/Front](https://www.youtube.com/watch?v=G5UZmvkLWSQ)

