import React, { useState } from 'react';
import Cards from '../Cards/Cards';
import Title from '../Title';
import HelpResourceInformation from '../HelpResources/HelpResourceInformation';

function HelpResources() {
  const [isOpen, setIsOpen] = useState(false);
  const [resourceType, setResourceType] = useState("");

  const openResourceInformation = (data) => {
    setResourceType(data);
    setIsOpen(true);
  };

  if (!isOpen) {
    return (
      <div className='body-container'>
        <Title>Help Resources</Title>
        <Cards resourceType={openResourceInformation} />
      </div>
    );
  } else {
    return <HelpResourceInformation type={resourceType} />;
  }
}

export default HelpResources;
