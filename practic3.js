for (let s = 0; s < 5; s++) {
    console.log(s)}


/*Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
EXAMPLE:
[{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
*/

/*
let user =[{
    name: `Dima`,
    age: 13,
},
{model:`Camry`}
]
for (const userElement of user.keys(${name}))
{ str1 = str + userElement

}
console.log(str1)*/


let users = [
    { name: `Dima`,
    age: 13,},
    { model:`Camry`}];
function name1 (arr) {
    let users1 = [];
    for (let obj of arr) {
        for (let key in obj) {
            users1.push(key)

        }
    }
    return users1
}
let res = name1(users);
console.log(res);



/*Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
EXAMPLE:
[{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]*/

let users1 = [
    { name: `Dima`,
        age: 13,},
    { model:`Camry`}];
function name2 (arr) {
    let users2 = [];
    for (let name1 of arr) {
        for (let users1 in name1) {
            users2.push(name1[users1])

        }
    }
    return users2
}
let res1 = name2(users1);
console.log(res1);

/*створити функцію яка заповнює масив рандомними числами
* (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
*/
let gen = [];
for (i = 0; i < 20; i++) {
    gen.push( Math.round( Math.random() * 100 ));
}
console.log(gen)