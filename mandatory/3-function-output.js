// Add comments to explain what this function does. You're meant to use Google!
function getRandomNumber() {
  return Math.random() * 10;
}
// Comment : math.random gives us a random number between 0 and 1. then we times it by 10, we will have a random number between 0 and 10.

// Add comments to explain what this function does. You're meant to use Google!
function combine2Words(word1, word2) {
  return word1.concat(word2);
}
// Comment : This functions takes 2 parametrs and append word2 to word 1 (combine) and return a new string.

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
  let wordCombination = firstWord.concat(secondWord);
  let final = wordCombination.concat(thirdWord);
  return final;
}

/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.

To run the tests for just this one file, type `npm test -- --testPathPattern 3-function-output` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)
==================================
*/

test("concatenate example #1", () => {
  expect(concatenate("code", " your ", "future")).toEqual("code your future");
});

test("concatenate example #2", () => {
  expect(concatenate("I", " like ", "pizza")).toEqual("I like pizza");
});

test("concatenate doesn't only accept strings", () => {
  expect(concatenate("I", " am ", 13)).toEqual("I am 13");
});
