const { add, subtract, multiply, divide, modulas,power } = require('./calculator');

describe('Calculato r', () => {
    test('adds two numbers correctly  ', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
    });

    test('subtracts two numbers correctly', () => {
        expect(subtract(5, 3)).toBe(2);
        expect(subtract(1, 2)).toBe(-1);
    });

    test('multiplies two numbers correctly', () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-2, 3)).toBe(-6);
    });

    test('divides two numbers correctly', () => {
        expect(divide(6, 2)).toBe(3);
        expect(divide(5, 2)).toBe(2.5);
    });

    test('throws error when dividing by zero', () => {
        expect(() => divide(4, 0)).toThrow('Division by zero is not allowed');
    });

    test('modulas two numbers correctly', () => {
        expect(modulas(5, 2)).toBe(1);
    });

    test('power of two numbers correctly', () => {
        expect(power(2, 3)).toBe(8);
    });

});
