const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Hanoi {

  constructor() {
    this.towers = [ [3,2,1], [], [] ];
    this.discs = 3;
  }

}

Hanoi.prototype.printStacks = function () {
  let output = "";
  for (let i = this.discs; i >= 0; i--) {
    output = "";
    this.towers.forEach((tower) => {
      output = "";
      if (tower[i] === undefined) {
        let spaces = " ".repeat(this.discs + 1);
        string = `${spaces}|${spaces}`;
      } else {
        let spaces = " ".repeat(this.discs - tower[i]);
        let eqs = "=".repeat(tower[i]);
        string = `${spaces}(${eqs}|${eqs})${spaces}`;
      }
      process.stdout.write(string);
    });
    console.log("");
  }
  const underline = ("-".repeat(string.length)).repeat(this.towers.length);
  console.log(underline);
};

Hanoi.prototype.promptMove = function (answers, ending, times, completionCallback) {
  const that = this;
  if (times > 0) {
    reader.question(`Which tower to ${ending}: `, function (numStr) {
      const tower = parseInt(numStr);
      answers.push(tower);
      that.promptMove(answers, "move to", times - 1, completionCallback);
    });
  } else {
    completionCallback(answers);
  }
};

Hanoi.prototype.run = function () {
  this.printStacks();
  this.promptMove([], "take from", 2, (answers) => {
    console.log(answers);
    reader.close();
  });
};

const game = new Hanoi;
game.run();