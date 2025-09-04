const quote = [
  "Dating is just finding someone whose weirdness matches yours.",
  "I'd agree with you, but then we'd both be wrong.",
  "Common sense is like deodorant — the people who need it most never use it.",
  "Books don't judge you… but exams do.",
  "Don't take life too seriously, you'll never get out alive.",
  "Life is short… smile while you still have teeth.",
  "I love my job… only when I'm on vacation.",
  "Brains are awesome. I wish everybody had one.",
  "Some people need a high-five. In the face. With a chair.",
  "Don't worry if plan A fails, there are 25 more letters.",
];
const checkquotes = new Set();
const selectquote = document.getElementById("quote");
function randomquote() {
  if (checkquotes.size >= quote.length) {
    checkquotes.clear();
  }
  while (true) {
    const randomnum = Math.floor(Math.random() * quote.length);
    if (checkquotes.has(randomnum)) {
      continue;
    }
    const putquote = quote[randomnum];
    selectquote.innerHTML = putquote;

    checkquotes.add(randomnum);
    break;
  }
}
