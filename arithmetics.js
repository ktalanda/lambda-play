// How to add two numbers in lambda calculus
// So this code snippet is to prove that 2+2=4 can be encoded and checked in lambda calculus using pure functions

// First we need to define natural numbers using  functions. We will use Church numerals which are based on Peano axion
const zero = () => false // base
const succ = (a) => () => a // successor

const _0 = zero()
const _1 = succ(_0)
const _2 = succ(_1)
const _3 = succ(_2)
const _4 = succ(_3)

// Few additional useful functions to operate on natural numbers
const pred = (a) => a() // predicate
const isZero = (a) => a == zero()

// Next thing is to define arithmetics, in our case only add function
const add = (a, b) => {
    if (isZero(a)) return b
    return add(pred(a), succ(b))
}

// To check if we are correct we have to have a way to compare two numbers
const equal = (a, b) => {
    if(isZero(a) && isZero(b)) return true
    if(isZero(a) && !isZero(b)) return false
    if(!isZero(a) && isZero(b)) return false
    return equal(pred(a), pred(b))
}

if (equal(_0, _0) !== true) console.log('1_FAIL')
if (equal(_0, _1) !== false) console.log('2_FAIL')
if (equal(_1, _0) !== false) console.log('3_FAIL')
if (equal(_1, _1) !== true) console.log('4_FAIL')
if (equal(_2, _1) !== false) console.log('5_FAIL')

// Once all is ready we can try to add two numbers and check if it gives the right answer
console.log(
    equal(
        add(_2,_1),
        _3
    )
)
