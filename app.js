const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


const produtos = [
  {id: 1, nome: "Ração p/ gato", preço: "55,00", descricao: "Ração whiskas", imagem: "produtos.webp" },
]

app.get('/produtos', (req, res) => {
  res.render('produtos', { message: 'Bem vindo a pagina produtos!' });
});

app.get('/', (req, res) => {
  res.render('index', { message: 'Produtos mikas!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});