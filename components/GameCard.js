import Link from "next/link";
import React from "react";
import { Badge, Card } from "react-bootstrap";
import styles from "../styles/gamecard.module.css";

const GameCard = ({ game }) => {
  const browserGame = (platform = "") => {
    let images = [];
    if (platform.search(/pc/gi) > -1) {
      images.push("windows.svg");
    }
    if (platform.search(/Browser/gi) > -1) {
      images.push("browser.svg");
    }
    return images;
  };
  return (
    <Link className={styles.cardLink} href={`/game/${game.id}`} variant="primary">
      <Card className={styles.card}>
        <Card.Img src={game.thumbnail} />
        <Card.Body>
          <Badge bg="success" className="mb-1">
            {game.genre}
          </Badge>
          <Card.Title>{game.title} </Card.Title>
          <Card.Text className={styles.cardText}> {game.short_description} </Card.Text>

          <div className={styles.flexEnd}>
            {game && browserGame(game.platform).map((image) => <img key={image} className={styles.platformImage} src={image} />)}
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default GameCard;
