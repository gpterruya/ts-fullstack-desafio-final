#!/usr/bin/env tsx
import prompts from 'prompts';
import fs from 'fs';
import path from 'path';

(async () => {
  const { nome } = await prompts({
    type: 'text',
    name: 'nome',
    message: 'Qual o nome da nova rota?',
    validate: (value) => (value ? true : 'Informe um nome.'),
  });

  const routeFile = `${nome}.ts`;
  const routePath = path.resolve(process.cwd(), 'apps/backend/src', routeFile);

  const content = `import { Request, Response } from 'express';

export function ${nome}(req: Request, res: Response) {
  res.send("Rota ${nome} funcionando!");
}
`;

  fs.writeFileSync(routePath, content);
  console.log(`✅ Rota criada: apps/backend/src/${routeFile}`);
})();
