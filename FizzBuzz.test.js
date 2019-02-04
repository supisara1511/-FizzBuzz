const Fizz = require('./FizzBuzz');


for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        test('Send number 1-100 FizzBuzz', () => {
            expect(Fizz(i)).toBe("FizzBuzz");
        })
    } else if (i % 3 == 0) {
        test('Send number 1-100 % 3', () => {
            expect(Fizz(i)).toBe("Fizz");
        })
    }
    else if (i % 5 == 0) {
        test('Send number 1-100 % 5', () => {
            expect(Fizz(i)).toBe("Buzz");
        })
    }
    else {
        test('Send number 1-100', () => {
            expect(Fizz(i)).toBe(i);
        })
    }

}




