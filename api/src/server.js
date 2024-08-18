const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes/routes.js');
const PORT = process.env.PORT || 3333;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(cors());
app.use('/api/v1/', routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});