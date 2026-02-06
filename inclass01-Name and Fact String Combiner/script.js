// DOM element references
const nameInput = document.querySelector("#nameInput");
const topicInput = document.querySelector("#topicInput");
const generateBtn = document.querySelector("#generateBtn");
const resultDiv = document.querySelector("#result");

// Preset topics
const presetTopics = ["space", "music", "sports"];

// Fun facts by topic
const facts = {
  space: [
    "Jupiter could fit over 1,300 Earths inside it.",
    "A day on Venus is longer than a year on Venus.",
    "Neutron stars are so dense a teaspoon would weigh billions of tons.",
  ],
  music: [
    "The longest recorded song is over 138 hours long.",
    "Listening to music can improve memory and focus.",
    "Beethoven continued composing after he went deaf.",
  ],
  sports: [
    "Basketball was originally played with a soccer ball.",
    "The Olympic Games started over 2,700 years ago.",
    "A marathon is 26.2 miles because of the London Olympics.",
  ],
  general: [
    "Honey never spoils.",
    "Octopuses have three hearts.",
    "Bananas are technically berries.",
  ],
};

// Returns a random fact based on topic
function getRandomFact(topic) {
  const key = topic.toLowerCase();

  let factArray;
  let unknownTopic = false;

  if (facts[key]) {
    factArray = facts[key];
  } else {
    factArray = facts.general;
    unknownTopic = true;
  }

  const randomIndex = Math.floor(Math.random() * factArray.length);
  const fact = factArray[randomIndex];

  return { fact, unknownTopic };
}

// Builds the final message with disclaimer first if needed
function buildMessage(name, topic, fact, unknown) {
  let message = "";
  if (unknown) {
    message +=
      "I don’t have a fact about that topic yet—here’s a general one!\n\n";
  }
  message += `${name}'s fun fact about ${topic}: ${fact}`;
  return message;
}

// Button click event
generateBtn.addEventListener("click", function () {
  const name = nameInput.value.trim();
  const topic = topicInput.value.trim();

  // Input validation
  if (name === "" || topic === "") {
    resultDiv.textContent = "Please enter your name and a topic.";
    return;
  }

  const { fact, unknownTopic } = getRandomFact(topic);
  const message = buildMessage(name, topic, fact, unknownTopic);

  resultDiv.textContent = message;

  // Clear inputs after success
  nameInput.value = "";
  topicInput.value = "";
});
