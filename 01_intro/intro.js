const expect = (value) => {

    return {
        toBe: exp => {
            if (exp === value) {
                console.log('success', 'value', value, 'exp', exp)
            } else {
                console.error(`value was ${value}, but expectation was ${exp}`)
            }
        }
    }
}

const sum = (a, b) => a + b;

const nativeNull = () => null;

const makeUser = (name, age) => {
    return {
        name: name,
        age: age
    };
}

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

//expect(sum(40, 2)).toBe(42);

module.exports = {
    sum,
    nativeNull,
    makeUser,
    isEmpty
};