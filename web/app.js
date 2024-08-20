const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const produtoRouter = require('./routes/produto');
const empresaRoute = require('./routes/empresa');
const loginRoute = require('./routes/login');
const subprodutoRouter = require('./routes/subproduto');
const telefoneRouter = require('./routes/telefone');
const indexRouter = require('./routes/index');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(session({
  secret: 'seu-segredo-aqui',  // Chave usada para assinar o ID da sessão
  resave: false,               // Não salva a sessão novamente se ela não foi modificada
  saveUninitialized: true,     // Salva a sessão nova, mesmo se ela estiver vazia
  //  cookie: { maxAge: 900000 }    // Define o tempo de expiração do cookie de sessão (em milissegundos)
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(cors());

app.use('/', indexRouter);
app.use('/login', loginRoute);
app.use('/empresa', empresaRoute);
app.use('/produto', produtoRouter);
app.use('/subproduto', subprodutoRouter);
app.use('/telefone', telefoneRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
