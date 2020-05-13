const Lodash = require('./sync');

let arr, arr2;

beforeEach(() => {
     arr = [0, 'hohoho', false, {
        name: 'Olga'
    }, 3, '', null];
     arr2 = ['hohoho', {
        name: 'Olga'
    }, 3];

});

const _ = new Lodash();
describe('test compact of Lodash', () => {
    test('should be defined', () => {
        expect(_.compact).toBeDefined();
        expect(_.compact).not.toBeUndefined();
    })

    test('should remove falsy values from array', () => {
        expect(_.compact(arr)).toEqual(arr2);
    })

    test('should not conatin false vlues', () => {
        expect(_.compact(arr)).not.toContain(false);
        expect(_.compact(arr)).not.toContain(null);
        expect(_.compact(arr)).not.toContain('');
        expect(_.compact(arr)).not.toContain(0);
    })

    test('should remove falsy values from array', () => {
        expect(_.compact).toBeDefined();
        expect(_.compact).not.toBeUndefined();
    })
})