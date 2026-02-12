function getGreeting(name) {
  return `Hey ${name}!`;
}

function getTimeMessage() {
  const now = new Date();
  return `Time right now: ${now.toLocaleTimeString()}`;
}

function getMotivation() {
  const lines = [
    "Small steps every day.",
    "Keep going — you’re building skill.",
    "Consistency beats talent.",
    "Don’t stop when it’s boring."
  ];
  const pick = Math.floor(Math.random() * lines.length);
  return `Motivation: ${lines[pick]}`;
}

// “Mini app output”
console.log(getGreeting("Zack"));
console.log(getTimeMessage());
console.log(getMotivation());
