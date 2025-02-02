const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Aqui você pode validar os dados no banco de dados
  res.json({ message: `Login realizado com: ${email}` });
});

app.post('/cadastro', (req, res) => {
  const { name, email, password } = req.body;
  // Aqui você pode salvar os dados no banco de dados
  res.json({ message: `Cadastro realizado para: ${name} (${email})` });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
