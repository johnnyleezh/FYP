import React, { useState } from 'react';
import Questionnaire from './Questionnaire';

function QuizSelection({ user }) {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState();

    const openQuestionnaire = (quizType) => {
        setIsOpen(true);
        setType(quizType);
    };

    if (!isOpen) {
        return (
            <div className='quizSelectionContainer'>
                <div style={{ backgroundColor: '#FBE8A6' }}>
                    <div className='quizSelectionTitle'>
                        Please select your test
                    </div>
                    <div className='quizSelectionOption'>
                        <div className='answerContainer'>
                            <img src="/images/MentalHealth/Depression.webp" className="photo" alt="Depression" width="140em" height="180em" />
                            <button className='answer quizButton' onClick={() => openQuestionnaire(0)}>
                                Mental Health Test
                            </button>
                        </div>
                        <div className='answerContainer'>
                            <img src="/images/MentalHealth/Stress.jpg" className="photo" alt="Stress" width="140em" height="180em" />
                            <button className='answer quizButton' onClick={() => openQuestionnaire(1)}>
                                Follow-up Test
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <Questionnaire questionType={type} user={user} />
            </div>
        );
    }
}

export default QuizSelection;
