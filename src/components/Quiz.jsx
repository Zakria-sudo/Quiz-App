import React, { useState } from "react";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      let res = await fetch(
        "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple"
      );
      let data = await res.json();
      let formattedQuestions = data.results.map((q) => {
        let options = [...q.incorrect_answers, q.correct_answer];
        return {
          ...q,
          options: shuffleArray(options),
        };
      });
      setQuestions(formattedQuestions);
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

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-100 to-indigo-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-indigo-800 mb-6">Geography Quiz</h1>

      <button
        onClick={fetchQuestions}
        className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 ease-in-out mb-6"
      >
        {loading ? "Loading..." : "Fetch Questions"}
      </button>

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
              {q.options.map((option, i) => (
                <li
                  key={i}
                  className="bg-indigo-50 hover:bg-indigo-200 text-indigo-900 px-4 py-2 rounded-lg shadow-sm cursor-pointer border border-indigo-300 transition duration-200 text-sm font-medium"
                  dangerouslySetInnerHTML={{ __html: option }}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
