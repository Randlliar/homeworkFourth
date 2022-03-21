const sum = (num1, num2) => {
    return num1 + num2;
}

const sub = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const div = (num1, num2) => {
    return num1 / num2;
}

const modulo = (num1, num2) => {
    return num1 % num2;
}

const moreThan = (num1, num2) => {
    return num1 > num2;
}

const lessThan = (num1, num2) => {
    return num1 < num2;
}

const moreThanOrEqual = (num1, num2) => {
    return num1 >= num2;
}

const lessThanOrEqual = (num1, num2) => {
    return num1 <= num2;
}

const equal = (num1, num2) => {
    return num1 === num2;
}

const notEqual = (num1, num2) => {
    return num1 !== num2;
}

console.log('Сумма чисел равна:')
console.log(sum(3, 4))

console.log('Разность чисел равна:')
console.log(sub(7,2))

console.log('Произведение чисел равно:')
console.log(multiply(7,2))

console.log('Частное чисел равно:')
console.log(div(7,2))

console.log('Остаток от деления чисел равен:')
console.log(modulo(14,3))

console.log('Первое число больше второго:')
console.log(moreThan(14,3))

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