const generateRandomText = () => {
  const words = [
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua",
  ];
  const paragraphs = [];

  const numParagraphs = 1;
  const numSentencesPerParagraph = 1;

  for (let p = 0; p < numParagraphs; p++) {
    const sentences = [];

    for (let i = 0; i < numSentencesPerParagraph; i++) {
      const numWords = Math.floor(Math.random() * 1) + 3;
      const sentenceWords = [];

      for (let j = 0; j < numWords; j++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        sentenceWords.push(words[randomIndex]);
      }

      const sentence = sentenceWords.join(" ") + ".";
      sentences.push(sentence.charAt(0).toUpperCase() + sentence.slice(1));
    }

    paragraphs.push(sentences.join(" "));
  }

  return paragraphs.join("\n\n");
};

export default generateRandomText;
