import Logo from "/src/assets/Kasa_logo.svg";
import { Link } from "react-router-dom";
import { css } from "../../styled-system/css";

export default function Header() {
  const header = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    py: "45px",
    "@media (max-width: 640px)": {
      py: "20px",
    },
  };
  const nav = {
    display: "flex",
    alignItems: "center",
  };
  const list = {
    display: "flex",
    gap: "57px",
    fontSize: "1.5rem",
    fontWeight: "500",
    "@media (max-width: 640px)": {
      fontSize: "0.75rem",
      gap: "1.75rem",
    },
  };

  const headerPositioning = {
    display: "flex",
    maxWidth: "1440px",
    width: "100%",
    justifyContent: "space-between",
    px: "45px",
    "@media (max-width: 768px)": {
      px: "20px",
    },
  };

  const image = {
    "@media (max-width: 640px)": {
      width: "145px",
    },
  };
  return (
    <div className={css(header)}>
      <div className={css(headerPositioning)}>
        <img src={Logo} alt="Kasa Logo" className={css(image)} />
        <nav className={css(nav)}>
          <ul className={css(list)}>
            <li>
              <Link to="/">ACCUEIL</Link>
            </li>
            <li>
              <Link to="/">A PROPOS</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
