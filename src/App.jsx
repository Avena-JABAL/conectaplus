import { Routes, Route } from "react-router-dom";
import Trilhas from "./pages/Trilhas";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Logoff from "./pages/Logoff";

const MeuEspaco = () => (
  <div className="p-10 text-center">Meu Espaço - Em desenvolvimento</div>
);
const Perfil = () => (
  <div className="p-10 text-center">Perfil - Em desenvolvimento</div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/trilhas" element={<Trilhas />} />
      <Route path="/meu-espaco" element={<MeuEspaco />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/logoff" element={<Logoff />} />
    </Routes>
  );
}

export default App;
