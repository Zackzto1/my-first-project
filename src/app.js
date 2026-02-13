function getGreeting(name) {
  return "Hello " + name + "!";
}

function getTimeMessage() {
  return "Hope you're having a great day!";
}

function getMotivation() {
  return "Keep building. You're getting better.";
}

function buildMiniApp(name) {
  return (
    getGreeting(name) + "\n" +
    getTimeMessage() + "\n" +
    getMotivation()
  );
}

console.log(buildMiniApp("Zack"));
