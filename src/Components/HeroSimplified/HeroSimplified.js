import React from 'react';
import * as icon from '../../assets/icons';
import { Link } from 'react-router-dom';
import './HeroSimplified.css';

function HeroSimplified({ name, imgUrl, powerstats, id }) {
  return (
    <div className='featured__hero'>
      <h2>{name}</h2>
      <Link to={`/hero/${id}`}><img className='featured__hero__img' src={imgUrl} alt={`${name}`} /></Link>
      <div className='featured__hero__stats'>
        <div>
          <img className='featured__hero__stats__icon' src={icon.combat} alt="combat icon" />
          <p>{powerstats.combat}</p>
        </div>
        <div>
          <img className='featured__hero__stats__icon' src={icon.durability} alt="combat icon" />
          <p>{powerstats.durability}</p>
        </div>
        <div>
          <img className='featured__hero__stats__icon' src={icon.intelligence} alt="combat icon" />
          <p>{powerstats.intelligence}</p>
        </div>
        <div>
          <img className='featured__hero__stats__icon' src={icon.speed} alt="combat icon" />
          <p>{powerstats.speed}</p>
        </div>
        <div>
          <img className='featured__hero__stats__icon' src={icon.strength} alt="combat icon" />
          <p>{powerstats.strength}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSimplified;
