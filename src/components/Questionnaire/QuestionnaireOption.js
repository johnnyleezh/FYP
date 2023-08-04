import React, { useState } from 'react'
import Questionnaire from './Questionnaire'

function QuestionnaireOption({user}) {

    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState()

    if (!isOpen)
        return (
            <div className='quizSelectionContainer'>
                <div className='quizSelectionTitle'>
                    Please select your test
                </div>
                <div className='quizSelectionOption'>
                    <div className='answerContainer'>
                        <img src="/images/MentalHealth/Depression.webp" className="photo" alt="Student Photo" width="140em" height="180em"></img>
                        <button className='answer' style={{ fontSize: '1.5rem', justifyContent: 'center' }} onClick={() => { setIsOpen(true); setType(0) }}>
                            Mental Health Test
                        </button>
                    </div>
                    <div className='answerContainer'>
                        <img src="/images/MentalHealth/Stress.jpg" className="photo" alt="Student Photo" width="140em" height="180em"></img>
                        <button className='answer' style={{ fontSize: '1.5rem', justifyContent: 'center' }} onClick={() => { setIsOpen(true); setType(1) }}>
                            Follow-up Test
                        </button>
                    </div>
                </div>
            </div>
        )
    else
        return (
            <div>
                <Questionnaire questionType={type} user={user} />
            </div>
        )
}

export default QuestionnaireOption