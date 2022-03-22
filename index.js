function sum(num1, num2){
    return num1 + num2;
}

const sumFunction = function (num1, num2){
    const result = num1 + num2;
    console.log(result)
}

const arrowSum = (num1, num2) => {
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;
}

const subFunction = function (num1, num2){
    const result = num1 - num2;
    console.log(result)
}

const arrowSub = (num1, num2) => {
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

const multiplyFunction = function (num1, num2){
    const result = num1 * num2;
    console.log(result)
}

const arrowMultiply = (num1, num2) => {
    return num1 * num2;
}

function div(num1, num2){
    return num1 / num2;
}

const divFunction = function (num1, num2){
    const result = num1 / num2;
    console.log(result)
}

const arrowDiv = (num1, num2) => {
    return num1 / num2;
}

function modulo(num1, num2){
    return num1 % num2;
}

const moduloFunction = function (num1, num2){
    const result = num1 % num2;
    console.log(result)
}

const arrowModulo = (num1, num2) => {
    return num1 % num2;
}

function moreThan(num1, num2){
    return num1 > num2;
}

const moreThanFunction = function (num1, num2){
    const result = num1 > num2;
    console.log(result)
}

const arrowMoreThan = (num1, num2) => {
    return num1 > num2;
}

function lessThan(num1, num2){
    return num1 > num2;
}

const lessThanFunction = function (num1, num2){
    const result = num1 > num2;
    console.log(result)
}

const arrowLessThan = (num1, num2) => {
    return num1 < num2;
}

function moreThanOrEqual(num1, num2){
    return num1 >= num2;
}

const moreThanOrEqualFunction = function (num1, num2){
    const result = num1 >= num2;
    console.log(result)
}

const arrowMoreThanOrEqual = (num1, num2) => {
    return num1 >= num2;
}

function lessThanOrEqual(num1, num2){
    return num1 <= num2;
}

const lessThanOrEqualFunction = function (num1, num2){
    const result = num1 <= num2;
    console.log(result)
}

const arrowLessThanOrEqual = (num1, num2) => {
    return num1 <= num2;
}

function equal(num1, num2){
    return num1 === num2;
}

const equalFunction = function (num1, num2){
    const result = num1 === num2;
    console.log(result)
}

const arrowEqual = (num1, num2) => {
    return num1 === num2;
}

function notEqual(num1, num2){
    return num1 !== num2;
}

const notEqualFunction = function (num1, num2){
    const result = num1 !== num2;
    console.log(result)
}

const arrowNotEqual = (num1, num2) => {
    return num1 !== num2;
}

console.log('Сумма чисел равна:')
console.log(sum(3, 4))

console.log('Разность чисел равна:')
console.log(sub(7,2))

console.log('Произведение чисел равно:')
console.log(multiply(3,2))

console.log('Частное чисел равно:')
console.log(div(15,5))

console.log('Остаток от деления чисел равен:')
console.log(modulo(14,3))

console.log('Первое число больше второго:')
console.log(moreThan(13,3))

console.log('Первое число меньше второго:')
console.log(lessThan(1,3))

console.log('Первое число больше либо равно второму:')
console.log(moreThanOrEqual(2,3))

console.log('Первое число меньше либо равно второму:')
console.log(lessThanOrEqual(1,3))

console.log('Первое число равно второму:')
console.log(equal(4,4))

console.log('Первое число не равно второму:')
console.log(notEqual(4,4))