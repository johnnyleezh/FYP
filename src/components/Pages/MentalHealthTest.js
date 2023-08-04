import React, { useState } from 'react'
import QuestionnaireOption from '../Questionnaire/QuestionnaireOption'
import Title from '../Title'

function MentalHealthTest({user}) {
  return (
    <div className='body-container'>
      <Title>Mental Health Test</Title>
      <QuestionnaireOption
      user={user}
      />
    </div>
  )
}

export default MentalHealthTest