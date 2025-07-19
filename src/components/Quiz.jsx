import React, { useState } from "react";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({}); // {0: 'Paris', 1: 'London'}

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      let res = await fetch(
        "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
      );
      let data = await res.json();
      let formattedQuestions = data.results.map((q) => {
        let options = shuffleArray([...q.incorrect_answers, q.correct_answer]);
        return {
          ...q,
          options,
        };
      });
      setQuestions(formattedQuestions);
      setSelectedAnswers({}); // Reset selected answers when new quiz is fetched
    } catch (error) {
      console.error("Error fetching questions:", error);
    } finally {
      setLoading(false);
    }
  };

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleSelect = (questionIndex, option) => {
    if (selectedAnswers[questionIndex]) return; 
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: option,
    }));
  };

  const isCorrect = (qIndex, option) => {
    return questions[qIndex].correct_answer === option;
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-100 to-indigo-100 px-4 sm:px-8 py-8 flex flex-col items-center">

      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-indigo-600 text-center mb-6">
        Ready to test your Knowledge?</h1>

      <button
  onClick={fetchQuestions}
  className="w-full sm:w-auto text-center bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 ease-in-out mb-6"
>
  {loading ? "Loading..." : "Fetch Questions"}
</button>
      <div className="top-0 mb-4">
      <p className="text-sm text-center text-gray-600 relative mb-4">
  Click fetch questions again to change the questions!
</p>

      </div>

      <div className="w-full max-w-3xl space-y-6">
        {questions.map((q, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 transition hover:shadow-2xl"
          >
            <p
              className="text-lg font-medium text-gray-800 mb-4"
              dangerouslySetInnerHTML={{
                __html: `${index + 1}. ${q.question}`,
              }}
            />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {q.options.map((option, i) => {
                const selected = selectedAnswers[index];
                const correct = isCorrect(index, option);

                let optionStyle = "bg-indigo-50 hover:bg-indigo-200 text-indigo-900";
                if (selected) {
                  if (option === selected && correct) {
                    optionStyle = "bg-green-200 text-green-800";
                  } else if (option === selected && !correct) {
                    optionStyle = "bg-red-200 text-red-800";
                  } else if (correct) {
                    optionStyle = "bg-green-100 text-green-700";
                  } else {
                    optionStyle = "bg-gray-100 text-gray-500";
                  }
                }

                return (
                  <li
                    key={i}
                    onClick={() => handleSelect(index, option)}
                    className={`${optionStyle} px-4 py-2 rounded-lg shadow-sm cursor-pointer border border-indigo-300 transition duration-200 text-sm font-medium`}
                    dangerouslySetInnerHTML={{ __html: option }}
                  />
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
