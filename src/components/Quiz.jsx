import React, { useState } from "react";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple");
      const data = await res.json();
      setQuestions(data.results);
      console.log(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 h-screen flex flex-col items-center justify-center ">
      <button onClick={fetchQuestions} className="bg-blue-600 text-white px-4 py-2 rounded">
        Fetch Questions
      </button>
      {loading && <p>Loading...</p>}
      {questions.map((q, index) => (
        <div className="m-2 p-1 border" key={index}>
          <p>{q.question}</p>
        </div>
      ))}
    </div>
  );
};

export default Quiz;
