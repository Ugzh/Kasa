import Header from "../components/Header.jsx";
import HeroBanner from "../components/HeroBanner.jsx";
import Footer from "../components/Footer.jsx";
import Cards from "../components/Cards.jsx";
import { css } from "../../styled-system/css";

export default function Index() {
  return (
    <div className={css({ position: "relative", minH: "100vh" })}>
      <Header />
      <HeroBanner
        textTitle={"Chez vous, partout et ailleurs"}
        theme={"Forest"}
      />
      <div className={css({ pb: "250px" })}>
        <Cards />
      </div>
      <Footer />
    </div>
  );
}
