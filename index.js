const sum = (num1, num2) => {
    return num1 + num2;
}

const sub = (num1, num2) => {
    const subResult = num1 - num2;
    return subResult;
}

const multiply = (num1, num2) => {
    const multiplyResult = num1 * num2;
    return multiplyResult;
}

const div = (num1, num2) => {
    const divResult = num1 / num2;
    return divResult;
}

const modulo = (num1, num2) => {
    const moduloResult = num1 % num2;
    return moduloResult;
}

const moreThan = (num1, num2) => {
    const moreThanResult = num1 > num2;
    return moreThanResult;
}

const lessThan = (num1, num2) => {
    const lessThanResult = num1 < num2;
    return lessThanResult;
}

const moreThanOrEqual = (num1, num2) => {
    const moreThanOrEqualResult = num1 >= num2;
    return moreThanOrEqualResult;
}

const lessThanOrEqual = (num1, num2) => {
    const lessThanOrEqualResult = num1 <= num2;
    return lessThanOrEqualResult;
}

const equal = (num1, num2) => {
    const equalResult = num1 === num2;
    return equalResult;
}
const notEqual = (num1, num2) => {
    const notEqualResult = num1 !== num2;
    return notEqualResult;
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