import React from "react";
import { useParams, Navigate } from "react-router-dom";
import fetchingData from "/src/data.json";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { css } from "../../styled-system/css";

const validId = [];

for (let i = 0; i < fetchingData.length; i++) {
  validId.push(fetchingData[i].id);
}

export default function Location() {
  const { id } = useParams();
  const [carrousselImage, setCarrousselImage] = React.useState([]);
  React.useEffect(() => {
    if (!validId.includes(id)) {
      return <Navigate to={"/404"} />;
    }
  });
  React.useEffect(() => {
    if (fetchingData[indexID].pictures.length > 0) {
      setCarrousselImage(fetchingData[indexID].pictures);
    }
  }, [setCarrousselImage, fetchingData]);

  const indexID = validId.indexOf(id);
  let stars = [];
  let emptyStar = [];
  for (let i = 0; i < fetchingData[indexID].rating; i++) {
    stars.push(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        key={i}
        height={"24px"}
        width={"24px"}
      >
        <path
          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
          fill={"#FF6060"}
        />
      </svg>,
    );
  }

  for (let i = 0; i < 5 - fetchingData[indexID].rating; i++) {
    emptyStar.push(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        key={i}
        height={"24px"}
        width={"24px"}
      >
        <path
          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
          fill={"#E3E3E3"}
        />
      </svg>,
    );
  }

  const carrousselStyle = {
    display: "flex",
    position: "relative",
    maxWidth: "1240px",
    width: "100%",
    flexDirection: "column",
    px: "20px",
  };

  const imageStyle = {
    h: "415px",
    w: "100%",
    objectFit: "cover",
    rounded: "2xl",
  };

  const titleStyle = {
    fontSize: "2.25rem",
    fontWeight: "500",
    color: "#FF6060",
  };

  const subtitleStyle = {
    fontSize: "1.125rem",
    fontWeight: "500",
  };

  const tagStyle = {
    display: "flex",
    gap: 3,
  };

  const tagLabelStyle = {
    color: "white",
    fontSize: "0.875rem",
    fontWeight: "bold",
    bgColor: "#FF6060",
    py: 0.5,
    px: 6,
    rounded: "lg",
  };
  return (
    <div className={css({ position: "relative", minHeight: "100vh" })}>
      <Header />
      <div
        className={css({
          width: "100%",
          display: "flex",
          justifyContent: "center",
        })}
      >
        <div className={css(carrousselStyle)}>
          <img
            src={carrousselImage[0]}
            alt="Photo de la location"
            className={css(imageStyle)}
          />
          <div
            className={css({
              display: "flex",
              justifyContent: "space-between",
              pt: 5,
            })}
          >
            <div
              className={css({
                display: "flex",
                flexDir: "column",
                gap: 3,
              })}
            >
              <h1 className={css(titleStyle)}>{fetchingData[indexID].title}</h1>
              <h2 className={css(subtitleStyle)}>
                {fetchingData[indexID].location}
              </h2>
              <div className={css(tagStyle)}>
                {fetchingData[indexID].tags.length > 1
                  ? fetchingData[indexID].tags.map((tag) => {
                      return (
                        <p key={Math.random()} className={css(tagLabelStyle)}>
                          {tag}
                        </p>
                      );
                    })
                  : ""}
              </div>
            </div>
            <div
              className={css({
                display: "flex",
                flexDir: "column",
                justifyContent: "space-around",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  alignItems: "center",
                  pt: 3,
                  gap: 2,
                })}
              >
                <p
                  className={css({
                    color: "#FF6060",
                    fontWeight: "500",
                    fontSize: "1rem",
                    width: "1/2",
                    textAlign: "right",
                  })}
                >
                  {fetchingData[indexID].host.name}
                </p>
                <img
                  src={fetchingData[indexID].host.picture}
                  alt={`Photo de ${fetchingData[indexID].host.name}`}
                  className={css({ h: "64px", rounded: "full" })}
                />
              </div>
              <div
                className={css({
                  display: "flex",
                  justifyContent: "end",
                  pr: "4",
                })}
              >
                {stars}
                {emptyStar}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
