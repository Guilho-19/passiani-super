// Arquivo principal de scripts
console.log("Sistema Gerente Passiani iniciado com sucesso.");

import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <div>
      <h1>Meu Site</h1>
      <Analytics /> {/* Adicione esta linha */}
    </div>
  );
}