(function(){
  const container = document.querySelector('.hr-automation-quiz');
  if(!container) return;

  const form = container.querySelector('#quizForm');
  const resultDiv = container.querySelector('#result');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    let totalScore = 0;
    for(let i=1; i<=7; i++) {
      const q = form['q'+i];
      const selected = Array.from(q).find(r => r.checked);
      if(!selected) {
        alert('Please answer all questions!');
        return;
      }
      totalScore += parseInt(selected.value);
    }

    let readinessLevel = '';
    let message = '';

    if(totalScore >= 7 && totalScore <= 13) {
      readinessLevel = 'Low Readiness';
      message = `Your HR function has significant gaps in process, data, skills, or leadership. It's recommended to start with foundational improvements and awareness building before moving to automation.`;
    } else if(totalScore >= 14 && totalScore <= 20) {
      readinessLevel = 'Moderate Readiness';
      message = `Your HR processes and systems have some automation, but further investment in standardization, data quality, and training is needed. You're a good candidate for phased automation projects.`;
    } else if(totalScore >= 21 && totalScore <= 26) {
      readinessLevel = 'High Readiness';
      message = `You have a strong foundation with standardized processes, reliable data, and supportive leadership. Your HR function is ready for meaningful automation projects.`;
    } else if(totalScore >= 27 && totalScore <= 28) {
      readinessLevel = 'Very High Readiness';
      message = `Your HR function is highly mature with integrated tech, skilled team, and proactive change management. Ideal for cutting-edge automation and AI integration.`;
    } else {
      readinessLevel = 'Unknown';
      message = 'Please answer all questions.';
    }

    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
      <p><strong>Your Score: <span class="score">${totalScore}</span> / 28</strong></p>
      <p><strong>Readiness Level: ${readinessLevel}</strong></p>
      <p>${message}</p>
    `;

    resultDiv.scrollIntoView({ behavior: 'smooth' });
  });
})();
