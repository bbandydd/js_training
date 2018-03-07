/*
    1. deep clone object
    輸入物件，輸出一個深層複製的物件。兩者記憶體位置不能一樣。
*/
const func1 = obj => ({...obj});

const a = { text: 'aaa' };
const b = func1(a);
b.text = 'bbb';

console.log('func1', a.text);

/*
    2. add a format prototype to Date
    為 Date 新增一個原型方法為 format，可以執行 new Date().format()

    format: 'YYYY-MM-DD'
*/
Date.prototype.format = function() {
    return `${this.getFullYear()}-${String(this.getMonth() + 1).padStart(2, '0')}-${String(this.getDate()).padStart(2, '0')}`;
}

console.log('func2', new Date().format());

/*
    3. class constructor for Person
*/
class Person {
    constructor(name = 'Andy', age = 30) {
        this.name = name;
        this.age = age;
    }

    sayhi() {
        console.log('func3', `hi I'm ${this.name}, ${this.age} years old.`);
    }
}

const John = new Person('John', 18);
John.sayhi();

const Andy = new Person();
Andy.sayhi();

/*
    4. regexp replace all
*/
const func4 = (str, original, replaced) => str.replace(new RegExp(original, 'g'), replaced);

console.log('func4', func4('abacadaeaf', 'a', '123'));

/*
    5. regexp condition match email format
*/
const func5 = (email) => {
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return re.test(email);
}

console.log('func5', func5('wistron@wistron.com'));
console.log('func5', func5('wistron.com'));