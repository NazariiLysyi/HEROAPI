import React, { useEffect, useState } from 'react';
import { getBasicHeroInfoById } from '../../requests';
import HeroSimplified from '../HeroSimplified/HeroSimplified';
import Loader from '../Loader/Loader';
import './HeroesFeatured.css';

const featuredHeroesIds = [3, 199, 450];

export default function HeroesFeatured() {
  useEffect(() => {
    fetchAndRenderFeaturedHeroes();
  }, []); 

  const [featuredHeroesList, setFeaturedHeroesList] = useState([]);
  const [isLoading, setLoadingState] = useState(true);

  const fetchAndRenderFeaturedHeroes = async () => {
    let heroes = [];
    for (const heroId of featuredHeroesIds) {
      const data = await getBasicHeroInfoById(heroId);
      heroes.push(data);
    }
    setFeaturedHeroesList(heroes);
    setLoadingState(false);
  }

  return (
    <section className='featured'>
      <h1>Featured Heroes</h1>
      { !isLoading && <div className='featured__list'>
        {featuredHeroesList.map(({ name, imgUrl, powerstats, id }) => (
          <HeroSimplified key={id} name={name} imgUrl={imgUrl} powerstats={powerstats} id={id} />
        ))}
      </div>}
      { isLoading && <div className='loader-container'>
          <Loader></Loader>
        </div>}
    </section>
  );
}
