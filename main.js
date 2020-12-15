// Створіть порожній об'єкт person.
let person = {};

// — Додайте властивість firstName зі значенням Ivan.
person.firstName = 'Ivan';

// — Додайте властивість secondName зі значенням Ivanov.
person.secondName = 'Ivanov';

// — Додайте метод showData яка буде виводити в console.log() ім’я та прізвище.
person.showData = function(){
    console.log(`${this.firstName} ${this.secondName}`);
}

// — Скопіюйте об'єкт person в об'єкт newPerson.
let newPerson = Object.assign({}, person);

// — Поміняйте в newPerson властивість firstName на Petro.
newPerson.firstName = 'Petro';

// — Поміняйте в newPerson властивість secondName на Petriv.
newPerson.secondName = 'Petriv';

// — Запустіть метод showData з person і newPerson, результат має бути наступним:
person.showData();
newPerson.showData();

// -----------------------//-----------------------//----------------------//--------------------//

// — Створіть порожній об'єкт MyMath.
let MyMath = {};

// — Cтворіть властивість a зі значенням 5.
MyMath.a = 5;

// — Cтворіть властивість b зі значенням 2.
MyMath.b = 2;

// — Створіть 4 методи які будуть робити наступне:

// sum – обчислює суму a+b та повертає значення console.log().
MyMath.sum = function () {
    console.log(`Сума чисел a + b = ${this.a + this.b}`);
}

// multiplication – обчислює множення a*b та повертає значення console.log().
MyMath.multiplication = function () {
    console.log(`Добуток чисел a * b = ${this.a * this.b}`);
}

// division – обчислює ділення a/b та повертає значення console.log().
MyMath.division = function () {
    console.log(`Частка чисел a / b = ${this.a / this.b}`);
}

// subtraction – обчислює віднімання a-b та повертає значення console.log().
MyMath.subtraction = function () {
    console.log(`Різниця чисел a - b = ${this.a - this.b}`);
}

MyMath.sum();

MyMath.multiplication();

MyMath.division();

MyMath.subtraction();