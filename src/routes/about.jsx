import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import HeroBanner from "../components/HeroBanner.jsx";
import Accordion from "../components/accordion.jsx";
import { css } from "../../styled-system/css";

export default function About() {
  const accordion = {
    display: "flex",
    flexDir: "column",
    gap: "30px",
    pt: "30px",
    justifyContent: "center",
    maxWidth: "1000px",
    width: "100%",
    "@media (max-width:640px)": {
      gap: "15px",
    },
  };

  const accordionLayout = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    "@media (max-width:1240px)": {
      px: "20px",
    },
  };
  return (
    <>
      <Header />
      <HeroBanner theme={"Mountain"} />
      <div className={css(accordionLayout)}>
        <div className={css(accordion)}>
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
          <Accordion
            title={"Service"}
            description={
              "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"
            }
          />
          <Accordion
            title={"Sécurité"}
            description={
              "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes"
            }
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
