import React, { useEffect, useState } from 'react';
import { getBasicHeroInfoById } from '../../requests';
import HeroSimplified from '../HeroSimplified/HeroSimplified';
import './HeroesFeatured.css';

const featuredHeroesIds = [28, 45, 69];

function HeroesFeatured () {
    useEffect(() => {
        fetchAndRenderFeaturedHeroes();
    }, []);
    
    const [featuredHeroesList, setFeatureHeroesList] = useState([]);
    
    const fetchAndRenderFeaturedHeroes = async () => {
        let heroes = [];
        for (const heroId of featuredHeroesIds) {
            const data = await getBasicHeroInfoById(heroId);
            heroes.push(data);
        }
        setFeatureHeroesList(heroes)
    }
    
return (
    <section className='featured'>
        {featuredHeroesList.map(({ name, imgUrl, powerstats }) => (
            <HeroSimplified name={name} imgUrl={imgUrl} powerstats={powerstats} />
        ))}
    </section>
    );
}

export default HeroesFeatured;
