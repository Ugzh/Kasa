import { css } from "../../styled-system/css";
import React from "react";
import { useParams } from "react-router-dom";
import fetchingData from "/src/data.json";

export default function Gallery() {
  const [carrousselImage, setCarrousselImage] = React.useState([]);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const validId = [];

  for (let i = 0; i < fetchingData.length; i++) {
    validId.push(fetchingData[i].id);
  }

  const { id } = useParams();
  const indexID = validId.indexOf(id);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === carrousselImage.length - 1 ? 0 : prevIndex + 1,
    );
  };
  const previousSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carrousselImage.length - 1 : prevIndex - 1,
    );
  };
  //
  React.useEffect(() => {
    if (fetchingData[indexID].pictures.length > 0) {
      setCarrousselImage(fetchingData[indexID].pictures);
    }
  }, [setCarrousselImage, fetchingData, indexID]);

  const imageStyle = {
    h: "415px",
    w: "100%",
    objectFit: "cover",
    rounded: "2xl",
    "@media (max-width:640px)": {
      h: "255px",
    },
  };

  const chevronLeftStyle = {
    position: "absolute",
    top: "160px",
    left: "40px",
    w: "46px",
    cursor: "pointer",
    "@media (max-width:640px)": {
      w: "12px",
      top: "120px",
      left: "30px",
    },
  };

  const chevronRightStyle = {
    position: "absolute",
    top: "160px",
    right: "40px",
    w: "46px",
    cursor: "pointer",
    "@media (max-width:640px)": {
      w: "12px",
      top: "120px",
      right: "30px",
    },
  };

  return (
    <div className={css({ position: "relative" })}>
      {carrousselImage.length > 1 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className={css(chevronLeftStyle)}
          onClick={previousSlide}
        >
          <path
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            fill={"white"}
          />
        </svg>
      )}
      <img
        src={carrousselImage[activeIndex]}
        alt="Photo de la location"
        className={css(imageStyle)}
      />
      {carrousselImage.length > 1 && (
        <span
          className={css({
            position: "absolute",
            left: "50%",
            bottom: "10px",
            color: "white",
            fontWeight: "medium",
            "@media (max-width:640px)": {
              display: "none",
            },
          })}
        >{`${activeIndex + 1}/${carrousselImage.length}`}</span>
      )}

      {carrousselImage.length > 1 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className={css(chevronRightStyle)}
          onClick={nextSlide}
        >
          <path
            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            fill={"white"}
          />
        </svg>
      )}
    </div>
  );
}
