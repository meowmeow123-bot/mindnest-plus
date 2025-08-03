// Quiz Questions
const questions = [
  "Do you often feel anxious or nervous?", "Have you experienced prolonged sadness recently?",
  "Do you feel tired even after a full night’s sleep?", "Do you find it hard to concentrate?",
  "Do you avoid social situations?", "Do you struggle with self-esteem?",
  "Do you feel overwhelmed by daily tasks?", "Do you have sudden mood changes?",
  "Have you lost interest in hobbies or activities you once enjoyed?",
  "Do you feel hopeless or helpless frequently?", "Are you easily irritated or angry?",
  "Do you have difficulty sleeping or oversleeping?", "Have you experienced changes in appetite or weight?",
  "Do you feel disconnected from reality?", "Do you feel worthless or like a burden to others?",
  "Have you withdrawn from family or friends?", "Do you find it hard to get out of bed in the morning?",
  "Have you cried without a clear reason recently?", "Do you feel like you’re not good enough?",
  "Do you struggle to find motivation?", "Do you feel mentally exhausted frequently?",
  "Do you feel unsafe or excessively worried about your health?", "Have you experienced panic attacks?",
  "Do you overthink even small things?", "Do you engage in negative self-talk?",
  "Do you feel isolated even around people?", "Do you fear being judged by others?",
  "Do you constantly need reassurance?", "Have you ever felt like giving up?",
  "Do you feel numb or emotionally flat?"
];

const form = document.getElementById('quiz-form');
const resultBox = document.getElementById('result');

if (form) {
  questions.forEach((q, i) => {
    const question = document.createElement('p');
    question.textContent = `${i + 1}. ${q}`;
    const yes = document.createElement('input');
    yes.type = 'radio'; yes.name = `q${i}`; yes.value = 'yes';
    const yesLabel = document.createElement('label');
    yesLabel.textContent = 'Yes';
    const no = document.createElement('input');
    no.type = 'radio'; no.name = `q${i}`; no.value = 'no';
    const noLabel = document.createElement('label');
    noLabel.textContent = 'No';
    form.appendChild(question);
    form.appendChild(yes); form.appendChild(yesLabel);
    form.appendChild(no); form.appendChild(noLabel);
    form.appendChild(document.createElement('br'));
  });
}

function submitQuiz() {
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    const ans = document.querySelector(`input[name="q${i}"]:checked`);
    if (ans && ans.value === 'yes') score++;
  }
  resultBox.style.display = 'block';
  if (score >= 24) {
    resultBox.innerHTML = `<strong>Your Score: ${score}/30</strong><br>
    You might be experiencing high emotional distress. Seek support from someone you trust or a mental health professional.<br><br>
    <em>Affirmation:</em> "You are not alone. Healing is possible. You are strong."`;
  } else if (score >= 15) {
    resultBox.innerHTML = `<strong>Your Score: ${score}/30</strong><br>
    You may be facing moderate emotional strain. Consider practicing self-care and talking to someone.<br><br>
    <em>Affirmation:</em> "I am doing my best. I am enough."`;
  } else {
    resultBox.innerHTML = `<strong>Your Score: ${score}/30</strong><br>
    You show minimal signs of distress. Stay mindful and take care of yourself.<br><br>
    <em>Affirmation:</em> "I am resilient and grounded. I cherish my well-being."`;
  }
}

// Chatbot Logic (offline demo)
function sendMessage() {
  const input = document.getElementById('user-input');
  const message = input.value;
  if (!message) return;
  const box = document.getElementById('chat-box');
  const userMsg = document.createElement('p');
  userMsg.innerHTML = `<strong>You:</strong> ${message}`;
  box.appendChild(userMsg);

  const botMsg = document.createElement('p');
  botMsg.innerHTML = `<strong>Bot:</strong> I'm here for you. It's okay to feel this way. Would you like a breathing exercise or talk more?`;
  setTimeout(() => {
    box.appendChild(botMsg);
    box.scrollTop = box.scrollHeight;
  }, 1000);
  input.value = '';
}

function showSection(id) {
  document.getElementById('articles').style.display = 'none';
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('chatbot').style.display = 'none';
  document.getElementById(id).style.display = 'block';
}
