import capitalizeFxn, { reverseString, calculator, caesarCipher, shift, analyzeArray } from './capitalize.js';

test('capitalizes first character of string', () => {
    expect(capitalizeFxn('string')).toBe('String');
}) 

test('reverses string', () => {
    expect(reverseString('String')).toBe('gnirtS');
})

test('add two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
})

test('subtract two numbers', () => {
    expect(calculator.subtract(7, 4)).toBe(3);
})

test('divide two numbers', () => {
    expect(calculator.divide(9,2)).toBe(4.5);
})

test('multiply two numbers', () => {
    expect(calculator.multiply(9,2)).toBe(18);
})

test('caesar encrypt string', () => {
    expect(caesarCipher('all quiet on the western front', 3))
    .toBe('DOO TXLHW RQ WKH ZHVWHUQ IURQW');
})

test('shift function', () => {
    expect(shift(' ', 3)).toBe(' ');
})

test('given array, output avg, min, max, length', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(
        {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        }
    )
})