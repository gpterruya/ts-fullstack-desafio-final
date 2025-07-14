import { sdk } from '.';

(async () => {
  const usuario = await sdk.getUsuario();
  console.log('Usuário:', usuario);

  const produto = await sdk.getProduto();
  console.log('Produto:', produto);
})();
