const lyrics = [
  "I cannot vanish",
  "you will not scare me",
  "Try to get through it",
  "try to push through it",
  "You were not thinking",
  "that I will not do it",
  "They be lovin' someone",
  "and I'm another stor",
  "Take the next ticket",
  "get the next train",
  "Why would I do it?",
  "Baby",
  "now I'm ready,",
  "moving on",
];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function printLyricsWithDelay() {
  for (let line of lyrics) {
    console.log(line);
    await sleep(1600); 
  }
}

printLyricsWithDelay();
