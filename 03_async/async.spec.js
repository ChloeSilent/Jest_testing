const Ajax = require('./async');


describe('test Ajax function', () => {
    let val;
    beforeEach(() => {
        val = 'some data';
    });

    test('should return async value', async () => {
        const result = await Ajax.echo(val);
        expect(result).toBe(val)
    })

});