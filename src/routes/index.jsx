import Header from "../components/Header.jsx";
import HeroBanner from "../components/HeroBanner.jsx";
import Footer from "../components/Footer.jsx";
import Cards from "../components/Cards.jsx";
import { css } from "../../styled-system/css";

export default function Index() {
  return (
    <div className={css({ minH: "100vh" })}>
      <Header />
      <HeroBanner
        textTitle={"Chez vous, partout et ailleurs"}
        theme={"Forest"}
      />
      <div
        className={css({
          pb: "50px",
          pt: "50px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          gap: 10,
          px: "20px",
        })}
      >
        <div
          className={css({
            maxWidth: "1240px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 10,
            py: "55px",
            bgColor: "#F6F6F6",
            rounded: "2xl",
            "@media (max-width: 760px)": {
              bgColor: "white",
              py: 0,
            },
          })}
        >
          <Cards />
        </div>
      </div>
      <Footer />
    </div>
  );
}
