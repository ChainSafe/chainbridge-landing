import React, { Fragment } from 'react';
import { Mission } from '../../components/Mission';
import { Hero } from '../../components/Hero';
import './index.scss';
import { About } from '../../components/About';
import { UseCases } from '../../components/UseCases';
import { Values } from '../../components/Values';
import { Dev } from '../../components/Dev';
import { Roadmap } from '../../components/Roadmap';
import { Relayer } from '../../components/Relayer';
import { Footer } from '../../components/Footer';

export const Home: React.FC = () => {
  return (
    <Fragment>
      <div className='container'>
        <Hero />
        <Mission />
        <About />
        <UseCases />
        <Values />
        <Dev />
      </div>
      <Footer />
    </Fragment>
  );
};
