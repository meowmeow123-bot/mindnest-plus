function logMood(emoji) {
  const time = new Date().toLocaleString();
  const entry = { emoji, time };

  let moods = JSON.parse(localStorage.getItem("moodLog")) || [];
  moods.push(entry);
  localStorage.setItem("moodLog", JSON.stringify(moods));

  updateMoodLog();
}

function updateMoodLog() {
  const moodList = document.getElementById("mood-log");
  moodList.innerHTML = "";

  const moods = JSON.parse(localStorage.getItem("moodLog")) || [];

  moods.reverse().forEach(entry => {
    const li = document.createElement("li");
    li.textContent = `${entry.emoji} — ${entry.time}`;
    moodList.appendChild(li);
  });
}

updateMoodLog();
