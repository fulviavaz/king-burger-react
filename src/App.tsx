import "./App.css";
import Ofertas from "components/Ofertas";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Map from "components/Map";
import Footer from "components/Footer";
import Cardapio from "components/Cardapio";
import Atendimento from "components/Atendimento";
import Entregas from "components/Entregas";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Ofertas />
      <Cardapio />
      <Atendimento />
      <Entregas />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
