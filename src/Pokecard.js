import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);
class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
        return (
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
                <div className="Pokecard-image">
                    <img src={imgSrc} alt={this.props.name} />
                </div>
                <p>Type: {this.props.type}</p>
                <p>Exp: {this.props.exp}</p>
            </div>
        )
    }
}

export default Pokecard;