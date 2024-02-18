// import React from 'react';
import './SCSS/quickquestion.scss'

// function QuickQuestion(props) {
//     return (
//         <div className='main-quick-question'>
//             <div className='part-1'>
//             <div className='coontainer'>
//                     <h2 className='p-4'>
//                         Quick <span>Question</span> for Stream selection.
//                     </h2>
//             </div>
//             </div>
//         </div>
//     );
// }

// export default QuickQuestion;
import React, { useState } from 'react';

function QuickQuestion() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState('');

  const questions = [
    {
      question: "1. Which subject do you enjoy the most?",
      options: ["Physics", "Literature", "Economics"]
    },
    {
      question: "2. What type of activities do you prefer?",
      options: ["Experimenting with machines", "Painting and drawing", "Debating and analyzing data"]
    },
    {
      question: "3. What are your career aspirations?",
      options: ["Engineer or Scientist", "Artist or Designer", "Business Manager or Economist"]
    },
    {
        question: "4. Imagine being in a room. What do you hear, smell, and taste?",
      options: ["A) Machines humming, chemicals in the air, a hint of bitterness.", "B) Guitar strums, the aroma of coffee, a taste of dark chocolate.", "C) Calculator clicks, the scent of money, a minty taste."],
    },
    {
        question: "5. I am the spark that ignites curiosity, the seeker of truth in the depths of mystery. My language is that of equations Imagine being in a room. What do you hear, smell, and taste?        formulas, where every discovery is a triumph. What am I?",
        options: ["A) The Artist's Palette", "B) The Scientist's Laboratory", "C) The Entrepreneur's Ledger"],
    },
    {
        question: "6. Close your eyes and picture yourself in a classroom. What's the first thing you notice?        ",
      options: ["A) You see lab equipment, colorful chemicals, and a telescope in the corner.", "B) You notice paintings, posters of famous writers, and bookshelves filled with novels.", "C) You spot tidy desks, financial reports, and a whiteboard with business ideas scribbled on it."],
    },
    {
        question: "7. In solitude, where do you feel most at home? the most?",
      options: ["A) Among stars, exploring mysteries, solving equations.", "B) Amidst colors, painting stories, expressing emotions.", "C) In bustling markets, analyzing numbers, crafting strategies"],
    },
    {
        question: "8. I am a place of wonder, where mysteries are unraveled, and discoveries are made. My walls echo with the sounds of experiments and equations. What am I?",
      options: ["A) An Artist's Studio", "B) A Scientist's Laboratory", "C) A Business Office"],
    }
  ];

  const handleAnswerSelection = (questionIndex, answerIndex) => {
    setAnswers({ ...answers, [questionIndex]: answerIndex });
  };

  const handleSubmit = () => {
    const counts = { Science: 0, Art: 0, Commerce: 0 };

    Object.values(answers).forEach((answerIndex, questionIndex) => {
      if (answerIndex !== undefined) {
        if (questionIndex === 0 || questionIndex === 1) {
          counts.Science += answerIndex === 0 ? 1 : 0;
          counts.Art += answerIndex === 1 ? 1 : 0;
          counts.Commerce += answerIndex === 2 ? 1 : 0;
        } else {
          counts.Science += answerIndex === 0 ? 1 : 0;
          counts.Art += answerIndex === 1 ? 1 : 0;
          counts.Commerce += answerIndex === 2 ? 1 : 0;
        }
      }
    });

    const maxCount = Math.max(...Object.values(counts));
    const stream = Object.keys(counts).find(key => counts[key] === maxCount);
    setResult(`Based on your choices, we suggest you choose the ${stream} stream.`);
  };

  return (
    <div className="main-quickquestion">
        <div className='part-1'>
           <div className='coontainer'>
                <h2 className='p-4'>
                    Quick <span>Question</span> for Stream selection.
                </h2>
            </div>
        </div>
        <div className='part-2 coontainer'>
            
        <h2 className='mt-5'>Stream Selection Quiz</h2>
        {questions.map((question, index) => (
            <div key={index}>
            <h3>{question.question}</h3>
            <div className="options">
                {question.options.map((option, optionIndex) => (
                <label key={optionIndex}>
                    <input
                    type="radio"
                    name={`question-${index}`}
                    value={optionIndex}
                    checked={answers[index] === optionIndex}
                    onChange={() => handleAnswerSelection(index, optionIndex)}
                    />
                    {option}
                </label>
                ))}
            </div>
            </div>
        ))}
        <button onClick={handleSubmit} className='mb-5'>Submit</button>
        {result && <p>{result}</p>}
        </div>
    </div>
  );
}

export default QuickQuestion;
