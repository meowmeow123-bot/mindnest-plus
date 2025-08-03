const breathText = document.getElementById("breathe-text");
let step = 0;
const steps = ["Breathe In", "Hold", "Breathe Out", "Hold"];

setInterval(() => {
  step = (step + 1) % steps.length;
  breathText.textContent = steps[step];
}, 4000);

const activities = [
  "Name 3 things you can see around you.",
  "Take a short walk around your room.",
  "Drink a glass of water slowly.",
  "Close your eyes and count to 10 while breathing slowly.",
  "Stretch your arms above your head and hold for 10 seconds.",
  "Write down one thing you're grateful for today.",
  "Do 5 jumping jacks.",
  "Smile at yourself in the mirror."
];

function nextActivity() {
  const random = Math.floor(Math.random() * activities.length);
  document.getElementById("activity-text").textContent = activities[random];
}
