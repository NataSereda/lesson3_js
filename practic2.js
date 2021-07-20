/*--створити масив з:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль*/
/*

let num  = [2,4,8,9,10];

console.log(num[0]);
console.log(num[1]);
console.log(num[2]);
console.log(num[3]);
console.log(num[4]);

let string = [`winter`, `spring`,`summer` ,`autumn`];
console.log(string[0]);
console.log(string[1]);
console.log(string[2]);
console.log(string[3]);

let all =[2,6,`apple`,true];
console.log(all[0]);
console.log(all[1]);
console.log(all[2]);
console.log(all[3]);
*/


/*Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль*/
/*
let names = [
    [`Olia`],
    [`Orusia`],
    [`Maria`]
];
    for (const name1 of names) {
        console.log(name1)
    }
*/

    /*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині*/


/*let animals = [
    {name:`panda`, color: `black`, status: true},
    {name:`monkey`, color: `grey`, status: false}
];
document.write(`<div>`);
for (const animal of animals) {
    document.write(`<div> ${animal.name} - ${animal.color} - ${animal.status}</div>`)
}
document.write(`</div>`)*/

/*for (let i = 0; i < 10; i++) {
    document.write(`<div>text ${i}
</div>`)

}*/

/*За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині*/


/*За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.*/
/*

let i = 0;
while (i<20) {
    document.write(`<h1>text ${i}</h1>`)
    i++;
}*/



/*
- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.*/

/*
let numbers = [1,2,3,4,5,6,7,8,9,10];
for (const number of numbers) {
    console.log(number);
}
*/



/*Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.*/

/*let string = [`1`, `2`,`3`, `4`,`5`, `6`];
for (const string1 of string) {
    console.log(string1)

}*/

/*Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі*/

/*let text = [1,2,3,4, `fefef`,`lsfclsvl`, false];
for (const textElement of text) {
    console.log(textElement)
}*/


/*З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
Записати цей об'єкт в новий масив
Example:
let usersWithCities = [
    {
        id: 1, // <===
        name: 'vasya',
        age: 31,
        status: false,
        address: {
            user_id: 1, // <===
            country: 'Ukraine',
            city: 'Ternopil'
        }
    },*/

/*

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];


let usersWithCities = [];
for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (user.id === city.user_id){
            usersWithCities.push
            (
                {id:user.id, name: user.name, age: user.age, status: user.status,
                    address: {
                    userId: city.user_id,
                        country: city. country,
                        city: city.city
                    }
            }
            )
        }
    }
}
console.log(usersWithId);
console.log(citiesWithId);
console.log(usersWithCities);
*/
