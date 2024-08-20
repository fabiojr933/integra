const express = require('express');
const router = express.Router();
const Login = require('../model/login');

router.get('/', (req, res) => {
  res.render('login', { error: '' });
});

router.post('/autenticar', async (req, res) => {
  const login = new Login();
  const email = req.body.email;
  const senha = req.body.senha;
  const response = await login.Autenticar(senha, email);
  if (response.sucesso == 'ok') {
    req.session.empresa = response;
    res.redirect('/');
  } else {
    res.render('login', { error: 'Usuario ou senha invalido' });
  }
});

router.get('/sair', (req, res) => {
  // Destrói a sessão
  req.session.destroy(err => {
      if (err) {
          return res.redirect('/'); // Se houver erro ao destruir a sessão, redireciona de volta ao dashboard
      }
      res.clearCookie('connect.sid'); // Limpa o cookie de sessão
      res.redirect('/login'); // Redireciona para a página de login
  });
});

module.exports = router;
