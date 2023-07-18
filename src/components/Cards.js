import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/MentalHealth/Stress.jpg'
              text='Intense strain from demanding pressures and overwhelming circumstances'
              label='Stress'
              path='/services'
            />
            <CardItem
              src='images/MentalHealth/Depression.webp'
              text="Persistent sadness, hopelessness, and emotional despair shadow one's existence"
              label='Depression'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/MentalHealth/Anxiety.webp'
              text="Restless unease, racing thoughts, and overwhelming worry consume one's being"
              label='Anxiety'
              path='/services'
            />
            <CardItem
              src='images/MentalHealth/EatingDisorder.webp'
              text='Challenging struggle with food and body image perception difficulties'
              label='Eating disorder'
              path='/services'
            />
            <CardItem
              src='images/MentalHealth/SleepDisorder.jpg'
              text='Disrupted sleep patterns and difficulties in attaining restful, rejuvenating sleep'
              label='Sleep Disorder'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
