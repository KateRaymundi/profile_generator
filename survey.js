const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let profileData = []
rl.question(`What's your name?'`, (answer1) => {
  profileData.push(answer1);

  rl.question(`What's an activity you like doing?`, (answer2) => {
    profileData.push(answer2);

    rl.question(`What do you listen to while doing that?`, (answer3) => {
      profileData.push(answer3);

      rl.question(`Which is your favorite meal?`, (answer4) => {
        profileData.push(answer4);

        rl.question(`What's your favourite thing to eat for that meal?`, (answer5) => {
          profileData.push(answer5);

        rl.question(`Which sport is your absolute favourite?`, (answer6) => {
          profileData.push(answer6);

          rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer7) => {
            profileData.push(answer7);

            console.log(`${answer1} likes, ${answer2} listening ${answer3}. Loves to eat ${answer4} speacilly the ${answer5} inside of it. Enjoy play ${answer6} and ${answer7}`);

  rl.close();
});
});
});
});
});
});
});
