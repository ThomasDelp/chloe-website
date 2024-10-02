import React from 'react';
import Mainview from '../Mainviews/Mainview';
import "./Home.scss"

function Home() {
  return (
    <Mainview className="mainview-home">
        <section className='section-home'>
            <div className='section-home-design-doors'>
                <div className='section-home-design-door door-left'></div>
                <div className='section-home-design-door door-right'></div>
            </div>
            <h1>Bienvenue sur notre site</h1>
            <p>Ceci est la page d'accueil de notre site vitrine.</p>
        </section>
    </Mainview>

  );
}

export default Home;