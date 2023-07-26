import React, { useEffect, useState } from "react";
import { getGame } from "../../database/api";

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./game.css";

const Games = () => {
  // const { id } = props;
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGame();
        setGameData(data);
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
        <h1>Game</h1>
        <div className="row justify-content-center">
          {gameData.map((item) => (
            <Link
              to={`/game/${item.id}`}
              key={item.id}
              className="card_item col-md-2 col-sm-12 text-center m-2"
            >
              <img src={item.img} alt="" />
              <h3> {item.name} </h3>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Games;
