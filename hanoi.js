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

Hanoi.prototype.promptMove = function () {
  let fromTower;
  let toTower;

  reader.question("Which tower to take from: ", function (numStr) {
   fromTower = parseInt(numStr);
  });
  reader.question("Which tower to move to: ", function (numStr) {
   toTower = parseInt(numStr);
  });

  return [fromTower, toTower];
};

Hanoi.prototype.run = function () {
  this.printStacks();
  // Hanoi.promptMove();
};

const game = new Hanoi;
game.run();
reader.close();