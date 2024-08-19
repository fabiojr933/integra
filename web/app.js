const express = require('express');
const path = require('path');
const produtoRouter = require('./routes/produto');
const empresaRoute = require('./routes/empresa');
const loginRoute = require('./routes/login');
const subprodutoRouter = require('./routes/subproduto');
const telefoneRouter = require('./routes/telefone');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', loginRoute);
app.use('/empresa', empresaRoute);
app.use('/produto', produtoRouter);
app.use('/subproduto', subprodutoRouter);
app.use('/telefone', telefoneRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
