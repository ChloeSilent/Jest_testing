class Lodash {
    compact(arr) {
        //console.log(arr.filter(i => !!i))
        return arr.filter(val => !!val)
    }
    groupBy(array, prop) {}
}

const i = new Lodash();

i.compact([0, 'hohoho', null, {
    name: 'Olga'
}, false, 3, '']);
module.exports = Lodash;