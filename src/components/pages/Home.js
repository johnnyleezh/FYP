import React from 'react';
import '../../App';
import { Button } from '../Button';
import './Home.css';
import Monitor from '../Monitor';
import Title from '../Title';

function Home() {
  return (
    <div className='hero-container'>
      <Title title="Home"/>
      <Monitor />
    </div>
  );
}

export default Home;
