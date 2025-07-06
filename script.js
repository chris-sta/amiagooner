document.getElementById('quiz-form')?.addEventListener('submit', function(e) {
  e.preventDefault();

  const answers = ['q1', 'q2', 'q3'].map(q => {
    const val = document.querySelector(`input[name="${q}"]:checked`);
    return val ? val.value : 'no';
  });

  const yesCount = answers.filter(ans => ans === 'yes').length;

  let resultText = "";

  if (yesCount === 3) {
    resultText = "You're a full-blooded Gooner. North London runs in your veins.";
  } else if (yesCount === 2) {
    resultText = "You're gooner-curious. One Emirates visit and you're converted.";
  } else {
    resultText = "You're not a Gooner... yet. But there's still hope.";
  }

  localStorage.setItem('goonerResult', resultText);
  window.location.href = 'results.html';
});
