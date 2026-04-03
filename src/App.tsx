import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <Modal title="Vicente Dev" labelButton={"Condordo"} showModal={true}>
        {/* O conteúdo dentro do Modal é passado como 'children'. */}
        <p className="text-base leading-relaxed text-gray-600">
          <strong>Atenção:</strong> Este é um site de demonstração desenvolvido
          exclusivamente para fins de portfólio.
        </p>
        <p className="text-base leading-relaxed text-gray-600">
          Todas as informações, produtos e dados são puramente demonstativos
          e/ou fictícios. Nenhuma compra, cadastro ou interação realizada aqui
          terá efeito no mundo real.
        </p>
        <p className="text-base font-medium leading-relaxed text-gray-600">
          Obs: Ainda em desenvolvimento.
        </p>
      </Modal>
    </>
  );
}

export default App;
