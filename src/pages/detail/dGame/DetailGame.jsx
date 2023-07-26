import { useParams, Link } from "react-router-dom";

import { Container, Button } from "react-bootstrap";
import "./dGame.css";

import React, { useEffect, useState } from "react";
import { getDetailGame } from "../../../database/api";
// import {} from "bootstrap";

const DetailGame = () => {
  const { id } = useParams();
  const [gameDetail, setGameDetail] = useState(null);

  useEffect(() => {
    const gameId = parseInt(id);

    const fetchGameDetail = async () => {
      const gameDetailData = await getDetailGame(gameId);
      setGameDetail(gameDetailData);
    };

    fetchGameDetail();
  }, [id]);

  if (!gameDetail) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Container className="py-4 ">
        <h1 className="text-center " style={{ textTransform: "uppercase" }}>
          {gameDetail.name}
        </h1>
        <div className="row">
          <div className="deskripsi d-md-flex d-sm-column align-items-center justify-content-center ">
            {/* <div className="img"> */}
            <img src={gameDetail.img} alt={gameDetail.name} />
            {/* </div> */}
            <div className="d-column">
              <h3>Deskripsi</h3>
              <p>{gameDetail.deskripsi}</p>
              <Button as={Link} to={gameDetail.link_play} className="btn">
                Play Game
              </Button>
            </div>
          </div>
        </div>
        <h3 className="pt-4">Cerita</h3>
        <p
          className="cerita"
          dangerouslySetInnerHTML={{ __html: gameDetail.cerita }}
        />
      </Container>
    </>
  );
};

export default DetailGame;
