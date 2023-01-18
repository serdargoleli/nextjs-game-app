import Link from "next/link";
import React from "react";
import { Badge, Card } from "react-bootstrap";
import styles from "../styles/gamecard.module.css";

const GameCard = ({ game }) => {
  return (
    <Link className={`${styles.cardLink}`} href={`/game/${game.id}`} variant="primary">
      <Card className={styles.card}>
        <Card.Img variant="top" src={game.thumbnail} />
        <Card.Body>
          <Badge bg="success" className="mb-1">
            {game.genre}
          </Badge>
          <Card.Title>{game.title} </Card.Title>
          <Card.Text className={styles.cardText}> {game.short_description} </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default GameCard;
