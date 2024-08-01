import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import HeroBanner from "../components/HeroBanner.jsx";
import Accordion from "../components/accordion.jsx";

export default function About() {
  return (
    <>
      <Header />
      <HeroBanner theme={"Mountain"} />
      <div>
        <Accordion
          title={"Fiabilité"}
          description={
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"
          }
        />
        <Accordion
          title={"Respect"}
          description={
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"
          }
        />
      </div>

      <Footer />
    </>
  );
}
