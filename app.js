const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


const produtos = [
  {id: 1, nome: "Ração Whiskas", preço: "R$179,90", descricao: "Ração Premium 100% completa e balanceada para gatos adultos.", imagem: "https://m.media-amazon.com/images/I/81IuLVVQq5L._AC_SY879_.jpg" },
  {id: 2, nome: "Ração Whiskas", preço: "R$179,90", descricao: "Ração Premium 100% completa e balanceada para gatos adultos.", imagem: "https://m.media-amazon.com/images/I/81IuLVVQq5L._AC_SY879_.jpg" },
  {id: 3, nome: "Ração Whiskas", preço: "R$179,90", descricao: "Ração Premium 100% completa e balanceada para gatos adultos.", imagem: "https://m.media-amazon.com/images/I/81IuLVVQq5L._AC_SY879_.jpg" },
  {id: 4, nome: "Ração Whiskas", preço: "R$179,90", descricao: "Ração Premium 100% completa e balanceada para gatos adultos.", imagem: "https://m.media-amazon.com/images/I/81IuLVVQq5L._AC_SY879_.jpg" },
  {id: 5, nome: "Ração Whiskas", preço: "R$179,90", descricao: "Ração Premium 100% completa e balanceada para gatos adultos.", imagem: "https://m.media-amazon.com/images/I/81IuLVVQq5L._AC_SY879_.jpg" },
  {id: 6, nome: "Ração Whiskas", preço: "R$179,90", descricao: "Ração Premium 100% completa e balanceada para gatos adultos.", imagem: "https://m.media-amazon.com/images/I/81IuLVVQq5L._AC_SY879_.jpg" },
  {id: 7, nome: "Ração Whiskas", preço: "R$179,90", descricao: "Ração Premium 100% completa e balanceada para gatos adultos.", imagem: "https://m.media-amazon.com/images/I/81IuLVVQq5L._AC_SY879_.jpg" },
  {id: 8, nome: "Ração Whiskas", preço: "R$179,90", descricao: "Ração Premium 100% completa e balanceada para gatos adultos.", imagem: "https://m.media-amazon.com/images/I/81IuLVVQq5L._AC_SY879_.jpg" },
  {id: 9, nome: "Ração Whiskas", preço: "R$179,90", descricao: "Ração Premium 100% completa e balanceada para gatos adultos.", imagem: "https://m.media-amazon.com/images/I/81IuLVVQq5L._AC_SY879_.jpg" },
]

function buscarProdutoPorID(){
  const produto = produtos.find (produto => produto.id == 3);
  return produto || null 

}

app.get('/produtos', (req, res) => {
  res.render('produtos', { message: 'Bem vindo a pagina produtos!' });
});

app.get('/', (req, res) => {
  res.render('index', { message: 'Produtos mikas!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});