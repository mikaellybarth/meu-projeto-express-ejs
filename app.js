const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


const produtos = [
  {id: 1, nome: "Ração Whiskas", preço: "R$179,90", descricao: "Ração Whiskas", imagem: "https://m.media-amazon.com/images/I/81IuLVVQq5L._AC_SY879_.jpg" },
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