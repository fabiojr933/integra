const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const produtoRoute = require('./routes/produto');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/produto', produtoRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
