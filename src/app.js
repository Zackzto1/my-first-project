function getGreeting(name) {
  return "Hello " + name + "!";
}

function getTimeMessage() {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "Good morning!";
  } else if (hour < 18) {
    return "Good afternoon!";
  } else {
    return "Good evening!";
  }
}

  function getMotivation() {
  const options = [
    "Keep building. You're getting better.",
    "Small steps every day = big results.",
    "Don’t stop. You’re on a roll.",
    "You’re learning fast—stay with it.",
    "One more try. Then another."
  ];

  const index = Math.floor(Math.random() * options.length);
  return options[index];
}
}

function buildMiniApp(name) {
  return (
    getGreeting(name) + "\n" +
    getTimeMessage() + "\n" +
    getMotivation()
  );
}
const userName = prompt("What is your name?");
console.log(buildMiniApp("userName"));
