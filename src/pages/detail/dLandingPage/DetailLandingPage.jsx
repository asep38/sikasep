import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getDetailLandingPage } from "../../../database/api";
import { Button, Container } from "react-bootstrap";

import "./dLandingPage.css";

const DetailLandingPage = () => {
  const { id } = useParams();
  const [lpDetail, setLPDetail] = useState(null);

  useEffect(() => {
    const lpId = parseInt(id);

    const fetchLPDetail = async () => {
      const lpDetailData = await getDetailLandingPage(lpId);
      setLPDetail(lpDetailData);
    };

    fetchLPDetail();
  }, [id]);

  if (!lpDetail) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Container className="py-4 ">
        <h1 className="text-center " style={{ textTransform: "uppercase" }}>
          {lpDetail.title}
        </h1>
        <div className="row">
          <div className="deskripsi justify-content-center ">
            <div className="text-center">
              <img
                id="lp_img"
                src={lpDetail.image_detail}
                alt={lpDetail.title}
              />
              {/* <p>{lpDetail.deskripsi}</p> */}
              <Button as={Link} to={lpDetail.link_priview} className="btn mx-3">
                Priview Web
              </Button>
              <Button as={Link} to="/contact" className="btn mx-3">
                Hire Me
              </Button>
              {/* <h3 className="pt-5">Deskripsi</h3> */}
            </div>
          </div>
        </div>
        {/* <h3 className="pt-4">Cerita</h3>
        <p
          className="cerita"
          dangerouslySetInnerHTML={{ __html: lpDetail.cerita }}
        /> */}
      </Container>
    </>
  );
};

export default DetailLandingPage;
