//............Task 1 .........//
//написати функцію, яка повертає слово 'odd' або 'even', в залежності від прийнятого аргументу(число).
// Значення для перевірки функції вводить користувач.
//написати функцію, яка повертає слово 'odd' або 'even', в залежності від прийнятого аргументу(число).
// Значення для перевірки функції вводить користувач.

const number1 = 9;
const number2 = 4;

function returnValue(number) {
    if (number % 2 === 0) {

        return "odd";
    } else {
        return "even"
    }
}

console.log(returnValue(number1));


//............Task 2 .........//
//написати функцію, яка приймає два аргументи і, якщо аргументи одного типу,
//то повертає той, який має більше значення (якщо значення рівні - повертаємо null),
// інакше(якщо різного типу) теж повертає null.

const value1 = 8;
const value2 = 8;


function acceptsArguments(value1, value2) {
    if (Number.isInteger(value1) && Number.isInteger(value2)) {

        if (value1 > value2) {
            return 'value1'
        }
        if (value1 < value2) {
            return 'value2'
        }
        if (value1 === value2) {
            return "null"
        }
    } else {
        return "null"
    }
}

console.log(acceptsArguments(value1, value2));

