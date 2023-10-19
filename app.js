const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


const produtos = [
  {id: 1, nome: "NOME DO PRODUTO", preço: "55,00", descricao: "descrição do produto", imagem: "imagem do produto ex produtos ejs" },
]

app.get('/produtos', (req, res) => {
  res.render('produtos', { message: 'Bem vindo a pagina produtos!' });
});

app.get('/produtos1', (req, res) => {
  res.render('produtos1', { message: 'Bem vindo a pagina produtos!' });
});

app.get('/produtos2', (req, res) => {
  res.render('produtos2', { message: 'Bem vindo a pagina produtos!' });
});

app.get('/', (req, res) => {
  res.render('index', { message: 'Produtos mikas!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});