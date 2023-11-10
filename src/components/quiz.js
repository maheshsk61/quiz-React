import React, { useState } from "react";
import { questions } from "./questions";
function Quiz() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [currQn, setCurrQn] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [result, setResult] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const toBeChecked = (isCorrect, index) => {
    setIsClicked(true);
    setClickedIndex(index);
    if (isCorrect) {
      setScore(score + 1);
    }
  };
  const next = () => {
    if (!isClicked) {
      alert("Please select atleast one option");
    } else {
      setCurrQn(currQn + 1);
      setIsClicked(false);
      setClickedIndex(null);
      if (currQn === questions.length - 1) {
        setResult(true);
      }
    }
  };
  return (
    <div className="container">
      {!startQuiz ? (
        <div className="play">
          <h1>Let's Play!</h1>
          <button
            onClick={() => setStartQuiz(true)}
            className="border-0 outline-0 px-5 py-2 bg-dark rounded-5 text-white"
          >
            Play Now
          </button>
        </div>
      ) : result ? (
        <h1>
          Your score is {score} out of {questions.length}
        </h1>
      ) : (
        <div>
          <div className="questions">
            <h1>
              Question No.{currQn + 1} out of {questions.length}
            </h1>
            <h1 className="card p-4" style={{ backgroundColor: "#e3eaf0" }}>
              {questions[currQn].question}
            </h1>
          </div>
          <div className="options">
            {questions[currQn].answers.map((value, index) => {
              return (
                <>
                  <button
                    key={index}
                    className="border-0 outline-0 px-5 py-2 mb-1 rounded-5"
                    onClick={() => {
                      toBeChecked(value.isCorrect, index);
                    }}
                    style={{
                      backgroundColor:
                        index === clickedIndex ? "#1a1f41" : null,
                      color: index === clickedIndex ? "white" : null,
                    }}
                  >
                    <b>{value.option}</b>
                  </button>
                  <br />
                </>
              );
            })}
            <div className="jump">
              <button
                onClick={next}
                className="border-0 outline-0 px-5 py-2 bg-secondary rounded-5 text-white"
              >
                <b>{currQn === questions.length - 1 ? "Submit" : "Next"}</b>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Quiz;
