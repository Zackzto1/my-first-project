function getGreeting(name) {
  return "Hello " + name + "!";
}

function getTimeMessage() {
  return "Hope you're having a great day!";
}

  function getMotivation() {
  const options = [
    "Keep building. You're getting better.",
    "Small steps every day = big results.",
    "Don't stop. You're on a roll."
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

console.log(buildMiniApp("Zack"));
