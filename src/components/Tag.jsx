import { css } from "../../styled-system/css/";

export default function Tag({ label }) {
  const tagLabelStyle = {
    color: "white",
    fontSize: "0.875rem",
    fontWeight: "bold",
    bgColor: "#FF6060",
    py: 0.5,
    px: 6,
    rounded: "lg",
    "@media (max-width:640px)": {
      textAlign: "center",
      fontSize: "0.625rem",
      px: 4,
    },
  };
  return <p className={css(tagLabelStyle)}>{label}</p>;
}
