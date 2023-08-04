import React, { useState, useEffect } from 'react'
import './Questionnaire.css'
import Questions from "../../Questionnaires/MentalHealthTest.json"
import { format } from "date-fns";
import { createData } from '../CRUD/CRUD';
import { create } from '@mui/material/styles/createTransitions';

function Questionnaire({ questionType, user }) {

    const [standardQuestions, setStandardQuestions] = useState(
        questionType === 0 ? Questions["StandardQuestions"] : Questions["FollowUpQuestions"]
    );
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = today.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    const [mentalHealth, setMentalHealth] = useState({
        // date: formattedDate,
        // time: format(today, "h:mm a"),
        // score: calculateScore(),
        // userId: user.uniqueId,
    })

    const createMentalHealth = (calculatedScore) => {
        if (showScore) {
            const data = {
                date: formattedDate,
                time: format(today, "hh:mm:ss a"),
                score: calculatedScore,
                userId: user.uniqueId,
            }
            createData("Mental Health", data)
        }
    }

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
        if (nextQuestion < standardQuestions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    console.log()

    useEffect(() => {
        // Calculate the score and update the totalScore state whenever rawScore changes
        const calculatedScore = Math.round((rawScore / (standardQuestions.length * 5)) * 100);
        setTotalScore(calculatedScore);
        createMentalHealth(calculatedScore)
    }, [rawScore]);


    return (
        <div className='quizContainer'>
            {showScore ? (
                <div>
                    <div className='rawScore-section' style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "2rem" }}>Mental Health Score</div>
                        <div style={{ fontSize: "3rem" }}>{totalScore}%</div>
                    </div>
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{standardQuestions.length}
                        </div>
                        <div className='question-text'>{standardQuestions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {answerOptions.map((answerOption) => (
                            <button className='answer' onClick={() => { handleAnswerOptionClick(answerOption.isCorrect) }}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Questionnaire