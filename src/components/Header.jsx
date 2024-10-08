import Logo from "/src/assets/Kasa_logo.svg";
import { Link } from "react-router-dom";
import { css } from "../../styled-system/css";
import { NavLink } from "react-router-dom";

import { globalStyles, responsiveStyle } from "../lib/sharedStyles.js";

const headerStyles = {
  py: "45px",
  "@media (max-width: 640px)": {
    py: "20px",
  },
};
const navStyles = {
  display: "flex",
  alignItems: "center",
};
const listStyles = {
  display: "flex",
  gap: "57px",
  fontSize: "1.5rem",
  fontWeight: "500",
  "@media (max-width: 640px)": {
    fontSize: "0.75rem",
    gap: "1.75rem",
  },
};

const headerPositioningStyles = {
  display: "flex",
  maxWidth: "1240px",
  width: "100%",
  justifyContent: "space-between",
};

const imageStyles = {
  "@media (max-width: 640px)": {
    width: "145px",
  },
};
export default function Header() {
  return (
    <div className={css(headerStyles, globalStyles)}>
      <div className={css(responsiveStyle, headerPositioningStyles)}>
        <Link to="/">
          <img src={Logo} alt="Kasa Logo" className={css(imageStyles)} />
        </Link>
        <nav className={css(navStyles)}>
          <ul className={css(listStyles)}>
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive
                    ? css({ textDecoration: "underline" })
                    : isPending
                      ? css({ textDecoration: "underline" })
                      : ""
                }
              >
                ACCUEIL
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/a-propos"
                className={({ isActive, isPending }) =>
                  isActive
                    ? css({ textDecoration: "underline" })
                    : isPending
                      ? css({ textDecoration: "underline" })
                      : ""
                }
              >
                A PROPOS
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
