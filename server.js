const express = require('express');
// import {express} from 'express';
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

const db = new sqlite3.Database('./boxino.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the boxino database.');
  }
});

db.run(`CREATE TABLE IF NOT EXISTS usuario (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  pontos INTEGER
)`);

// Rota para adicionar usuário e pontos
app.post('/add-user', (req, res) => {
  const { nome, pontos } = req.body;
  
  console.log("pontos recebidos:" + pontos);
  console.log("nome recebidos:" + nome);

  db.run(`INSERT INTO usuario (nome, pontos) VALUES (?, ?)`, [nome, pontos], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ id: this.lastID });
  });
});

// Rota para obter todos os usuários
app.get('/get-users', (req, res) => {
  db.all(`SELECT * FROM usuario`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(rows);
  });
});

// Delete
// db.run('DELETE FROM usuario', function(err) {
//   if (err) {
//       return console.error(err.message);
//   }
//   console.log(`Todos os registros foram deletados da tabela.`);
// });

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
