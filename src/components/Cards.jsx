import { css } from "../../styled-system/css";
import { Link } from "react-router-dom";
import fetchingData from "/src/data.json";

// A mettre en place lorsque l'API sera fonctionnelle
// const response = await fetch("lien vers l'API");
// const fetchingData = await response.json();

export default function Cards() {
  if (!fetchingData) return window.alert("Pas de données");
  const layoutStyle = {
    rounded: "xl",
    width: "100%",
    h: "100%",
    objectFit: "cover",
    zIndex: -5,
  };

  const titleStyle = {
    position: "absolute",
    zIndex: 2,
    bottom: 5,
    left: 5,
    fontSize: "1.125rem",
    color: "white",
    pr: "15px",
  };

  const cardGradientStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: "50%",
    rounded: "xl",
    bgGradient: "to-t",
    gradientFrom: "black",
    gradientTo: "red.100",
  };
  return (
    <>
      {fetchingData?.map(({ cover, title, id }) => {
        return (
          <div
            key={id}
            className={`${css({
              position: "relative",
              rounded: "xl",
              w: "340px",
              h: "340px",
              zIndex: 1,
              "@media (max-width: 760px)": {
                width: "100%",
                h: "255px",
              },
            })} `}
          >
            <Link to={`/location/${id}`}>
              <div className={css(cardGradientStyle)}></div>
              <img src={cover} alt={title} className={`${css(layoutStyle)} `} />
              <p className={css(titleStyle)}>{title}</p>
            </Link>
          </div>
        );
      })}
    </>
  );
}
