import { useParams, Navigate } from "react-router-dom";
import fetchingData from "/src/data.json";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const validId = [];
for (let i = 0; i < fetchingData.length; i++) {
  validId.push(fetchingData[i].id);
}

export default function Location() {
  const { id } = useParams();
  if (!validId.includes(id)) {
    return <Navigate to={"/404"} />;
  }
  return (
    <>
      <Header />
      <div></div>
      <Footer />
    </>
  );
}
