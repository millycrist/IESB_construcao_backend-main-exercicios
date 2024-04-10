const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

let pessoas = [
  {
    id: 1,
    nome: 'João',
    idade: 20,
    email: 'joao@email.com',
    telefone: '61900010002'
  }
];

// Recuperar todas as pessoas existentes
app.get('/pessoas', (req, res) => {
  res.status(200).json(pessoas);
});

// Recuperar uma pessoa específica 
app.get('/pessoas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const pessoa = pessoas.find(p => p.id === id);
  if (!pessoa) {
    res.status(404).json({ message: 'Pessoa não encontrada' });
  } else {
    res.status(200).json(pessoa);
  }
});

// Adiciona
app.post('/pessoas', (req, res) => {
  const novaPessoa = req.body;
  if (!novaPessoa.nome || !novaPessoa.idade || !novaPessoa.email || !novaPessoa.telefone) {
    res.status(400).json({ message: 'Todos os atributos devem ser preenchidos' });
  } else {
    novaPessoa.id = pessoas.length + 1;
    pessoas.push(novaPessoa);
    res.status(201).json(novaPessoa);
  }
});

// Atualizar 
app.put('/pessoas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = pessoas.findIndex(p => p.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Pessoa não encontrada' });
  } else {
    const pessoaAtualizada = req.body;
    if (!pessoaAtualizada.nome || !pessoaAtualizada.idade || !pessoaAtualizada.email || !pessoaAtualizada.telefone) {
      res.status(400).json({ message: 'Todos os atributos devem ser preenchidos' });
    } else {
      pessoas[index] = { id, ...pessoaAtualizada };
      res.status(200).json(pessoas[index]);
    }
  }
});

// Remove
app.delete('/pessoas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = pessoas.findIndex(p => p.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Pessoa não encontrada' });
  } else {
    pessoas.splice(index, 1);
    res.status(204).send();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
