import Header from "../components/Header.jsx";
import HeroBanner from "../components/HeroBanner.jsx";
import Footer from "../components/Footer.jsx";

export default function Index() {
  return (
    <>
      <Header />
      <HeroBanner
        textTitle={"Chez vous, partout et ailleurs"}
        theme={"Forest"}
      />
      <Footer />
    </>
  );
}
