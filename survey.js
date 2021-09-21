const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  
	rl.question('What is an activity you like doing? ', (answer1) => {
		console.log(`Thank you for your valuable feedback: ${answer1}`);

		rl.question('What do you listen to while doing that? ', (answer2) => {
			console.log(`Thank you for your wonderful feedback: ${answer2}`);

			rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer3) => {
				console.log(`Thank you for your glorious feedback: ${answer3}`);

					rl.question(`What's your favourite thing to eat for that meal? `, (answer4) => {
						console.log(`Thank you for your delicious feedback: ${answer4}`);

						rl.question(`Which sport is your absolute favourite? `, (answer5) => {
							console.log(`Thank you for your energetic feedback: ${answer5}`);

							rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (answer6) => {
								console.log(`Thank you for your Super feedback: ${answer6}\n`);
			
		 
								console.log(`This profile belongs to ${answer}, they like to listen to ${answer2} while ${answer1}. They like to eat ${answer4} for ${answer3}.${answer}'s favourite sport is ${answer5}. Everyone says their SuperPower is ${answer6}'`);
		rl.close();
	});
});
});
});
});
});
});




