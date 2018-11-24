const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Hanoi {

  constructor() {
    this.towers = [ [3,2,1], [], [] ];
  }

}

Hanoi.prototype.printStacks() {

}

Hanoi.prototype.promptMove() {

}

Hanoi.prototype.run = function () {
  Hanoi.printStacks();
  Hanoi.promptMove();
};