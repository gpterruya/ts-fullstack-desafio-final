import { useEffect, useState } from "react";
import { sdk } from "@ts/sdk";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [produto, setProduto] = useState("");

  useEffect(() => {
    sdk.getUsuario().then((u) => setNomeUsuario(u.nome));
    sdk.getProduto().then((p) => setProduto(p.nome));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Olá, {nomeUsuario || "carregando..."}!</h1>
      <h2>Produto em destaque: {produto || "carregando..."}</h2>
    </div>
  );
}

export default App;