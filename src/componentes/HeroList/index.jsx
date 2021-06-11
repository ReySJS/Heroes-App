import React from 'react';
import Hero from '../Hero';

function HeroList({ heroes }) {
   return (
      <ul>
         {heroes.map(hero => (
            <Hero hero={hero} key={hero.id} />
         ))}
      </ul>
   )
}
export default HeroList
