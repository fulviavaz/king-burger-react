import Atendimento from "components/Atendimento";
import Banner from "components/Banner";
import Cardapio from "components/Cardapio";
import Entregas from "components/Entregas";
import Footer from "components/Footer";
import Instagram from "components/Instagram";
import Map from "components/Map";
import NavMenu from "components/NavMenu";
// import Navbar from "components/Navbar";
import Ofertas from "components/Ofertas";
import Realeza from "components/Realeza";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <NavMenu />
      <Banner />
      <Ofertas />
      <Cardapio />
      <Atendimento />
      <Realeza />
      <Instagram />
      <Entregas />
      <Map />
      <Footer />
    </>
  );
}
