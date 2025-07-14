import express from 'express';
import { Usuario, Produto } from '@ts/types';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/usuario', (_req, res) => {
  const usuario: Usuario = {
    id: 1,
    nome: 'Gabriel',
    email: 'gabriel@exemplo.com',
  };
  res.json(usuario);
});

app.get('/produto', (_req, res) => {
  const produto: Produto = {
    id: 42,
    nome: 'Teclado Mecânico',
    preco: 299.9,
  };
  res.json(produto);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
