import { describe, it, expect } from "vitest";
import { sdk } from ".";

describe("SDK", () => {
  it("deve retornar um usuário com nome", async () => {
    const usuario = await sdk.getUsuario();
    expect(usuario.nome).toBeDefined();
    expect(typeof usuario.nome).toBe("string");
  });

  it("deve retornar um produto com preço", async () => {
    const produto = await sdk.getProduto();
    expect(produto.preco).toBeGreaterThan(0);
  });
});