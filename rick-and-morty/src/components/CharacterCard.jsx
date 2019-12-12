import React from "react";
import { Card, CardImg, CardText, CardTitle, CardSubtitle } from "reactstrap";

export default function CharacterCard({ char }) {
  return (
    <Card>
      <CardImg src={char.image} alt="Card image cap" />
      <div>
        <CardTitle>
          <strong>{char.name}</strong>
        </CardTitle>
        <CardSubtitle>
          <strong>{char.species}</strong>
        </CardSubtitle>
        <CardText>
          {char.name} is a {char.species} from {char.origin.name} and has been
          featured in {char.episode.length} episodes
        </CardText>
      </div>
    </Card>
  );
}
