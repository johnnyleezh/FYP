import React, { useState } from 'react'
import './Questionnaire.css'
import Questions from "../../Questionnaires/MentalHealthTest.json"

function Questionnaire() {

    const questions = Questions["questions"]

    const answerOptions = [
        { answerText: '1 - Not at all', isCorrect: 5 },
        { answerText: '2 - Rarely', isCorrect: 4 },
        { answerText: '3 - Sometimes', isCorrect: 3 },
        { answerText: '4 - Often', isCorrect: 2 },
        { answerText: '5 - Extreme', isCorrect: 1 },
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [rawScore, setRawScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        setRawScore(rawScore + isCorrect);

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const calculateScore = () => {
        const calculatedScore = Math.round((rawScore / (questions.length * 5)) * 100);
        return calculatedScore
      };
      

    return (
        <div className='quizContainer'>
            <div className='app'>
                {showScore ? (
                    <div>
                        <div className='rawScore-section' style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "2rem" }}>Mental Health Score</div>
                            <div style={{ fontSize: "3rem" }}>{calculateScore()}%</div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {answerOptions.map((answerOption) => (
                                <button className='answer' onClick={() => {handleAnswerOptionClick(answerOption.isCorrect)}}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Questionnaire