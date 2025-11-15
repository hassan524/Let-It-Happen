const lyrics = [
  "I cannot vanish",
  "you will not scare me",
  "Try to get through it",
  "try to push through it",
  "You were not thinking",
  "that I will not do it",
  "They be lovin' someone",
  "and I'm another story",
  "Take the next ticket",
  "get the next train",
  "Why would I do it?",
  "Anyone'd think that",
  "I cannot vanish",
  "you will not scare me",
  "Try to get through it",
  "try to push through it",
  "You were not thinking",
  "that I will not do it",
  "They be lovin' someone",
  "and I'm another story",
  "Take the next ticket",
  "get the next train",
  "Why would I do it?",
  "Anyone'd think that",
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function typeLine(line) {
  for (let char of line) {
    process.stdout.write(char);
    await sleep(45);
  }
  process.stdout.write("\n");
}

async function showIntro() {
  console.clear();

  const frames = [
    "    ♪     ♫     ♪    ",
    "  ♫     ♪     ♫      ",
    "♪     ♫     ♪     ♫  ",
    "  ♫     ♪     ♫      ",
  ];

  for (let i = 0; i < 12; i++) {
    process.stdout.write("\r" + frames[i % frames.length]);
    await sleep(760);
  }

  console.log("\n\n");
}

async function printLyricsWithDelay() {
  await showIntro();

  for (let line of lyrics) {
    await typeLine(line);
    await sleep(800);
  }
  await showIntro();
}

printLyricsWithDelay();
