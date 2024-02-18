const questions = [
    {
      question: "Which subject do you enjoy the most?",
      options: ["Physics", "Literature", "Economics"],
      categories: ["science", "arts", "commerce"]
    },
    {
      question: "What kind of activities do you prefer?",
      options: ["Experimenting with chemicals", "Painting or drawing", "Managing finances"],
      categories: ["science", "arts", "commerce"]
    },
    {
      question: "What career interests you the most?",
      options: ["Scientist", "Artist", "Entrepreneur"],
      categories: ["science", "arts", "commerce"]
    },
    {
        question: "Imagine being in a room. What do you hear, smell, and taste?",
      options: ["A) Machines humming, chemicals in the air, a hint of bitterness.", "B) Guitar strums, the aroma of coffee, a taste of dark chocolate.", "C) Calculator clicks, the scent of money, a minty taste."],
      categories: ["science", "arts", "commerce"]
    },
    {
        question: "I am the spark that ignites curiosity, the seeker of truth in the depths of mystery. My language is that of equations Imagine being in a room. What do you hear, smell, and taste?        formulas, where every discovery is a triumph. What am I?",
        options: ["A) The Artist's Palette", "B) The Scientist's Laboratory", "C) The Entrepreneur's Ledger"],
        categories: ["science", "arts", "commerce"]
    },
    {
        question: "Close your eyes and picture yourself in a classroom. What's the first thing you notice?        ",
      options: ["A) You see lab equipment, colorful chemicals, and a telescope in the corner.", "B) You notice paintings, posters of famous writers, and bookshelves filled with novels.", "C) You spot tidy desks, financial reports, and a whiteboard with business ideas scribbled on it."],
      categories: ["science", "arts", "commerce"]
    },
    {
        question: "In solitude, where do you feel most at home? the most?",
      options: ["A) Among stars, exploring mysteries, solving equations.", "B) Amidst colors, painting stories, expressing emotions.", "C) In bustling markets, analyzing numbers, crafting strategies"],
      categories: ["science", "arts", "commerce"]
    },
    {
        question: "I am a place of wonder, where mysteries are unraveled, and discoveries are made. My walls echo with the sounds of experiments and equations. What am I?",
      options: ["A) An Artist's Studio", "B) A Scientist's Laboratory", "C) A Business Office"],
      categories: ["science", "arts", "commerce"]
    },

  ];
  
  let userChoices = [];
  
  function displayQuestions() {
    const questionsContainer = document.getElementById('questions-container');
    questions.forEach((q, index) => {
      const options = q.options.map((opt, optIndex) => {
        return `<input type="radio" name="question${index}" value="${q.categories[optIndex]}"> ${opt}<br>`;
      }).join('');
      questionsContainer.innerHTML += `<div class="question">${q.question}<br>${options}</div>`;
    });
  }
  
  function submitAnswers() {
    userChoices = [];
    const radioButtons = document.querySelectorAll('input[type=radio]:checked');
    radioButtons.forEach(btn => {
      userChoices.push(btn.value);
    });
  
    const resultContainer = document.getElementById('result');
    const counts = { science: 0, arts: 0, commerce: 0 };
    userChoices.forEach(choice => {
      counts[choice]++;
    });
  
    const maxCount = Math.max(...Object.values(counts));
    const suggestedStream = Object.keys(counts).find(key => counts[key] === maxCount);
  
    resultContainer.innerHTML = `<h2>Suggested Stream: ${suggestedStream.charAt(0).toUpperCase() + suggestedStream.slice(1)}</h2>`;
    
    displayChart(counts);
  }
  
  function displayChart(counts) {
    const chartContainer = document.getElementById('chart-container');
    chartContainer.innerHTML = '';
    
    Object.keys(counts).forEach(key => {
      const bar = document.createElement('div');
      bar.style.width = `${counts[key] * 50}px`; // Adjust the width for better visualization
      bar.classList.add('bar');
      chartContainer.appendChild(bar);
    });
  }
  
  displayQuestions();
  