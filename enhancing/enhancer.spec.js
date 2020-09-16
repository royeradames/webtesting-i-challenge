const enhancer = require('./enhancer.js');
// test away!

let spear = {
    name: 'OP spear of Lambda',
    durability: 45,
    enchancement: 20,
}
let magicPen = {
    name: 'Pen of auto answers',
    durability: 10,
    enchancement: 5,
}
describe('enhancer', () => {
    describe('.success()', () => {
        test('The items enhancement increases by 1. And the durability of the item is not changed', function () {
            magicPen = enhancer.success(magicPen)
            expect(magicPen.enchancement).toBe(6)
            expect(magicPen.durability).toBe(10)
        })
        test('If the item enhancement level is 20, the enhancement level is not changed. The durability of the item is not changed', function () {
            enhancer.success(spear)
            expect(spear.enchancement).toBe(20)
            expect(spear.durability).toBe(45)
        })

    })
    describe('.fail()', () => {
        test('If the items enhancement is less than 15, the durability of the item is decreased by 5.', function () {
            magicPen = enhancer.fail(magicPen)
            expect(magicPen.durability).toBe(5)
        })
        test('If the items enhancement is 15 or more, the durability of the item is decreased by 10., and If the items enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17', function () {
            spear = enhancer.fail(spear)
            expect(spear.durability).toBe(35)
            expect(spear.enchancement).toBe(19)
        })
    })
    describe('.repair()', () => {


    })
    describe('.get()', () => {


    })

})
