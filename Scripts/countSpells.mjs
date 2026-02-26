import fs from "fs";
import readline from "node:readline";

const text = fs.readFileSync(process.argv[2], "utf8");
const spells = text.split("\n").filter(line => line.trim() !== "");

console.log("There are: " + spells.length + " spells!");

// Setup readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise(resolve => rl.question(question, resolve));
}

const loopInput = await ask("Ready to roll? How many spell scrolls did you get? ");
const loop = parseInt(loopInput, 10);

for (let i = 0; i < loop; i++) {
    const result = Math.floor(Math.random() * spells.length);
    console.log("You just got: " + spells[result]);
}

rl.close();
