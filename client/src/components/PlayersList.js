import react from 'react'
// import PlayersCard from './PlayersCard';

const PlayersList = props => {

    return (

    <div>
        <div className="playerslist">
          <PlayersCard user={this.state.players} />
          {props.players.map((player) => (
            <PlayersCard key={player.id} player={player}/>
          ))}
        </div>
    </div>

    )
}