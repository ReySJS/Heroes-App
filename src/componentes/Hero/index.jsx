import React from 'react';
import { useHistory } from 'react-router-dom'
import './style.css';

function Hero({ hero }) {

   const history = useHistory()

   function navigateToPageDetails(id) {
      history.push(`/details/${id}`)
   }

   return (
      <li>
         <span onClick={() => navigateToPageDetails(hero.id)}>{hero.name}</span>
      </li>
   )
}
export default Hero
