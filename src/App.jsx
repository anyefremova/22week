import React from 'react';
import './App.css';
import Hero from './Hero';
import heroes from './heroes_data';

function Card() {
  return (
    <div className="cards">
      {heroes.map((hero) => (
        <Hero
          key={hero.id}
          name={hero.name}
          universe={hero.universe}
          alterego={hero.alterego}
          occupation={hero.occupation}
          friends={hero.friends}
          superpowers={hero.superpowers}
          url={hero.url}
          info={hero.info}
        />
      ))}
    </div>
  );
}

export default Card;
