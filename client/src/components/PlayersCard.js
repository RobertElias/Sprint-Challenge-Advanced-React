import React from "react";
import { Card, CardSubtitle } from "reactstrap";

const PlayersCard = props => {
  return (
    <Card className="players-card">
      {/* <CardSubtitle>Testing Players Card</CardSubtitle> */}
      <CardSubtitle data-testid="playersName" >Name: {props.player.name}</CardSubtitle>
      <CardSubtitle data-testid="playersCountry">Country: {props.player.country}</CardSubtitle>
      <CardSubtitlen data-testid="playersId" >ID: {props.player.id}</CardSubtitle>
    </Card>
  );
};

export default PlayersCard;
