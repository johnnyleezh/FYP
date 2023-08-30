import React from 'react';
import QuizSelection from '../Questionnaire/QuizSelection';
import Title from '../Title';

function MentalHealthTest({ user }) {
  return (
    <div className='body-container'>
      <Title>Mental Health Test</Title>
      <QuizSelection user={user} />
    </div>
  );
}

export default MentalHealthTest;
