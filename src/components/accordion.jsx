import React from "react";
import { css } from "../../styled-system/css";

export default function Accordion({ title, description }) {
  const [isActive, setIsActive] = React.useState(false);

  function accordionToggle() {
    setIsActive(!isActive);
  }
  const layoutStyle = {
    display: "flex",
    bgColor: "#FF6060",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.5rem",
    justifyContent: "space-between",
    rounded: "md",
    px: 3,
    py: 2,
  };

  const descriptionStyle = {
    bgColor: "#F6F6F6",
    px: 5,
    py: 3,
  };

  return (
    <div>
      <div className={css(layoutStyle)}>
        <h2>{title}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="32px"
          height="32px"
          className={
            !isActive
              ? `${css({ cursor: "pointer" })} closeChevron`
              : `${css({ cursor: "pointer" })} openChevron`
          }
          onClick={accordionToggle}
        >
          <path
            fill="white"
            d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
          />
        </svg>
      </div>
      {isActive ? (
        <div className={`${css(descriptionStyle)} `}>
          <p className={` descriptionAnimation`}>{description}</p>
        </div>
      ) : undefined}
    </div>
  );
}
