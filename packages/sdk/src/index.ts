import { Usuario, Produto } from '@ts/types';

const API_URL = 'http://localhost:3001';

export const sdk = {
  getUsuario: async (): Promise<Usuario> => {
    const res = await fetch(`${API_URL}/usuario`);
    if (!res.ok) throw new Error('Erro ao buscar usuário');
    return res.json();
  },

  getProduto: async (): Promise<Produto> => {
    const res = await fetch(`${API_URL}/produto`);
    if (!res.ok) throw new Error('Erro ao buscar produto');
    return res.json();
  },
};
