import React, { useState, useEffect } from "react";
import Questionnaire from "./Questionnaire";
import { readSpecificUserDataMonitor } from "../CRUD/CRUD";

function QuizSelection({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState();
  const [isMonitor, setIsMonitor] = useState(false);

  const openQuestionnaire = (quizType) => {
    setIsOpen(true);
    setType(quizType);
  };

  const fetchData = async () => {
    const data = await readSpecificUserDataMonitor("Monitor", user.uniqueId);      
    if (data) {
      console.log("Hello, passed");
      setIsMonitor(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!isOpen) {
    return (
      <div className="quizSelectionContainer">
        <div style={{ backgroundColor: "#FBE8A6" }}>
          <div className="quizSelectionTitle">Please select your test</div>
          <div className="quizSelectionOption">
            <div className="answerContainer">
              <img
                src="/images/MentalHealth/Depression.webp"
                className="photo"
                alt="Depression"
                width="140em"
                height="180em"
              />
              <button
                className="answer quizButton"
                onClick={() => openQuestionnaire(0)}
              >
                Mental Health Test
              </button>
            </div>
            {isMonitor ? (
              <div className="answerContainer">
                <img
                  src="/images/MentalHealth/Stress.jpg"
                  className="photo"
                  alt="Stress"
                  width="140em"
                  height="180em"
                />
                <button
                  className="answer quizButton"
                  onClick={() => openQuestionnaire(1)}
                >
                  Follow-up Test
                </button>
              </div>
            ) : null}
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
