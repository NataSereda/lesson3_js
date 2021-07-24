/*
for (let s = 0; s < 5; s++) {
    console.log(s)
}
*/


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


/*
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
*/


/*Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
EXAMPLE:
[{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]*/

// let users1 = [
//     { name: `Dima`,
//         age: 13,},
//     { model:`Camry`}];
// function name2 (arr) {
//     let users2 = [];
//     for (let name1 of arr) {
//         for (let users1 in name1) {
//             users2.push(name1[users1])
//
//         }
//     }
//     return users2
// }
// let res1 = name2(users1);
// console.log(res1);

/*створити функцію яка заповнює масив рандомними числами
* (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
*/
/*
let gen = [];
for (i = 0; i < 20; i++) {
    gen.push( Math.round( Math.random() * 100 ));
}
console.log(gen)*/


/*
- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort*/

/*let numbers = [1,5,3,6,8,5,9,14,4,75,50,8,90];

/!*numbers.sort(function (a,b) {
    return a-b;
})
console.log(numbers);*!/*/

/*створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа*/
/*let numbers = [1, 5, 3, 6, 8, 5, 9, 14, 4, 75, 50, 8, 90];


let filter = numbers.filter(function(number) {
    return number % 2 ===0;
});
console.log( filter );*/

/*ивстворити масив рандомних цілих числових значень(абозгенерувати, задопомогипопередньоїфункції) .задопомоги map та  колбеку перетворити
всі об'єкти в масиві на срінгові.*/

/*let map = numbers.map(function (number) {
    number += ``
    return {number}
});
console.log(map);*/

/*
/!*Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)
Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)*!/


class User {
constructor (id, name, surname, email, phone) {
 this.id = id;
 this.name = name;
 this.surname = surname;
 this.email = email;
 this.phone = phone;
}

}
const natalia = new User(1, `Natalia`, `Sereda`, `nat@gmail.com`, `02123464`)
const olia  = new User(2, `Olia`, `Mok`, `sdvgsd@gmail.com`, `021564`)
const kate = new User(3, `Kate`, `Dulk`, `nsegfsdt@gmail.com`, `0211164`)
const sofa = new User(4, `Sofia`, `long`, `dss@gmail.com`, `021311164`)
const lilia = new User(5, `Lilia`, `Short`, `sdvfsd@gmail.com`, `02333564`)


console.log( )
console.log()
*/




/*// 	- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================*/


/*

class Car {
	constructor(model, manufacturer, year, maxSpeed, volumeEngine) {
		this.model = model;
		this.manufacturer = manufacturer;
		this.year = year;
		this.maxSpeed = maxSpeed;
		this.volumeEngine = volumeEngine;
	}

	drive() {
		console.log(`Їдемо зі швидкістю ${this.maxSpeed} км на годину`);
	}

	info() {
		console.log(`
		model : ${this.model} 
		manufacturer : ${this.manufacturer} 
		maxSpeed : ${this.maxSpeed}
		volumeEngine : ${this.volumeEngine}
		`);
	}
	increaseMaxSpeed(newSpeed = 0)
	{ console.log(this.maxSpeed += newSpeed)
	}

	changeYear(newValue = 2021 ){
		console.log(this.year=newValue)

	}
	addDriver (driver) {
		console.log(this.driver = driver)}

}
const nissan = new Car (`leaf`, `nissan`, 2019, 150, `electric`,);

console.log(nissan);
nissan.drive()
nissan.info()
nissan.increaseMaxSpeed(20)
nissan.changeYear()
nissan.addDriver(`Olia`)
*/


