import React from "react";
import { useParams, Navigate } from "react-router-dom";
import fetchingData from "/src/data.json";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { css } from "../../styled-system/css";
import Accordion from "../components/Accordion.jsx";
import Gallery from "../components/Gallery.jsx";
import Rating from "../components/Rating.jsx";
import Tag from "../components/Tag.jsx";

export default function Location() {
  const { id } = useParams();
  const validId = [];

  for (let i = 0; i < fetchingData.length; i++) {
    validId.push(fetchingData[i].id);
  }

  const indexID = validId.indexOf(id);

  React.useEffect(() => {
    if (!validId.includes(id)) {
      return <Navigate to={"/404"} />;
    }
  });

  const carrousselStyle = {
    display: "flex",
    position: "relative",
    maxWidth: "1240px",
    width: "100%",
    flexDirection: "column",

    px: "20px",
  };

  const titleStyle = {
    fontSize: "2.25rem",
    fontWeight: "500",
    color: "#FF6060",
    "@media (max-width:640px)": {
      fontSize: "1.125rem",
    },
  };

  const subtitleStyle = {
    fontSize: "1.125rem",
    fontWeight: "500",
    "@media (max-width:640px)": {
      fontSize: "0.825rem",
    },
  };

  const tagStyle = {
    display: "flex",
    gap: 3,
    "@media (max-width:640px)": {
      gap: 1,
    },
  };

  return (
    <div
      className={css({
        display: "flex",
        flexDir: "column",
        minHeight: "100vh",
        "@media (max-width:640px)": {
          pb: "200px",
        },
      })}
    >
      <Header />
      <div
        className={css({
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flex: 1,
        })}
      >
        <div className={css(carrousselStyle)}>
          <Gallery />
          <div
            className={css({
              display: "flex",
              justifyContent: "space-between",
              pt: 5,
              "@media (max-width:640px)": {
                flexDirection: "column",
                pt: 2,
              },
            })}
          >
            <div
              className={css({
                display: "flex",
                flexDir: "column",
                gap: 3,
                "@media (max-width:640px)": {
                  gap: 1,
                },
              })}
            >
              <h1 className={css(titleStyle)}>{fetchingData[indexID].title}</h1>
              <h2 className={css(subtitleStyle)}>
                {fetchingData[indexID].location}
              </h2>
              <div className={css(tagStyle)}>
                {fetchingData[indexID].tags.length > 1
                  ? fetchingData[indexID].tags.map((tag) => {
                      return <Tag label={tag} key={Math.random()} />;
                    })
                  : ""}
              </div>
            </div>
            <div
              className={css({
                display: "flex",
                flexDir: "column",
                justifyContent: "space-around",
                "@media (max-width:640px)": {
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: 3,
                },
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
                    "@media (max-width:640px)": {
                      fontSize: "0.75rem",
                    },
                  })}
                >
                  {fetchingData[indexID].host.name}
                </p>
                <img
                  src={fetchingData[indexID].host.picture}
                  alt={`Photo de ${fetchingData[indexID].host.name}`}
                  className={css({
                    h: "64px",
                    rounded: "full",
                    "@media (max-width:640px)": { h: "32px" },
                  })}
                />
              </div>
              <div
                className={css({
                  display: "flex",
                  justifyContent: "end",
                  pr: "4",
                })}
              >
                <Rating rating={fetchingData[indexID].rating} />
              </div>
            </div>
          </div>
          <div
            className={css({
              display: "flex",
              width: "100%",
              gap: 10,
              py: 10,
              "@media (max-width:640px)": {
                flexDirection: "column",
                gap: 5,
                pt: 2,
              },
            })}
          >
            <Accordion
              title={"Description"}
              className={css({
                fontSize: "1.125rem",
                "@media (max-width:640px)": {
                  fontSize: "0.8125rem",
                },
              })}
              description={fetchingData[indexID].description}
            />
            <Accordion
              title={"Équipement"}
              className={css({
                fontSize: "1.125rem",
                "@media (max-width:640px)": {
                  fontSize: "0.8125rem",
                },
              })}
              description={fetchingData[indexID].equipments}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
