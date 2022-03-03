class Calculator {
  constructor(num1, num2) {
    this.a = num1;
    this.b = num2;
  }
  add() {
    return this.a + this.b;
  } 
  subtract() {
    return this.a - this.b;
  }
  divide() {
    return this.a / this.b;
  }
  multiply() {
    return this.a * this.b;
  }
}

module.exports = Calculator