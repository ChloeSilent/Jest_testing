const {
    sum,
    nativeNull,
    makeUser
} = require('./intro');


describe('test sum function', () => {
    test('sum function with toBe', () => {
        expect(sum(2, 2)).toBe(4);
        expect(sum(1, 1)).toBe(2);
        expect(sum(3, 2)).toBe(5);
        expect(sum(3, 3)).toBe(6);
        expect(sum(2, 9)).toBe(11);
    });

    test('sum function with different tests', () => {
        expect(sum(2, 2)).toBeGreaterThan(3);
        expect(sum(2, 2)).toBeGreaterThanOrEqual(3.5);
        expect(sum(2, 2)).toBeLessThan(5);
        expect(sum(2, 2)).toBeLessThanOrEqual(4.5);
    });
});



test('nativeNull function', () => {
    expect(nativeNull(2)).toBeNull();
});

test('make user funct', () => {
    expect(makeUser('Olga', 30)).toEqual({
        name: 'Olga',
        age: 30
    });
});


test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
});