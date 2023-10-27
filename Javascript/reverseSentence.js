function reverseWords(sentence) {
  let reversedSentence = '';
  let reversedWord = '';

  for (let i = sentence.length - 1; i >= 0; i--) {
    const character = sentence[i];

    if (character === ' ') {
      reversedSentence += reversedWord + ' ';
      reversedWord = '';
    } else {
      reversedWord += character;
    }
  }

  reversedSentence += reversedWord;

  return reversedSentence;
}


const sentence = prompt('Enter a sentence: ');


const reversedSentence = reverseWords(sentence);


console.log(`The reversed sentence is: ${reversedSentence}`);
