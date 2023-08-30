import React from 'react';
import { Link } from 'react-router-dom';

// CardItem component that displays a card with an image and text
function CardItem(props) {
  return (
    <>
      {/* List item for each card */}
      <li className='cards__item'>
        {/* Link to navigate to a specific page when the card is clicked */}
        <div className='cards__item__link'>
          {/* Figure element for the card image */}
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            {/* Image element with source and alt attributes */}
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          {/* Card information */}
          <div className='cards__item__info'>
            {/* Heading for the card */}
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
