import React from "react";
import { Card, CardSubtitle } from "reactstrap";

const PlayersCard = props => {
  return (
    <Card className="players-card">
      {/* <CardSubtitle>Testing Players Card</CardSubtitle> */}
      <CardSubtitle>Name: {props.player.name}</CardSubtitle>
      <CardSubtitle>Country: {props.player.country}</CardSubtitle>
      <CardSubtitle>ID: {props.player.id}</CardSubtitle>
    </Card>
  );
};

export default PlayersCard;
