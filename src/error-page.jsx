import { Link } from "react-router-dom";
import Header from "./components/Header.jsx";
import { css } from "../styled-system/css";
import Footer from "./components/Footer.jsx";

export default function ErrorPage() {
  const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    gap: "139px",
    "@media (max-width:640px)": {
      gap: "113px",
    },
    "@media (max-width:1240px)": {
      px: "20px",
    },
  };

  const titleStyle = {
    color: "#FF6060",
    fontSize: "18rem",
    height: "100%",
    lineHeight: "100%",
    fontWeight: "bold",
    "@media (max-width:640px)": {
      fontSize: "6rem",
      pt: "50px",
    },
  };

  const subTitleStyle = {
    color: "#FF6060",
    fontSize: "2.25rem",
    fontWeight: "500",
    "@media (max-width:640px)": {
      fontSize: "1.125rem",
    },
  };

  const navLink = {
    fontWeight: "500",
    textDecoration: "underline",
    fontSize: "1.125rem",
    "@media (max-width:640px)": {
      fontSize: "0.875rem",
    },
  };
  return (
    <div
      className={css({
        minH: "100vh",
        display: "flex",
        flexDirection: "column",
      })}
    >
      <Header />
      <div
        className={css({
          display: "flex",
          flexDir: "column",
          flex: 1,
        })}
      >
        <div className={css(layoutStyle)}>
          <h1 className={css(titleStyle)}>404</h1>
          <p className={css(subTitleStyle)}>
            {"Oups! La page que vous demandez n'existe pas."}
          </p>
          <Link to="/" className={css(navLink)}>
            {"Retourner sur la page d'accueil"}
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
