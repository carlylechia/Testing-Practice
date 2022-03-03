const Calculator = require('./calculator')

describe('arithmetic calculations', () => {
  describe('add numbers', () => {
    const calc = new Calculator(12, 100);
    it('two positives', () => {
      expect(calc.add()).toBe(112)
    })

    const calc2 = new Calculator(-12, -100);
    it('two negatives', () => {
      expect(calc2.add()).toBe(-112)
    })

    const calc3 = new Calculator(-12, 100);
    it('opposite signs', () => {
      expect(calc3.add()).toBe(88)
    })
  })

  describe('subtract numbers', () => {
    const calc4 = new Calculator(100, 12);
    it('two positives', () => {
      expect(calc4.subtract()).toBe(88)
    })

    const calc5 = new Calculator(-100, -12);
    it('two negatives', () => {
      expect(calc5.subtract()).toBe(-88)
    })

    const calc6 = new Calculator(-12, 100);
    it('opposing signs', () => {
      expect(calc6.subtract()).toBe(-112)
    })
  })

  describe('multiply numbers', () => {
    const calc7 = new Calculator(100, 12);
    it('two positives', () => {
      expect(calc7.multiply()).toBe(1200)
    })

    const calc8 = new Calculator(-100, -12);
    it('two negatives', () => {
      expect(calc8.multiply()).toBe(1200)
    })

    const calc9 = new Calculator(-12, 100);
    it('opposing signs', () => {
      expect(calc9.multiply()).toBe(-1200)
    })
  })

  describe('divide numbers', () => {
    const calc10 = new Calculator(100, 100);
    it('two positives', () => {
      expect(calc10.divide()).toBe(1)
    })

    const calc11 = new Calculator(-100, -5);
    it('two negatives', () => {
      expect(calc11.divide()).toBe(20)
    })

    const calc12 = new Calculator(-5, 100);
    it('opposing signs', () => {
      expect(calc12.divide()).toBe(-0.05)
    })
  })
})