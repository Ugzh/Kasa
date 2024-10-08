import { css } from "../../styled-system/css";
import { globalStyles, responsiveStyle } from "../lib/sharedStyles.js";

const heroBannerStyles = {
  maxWidth: "1240px",
  height: "220px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  rounded: "4xl",
  dropShadow: "0px 4px 4px #00000040",
  "@media (max-width: 640px)": {
    height: "110px",
    justifyContent: "start",
    px: "4",
    rounded: "xl",
  },
};

const titleStyles = {
  fontSize: "3em",
  fontWeight: "bold",
  color: "white",
  textShadow: "0px 4px 4px #00000040",
  textAlign: "center",
  "@media (max-width: 640px)": {
    fontSize: "1.5rem",
    textAlign: "left",
    width: "240px",
    lineHeight: "1.5rem",
  },
};

export default function HeroBanner({ textTitle, theme }) {
  return (
    <div className={css(globalStyles, responsiveStyle)}>
      <div className={`${css(heroBannerStyles)} hero${theme}`}>
        <h1 className={`${css(titleStyles)} `}>{textTitle}</h1>
      </div>
    </div>
  );
}
