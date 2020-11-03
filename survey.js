const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// empty object to save answers
const answers = {};

// Printing profile in paragraph
const printProfile = function(){
  console.log(`${answers.name} loves listening to ${answers.music} while ${answers.activity}, devouring ${answers.favFood} for ${answers.favMeal}, prefers ${answers.sport} over any other sport, and is amazing at ${answers.superpower}.`);
}

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  // Save answer in object
  answers.name = name;

  rl.question('What\'s an activity you like doing? ', (activity) => {
    answers.activity = activity;

    rl.question('What do you listen to while doing that? ', (music) => {
      answers.music = music;

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (favMeal) => {
        answers.favMeal = favMeal;

        rl.question('What\'s your favourite thing to eat for that meal? ', (favFood) => {
          answers.favFood = favFood;

          rl.question('Which sport is your absolute favourite? ', (sport) => {
            answers.sport = sport;

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
              answers.superpower = superpower;

              // Print out answers
              printProfile()

              // close 
              rl.close();
            });
          });
        });
      });
    });
  });
});