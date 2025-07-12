import { Request, Response } from 'express';

export function listarProdutos(req: Request, res: Response) {
  res.send("Rota listarProdutos funcionando!");
}
