const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


const produtos = [
  {id: 1, nome: "Ração Whiskas", preco: "R$179,90", descricao: "Ração Premium 100% completa e balanceada para gatos adultos.Receita sem corantes artificiais. Taurina, vitaminas e minerais para os melhores cuidados.Minerais controlados para ajudar a manter um trato urinário saudável. Ômega 6 e Zinco para ajudar a manter pele e pelo do seu gato saudáveis.Com Vitamina A para saúde da visão do seu gatinho.", imagem: "imagem1.jpg" },
  {id: 2, nome: "Ração Gran PLus", preco: "R$209,90", descricao: "Ração Premium 100% completa e balanceada para gatos adultos.Receita sem corantes artificiais. Taurina, vitaminas e minerais para os melhores cuidados.Minerais controlados para ajudar a manter um trato urinário saudável. Ômega 6 e Zinco para ajudar a manter pele e pelo do seu gato saudáveis.Com Vitamina A para saúde da visão do seu gatinho.", imagem: "imagem2.jpg" },
  {id: 3, nome: "Ração Friskies", preco: "R$189,90", descricao: "Ração Premium 100% completa e balanceada para gatos adultos.Receita sem corantes artificiais. Taurina, vitaminas e minerais para os melhores cuidados.Minerais controlados para ajudar a manter um trato urinário saudável. Ômega 6 e Zinco para ajudar a manter pele e pelo do seu gato saudáveis.Com Vitamina A para saúde da visão do seu gatinho.", imagem: "imagem3.jpg" },
  {id: 4, nome: "Ração Royal", preco: "R$190,90", descricao: "Ração Premium 100% completa e balanceada para gatos adultos.Receita sem corantes artificiais. Taurina, vitaminas e minerais para os melhores cuidados.Minerais controlados para ajudar a manter um trato urinário saudável. Ômega 6 e Zinco para ajudar a manter pele e pelo do seu gato saudáveis.Com Vitamina A para saúde da visão do seu gatinho.", imagem: "imagem4.jpg" },
  {id: 5, nome: "Ração Golden", preco: "R$306,90", descricao: "Ração Premium 100% completa e balanceada para gatos adultos.Receita sem corantes artificiais. Taurina, vitaminas e minerais para os melhores cuidados.Minerais controlados para ajudar a manter um trato urinário saudável. Ômega 6 e Zinco para ajudar a manter pele e pelo do seu gato saudáveis.Com Vitamina A para saúde da visão do seu gatinho.", imagem: "imagem5.jpg" },
  {id: 6, nome: "Ração Catsy", preco: "R$186,90", descricao: "Ração Premium 100% completa e balanceada para gatos adultos.Receita sem corantes artificiais. Taurina, vitaminas e minerais para os melhores cuidados.Minerais controlados para ajudar a manter um trato urinário saudável. Ômega 6 e Zinco para ajudar a manter pele e pelo do seu gato saudáveis.Com Vitamina A para saúde da visão do seu gatinho.", imagem: "imagem6.jpg" },
  {id: 7, nome: "Ração Pro plan", preco: "R$350,90", descricao: "Ração Premium 100% completa e balanceada para gatos adultos.Receita sem corantes artificiais. Taurina, vitaminas e minerais para os melhores cuidados.Minerais controlados para ajudar a manter um trato urinário saudável. Ômega 6 e Zinco para ajudar a manter pele e pelo do seu gato saudáveis.Com Vitamina A para saúde da visão do seu gatinho.", imagem: "imagem7dog.jpg" },
  {id: 8, nome: "Ração Golden Especial", preco: "R$249,90", descricao: "Ração Premium 100% completa e balanceada para gatos adultos.Receita sem corantes artificiais. Taurina, vitaminas e minerais para os melhores cuidados.Minerais controlados para ajudar a manter um trato urinário saudável. Ômega 6 e Zinco para ajudar a manter pele e pelo do seu gato saudáveis.Com Vitamina A para saúde da visão do seu gatinho.", imagem: "imagem8.jpg" },
  {id: 9, nome: "Ração PremieR", preco: "R$180,90", descricao: "Ração Premium 100% completa e balanceada para gatos adultos.Receita sem corantes artificiais. Taurina, vitaminas e minerais para os melhores cuidados.Minerais controlados para ajudar a manter um trato urinário saudável. Ômega 6 e Zinco para ajudar a manter pele e pelo do seu gato saudáveis.Com Vitamina A para saúde da visão do seu gatinho.", imagem: "imagem9.jpg" },
  {id: 10, nome: "Ração Pedegree", preco: "R$209,90", descricao: "Ração Premium 100% completa e balanceada para gatos adultos.Receita sem corantes artificiais. Taurina, vitaminas e minerais para os melhores cuidados.Minerais controlados para ajudar a manter um trato urinário saudável. Ômega 6 e Zinco para ajudar a manter pele e pelo do seu gato saudáveis.Com Vitamina A para saúde da visão do seu gatinho.", imagem: "imagem10.jpg" },
]

function buscarProdutoPorID(id){
  const produto = produtos.find (produto => produto.id == id);
  return produto || null 

}

app.get('/produtos/:id', (req, res) => {
  const produto = buscarProdutoPorID(req.params.id)
  res.render('produtos', { produto});
});

app.get('/', (req, res) => {
  res.render('index', { produtos});
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});