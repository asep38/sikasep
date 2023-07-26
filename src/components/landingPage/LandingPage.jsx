import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getLandingPage } from "../../database/api";

import { Link } from "react-router-dom";

import "./landingpage.css";

const LandingPage = () => {
  const [landingPage, setLandingPage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getLandingPage();
        setLandingPage(data);
        console.log(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Container className="py-5">
        <h1>Landing Page</h1>
        <div className="row justify-content-center">
          {landingPage.map((item) => (
            <div className="col-md-4 col-sm-12 card_item m-2">
              <Link to={`/lp/${item.id}`} key={item.id} className="text-center">
                <img src={item.image_cover} alt="" />
                <h3> {item.title} </h3>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default LandingPage;
