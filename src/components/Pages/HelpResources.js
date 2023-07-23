import React, { useState } from 'react'
import Cards from '../Cards/Cards'
import Title from '../Title'
import HelpResourceInformation from '../HelpResources/HelpResourceInformation'

function HelpResources() {
  const [isOpen, setIsOpen] = useState(false)
  const [resourceType, setResourceType] = useState("")

  console.log(isOpen)
  if (!isOpen) {
    return (
      <div className='body-container'>
        <Title>Help Resources</Title>
        <Cards
          resourceType={(data) => { setResourceType(data); setIsOpen(true) }}
        />
      </div>
    )
  }
  else {
    return (
      <HelpResourceInformation
        type={resourceType}
      />
    )
  }
}

export default HelpResources