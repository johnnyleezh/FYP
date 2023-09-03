import React, { useState } from "react";
import "./Cards.css"; // Import the CSS file for styling
import CardItem from "./CardItem"; // Import the CardItem component

// Cards component that displays a collection of cards with mental health topics
function Cards({ resourceType }) {
  // Styling for the outer layer of the cards
  const outerLayer = {
    backgroundColor: "#F4976C",
    width: "95%",
    boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.75)",
    marginBottom: "1rem",
  };

  return (
    <div style={outerLayer}>
      <div className="cards">
        {" "}
        {/* CSS class for the cards */}
        <div className="cards__container">
          {" "}
          {/* Container for the cards */}
          <div className="cards__wrapper">
            {" "}
            {/* Wrapper for the card items */}
            <ul className="cards__items">
              {" "}
              {/* Unordered list for card items */}
              {/* Render CardItem component with props */}
              <CardItem
                link="https://findahelpline.com/my/topics/stress"
                src="images/MentalHealth/Stress.jpg"
                text="Intense strain from demanding pressures and overwhelming circumstances"
                label="Stress"
                resourceType={resourceType}
              />
              <CardItem
                link="https://findahelpline.com/my/topics/depression"
                src="images/MentalHealth/Depression.webp"
                text="Persistent sadness, hopelessness, and emotional despair shadow one's existence"
                label="Depression"
                path="/services"
              />
            </ul>
            <ul className="cards__items">
              {/* Another list for card items */}
              {/* More CardItem components */}
              <CardItem
                link="https://findahelpline.com/my/topics/anxiety"
                src="images/MentalHealth/Anxiety.webp"
                text="Restless unease, racing thoughts, and overwhelming worry consume one's being"
                label="Anxiety"
                path="/services"
              />
              <CardItem
                link="https://findahelpline.com/my/topics/eating-body-image"
                src="images/MentalHealth/EatingDisorder.webp"
                text="Challenging struggle with food and body image perception difficulties"
                label="Eating disorder"
                path="/services"
              />
              <CardItem
                link="https://www.cdc.gov/sleep/about_sleep/key_disorders.html"
                src="images/MentalHealth/SleepDisorder.jpg"
                text="Disrupted sleep patterns and difficulties in attaining restful, rejuvenating sleep"
                label="Sleep Disorder"
                path="/sign-up"
              />
            </ul>
            <ul className="cards__items">
              {/* Another list for card items */}
              {/* More CardItem components */}
              <CardItem
                link="https://findahelpline.com/my"
                src="images/MentalHealth/Anxiety.webp"
                text="More resources"
                label="More resources"
                path="/services"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
