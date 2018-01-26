import React from 'react';
import Hero from './Hero';


const Learn = (props) => (
  <Hero
    opacity={0.61}
    backgroundImage="url('//c.fastcdn.co/u/cf943cfe/22459261-0-HEADRE-LANDING.jpg'), url('//c.fastcdn.co/t/cf943cfe/6878be6f/1516721947-22459261-ghost-HEADRE-LANDING.jpg')"
  >
    <h1>Aprende a programar y transforma tu futuro</h1>
    <p>Conoce las oportunidades que puedes conseguir y aplica</p>
    <a href="#form" className="button">Postula ahora</a>
  </Hero>
);


export default Learn;
