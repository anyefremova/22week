import React from 'react';

function Hero(props) {
    return (
        <div className="card">
            <div className="card-body">
                <img src={props.url} alt={props.name} />
                <h2 className="hero-name">{props.name}</h2>
                <p className="hero-universe">{props.universe}</p>
                <p className="hero-alterego">{props.alterego}</p>
                <p className="hero-friends">{props.friends}</p>
                <p className="hero-superpowers">{props.superpowers}</p>
                <p className="hero-info">{props.info}</p>
            </div>
        </div>
    )
}

export default Hero;