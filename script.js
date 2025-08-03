const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

async function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  addMessage(message, 'user');
  userInput.value = '';
  addMessage("Typing...", 'bot', true);

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_OPENAI_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }]
    })
  });

  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content || "Sorry, something went wrong.";
  removeTypingIndicator();
  addMessage(reply, 'bot');
}

function addMessage(text, sender, isTyping = false) {
  const message = document.createElement('div');
  message.classList.add('message', sender);
  message.textContent = text;
  message.dataset.typing = isTyping;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTypingIndicator() {
  const typing = [...chatBox.children].find(el => el.dataset.typing === "true");
  if (typing) typing.remove();
}
